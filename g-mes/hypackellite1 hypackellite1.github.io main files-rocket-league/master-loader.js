"use strict";

/*
  master-loader.js
  - Expects JSZip already loaded (via <script src="...jszip.min.js">)
  - Expects these files next to index.html:
      game1.zip  (contains RSD 1.1.0rc4.data.unityweb)
      game2.zip  (contains RSD 1.1.0rc4.wasm.framework.unityweb)
      game3.zip  (contains RSD 1.1.0rc4.wasm.code.unityweb)
      UnityLoader.js
      build.json
*/

if (window.__MASTER_LOADER_LOADED__) {
  console.warn("master-loader already loaded; skipping duplicate.");
} else {
  window.__MASTER_LOADER_LOADED__ = true;

  const ZIP_FILES = ["game1.zip", "game2.zip", "game3.zip"];
  const LOADED = {}; // filename -> ArrayBuffer

  /* ---------- utilities ---------- */
  function stripQuery(url) {
    return url.split("?")[0];
  }

  function basename(url) {
    const s = stripQuery(url).split("/");
    return s[s.length - 1];
  }

  /* ---------- load + extract zips ---------- */
  async function loadZip(zipName) {
    console.log("[loader] downloading:", zipName);
    const resp = await fetch(zipName);
    if (!resp.ok) throw new Error("Failed to download " + zipName + " : " + resp.status);
    const ab = await resp.arrayBuffer();
    const zip = await JSZip.loadAsync(ab);

    for (const path of Object.keys(zip.files)) {
      const entry = zip.files[path];
      if (entry.dir) continue;
      const fileAb = await entry.async("arraybuffer");
      // store under exact internal path (Unity often requests just the file basename)
      const key = path.replace(/^\//, ""); // remove leading slash
      LOADED[key] = fileAb;
      LOADED[basename(key)] = fileAb; // also store by basename for safety
      console.log("[loader] extracted:", key);
    }
  }

  async function loadAllZips() {
    for (const z of ZIP_FILES) {
      await loadZip(z);
    }
    console.log("[loader] All ZIPs extracted.");
  }

  /* ---------- patch XHR: force async + intercept when appropriate ---------- */
  function applyXHRPatches() {
    // 1) Force async=true for any calls that would otherwise be sync
    const proto = window.XMLHttpRequest.prototype;
    const origOpen = proto.open;
    proto.open = function (method, url, async /*, user, password */) {
      // If async is explicitly false, force it to true to avoid sync responseType limitations.
      if (async === false) async = true;
      // store the URL for later use
      this.__requestedUrl = url;
      return origOpen.call(this, method, url, async);
    };

    // 2) Intercept send to reply from LOADED when possible
    const origSend = proto.send;
    proto.send = function (body) {
      try {
        const url = this.__requestedUrl || "";
        const file = basename(url);

        // If we have it in memory, serve it asynchronously
        if (file && LOADED[file]) {
          const arrayBuffer = LOADED[file];

          // Ensure responseType won't cause problems: emulate async XHR callback behavior
          // The real Unity loader sets responseType = "arraybuffer" and expects xhr.response to be ArrayBuffer.
          const xhr = this;

          // Set some standard fields so Unity's code sees them
          setTimeout(() => {
            try {
              xhr.readyState = 4;
              xhr.status = 200;
              // Provide ArrayBuffer in xhr.response
              Object.defineProperty(xhr, "response", { value: arrayBuffer, writable: false });
              // responseText is not used for binary, but keep empty string
              Object.defineProperty(xhr, "responseText", { value: "", writable: false });

              if (typeof xhr.onload === "function") try { xhr.onload(); } catch (e) { console.error(e); }
              if (typeof xhr.onreadystatechange === "function") try { xhr.onreadystatechange(); } catch (e) { console.error(e); }
            } catch (inner) {
              console.error("[loader] error while emulating XHR response:", inner);
            }
          }, 0);

          return;
        }
      } catch (e) {
        console.warn("[loader] XHR interception error, falling back to network:", e);
      }

      // otherwise do the real network send
      return origSend.call(this, body);
    };

    console.log("[loader] XHR patches applied (sync forced -> async, interception enabled).");
  }

  /* ---------- main bootstrap ---------- */
  async function bootstrap() {
    try {
      console.log("[loader] starting");

      // 1) load zips and extract into LOADED map
      await loadAllZips();

      // 2) patch XHR
      applyXHRPatches();

      // 3) load UnityLoader.js (network file) and start Unity
      console.log("[loader] loading UnityLoader.js");
      await new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "UnityLoader.js";
        s.onload = resolve;
        s.onerror = () => reject(new Error("Failed to load UnityLoader.js"));
        document.head.appendChild(s);
      });

      console.log("[loader] UnityLoader loaded, instantiating Unity");
      // ensure UnityLoader global exists
      if (window.UnityLoader && typeof UnityLoader.instantiate === "function") {
        UnityLoader.instantiate("gameContainer", "build.json");
      } else if (typeof createUnityInstance === "function") {
        // newer templates may use createUnityInstance
        createUnityInstance(document.getElementById("gameContainer"), {
          dataUrl: LOADED["RSD 1.1.0rc4.data.unityweb"] ? "RSD 1.1.0rc4.data.unityweb" : "Build/build.data",
          frameworkUrl: LOADED["RSD 1.1.0rc4.wasm.framework.unityweb"] ? "RSD 1.1.0rc4.wasm.framework.unityweb" : "Build/build.framework.js",
          codeUrl: LOADED["RSD 1.1.0rc4.wasm.code.unityweb"] ? "RSD 1.1.0rc4.wasm.code.unityweb" : "Build/build.wasm"
        }).then(inst => console.log("[loader] Unity started"), e => console.error("[loader] Unity start failed", e));
      } else {
        throw new Error("No Unity loader found (UnityLoader.instantiate or createUnityInstance)");
      }

    } catch (err) {
      console.error("[loader] bootstrap failed:", err);
      const d = document.createElement("div");
      d.style.position = "fixed";
      d.style.left = 0;
      d.style.right = 0;
      d.style.top = 0;
      d.style.background = "maroon";
      d.style.color = "#fff";
      d.style.padding = "12px";
      d.style.zIndex = 9999;
      d.innerText = "Game loader error: " + (err && err.message ? err.message : err);
      document.body.appendChild(d);
    }
  }

  // Run
  bootstrap();
}
