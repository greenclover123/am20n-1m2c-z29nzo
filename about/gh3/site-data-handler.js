// site-data-handler.js
import { client } from './app.js';

function showSiteStatus(msg, type = "success") {
  const el = document.getElementById("siteDataStatus");
  el.innerText = msg;
  el.className = type;
}

// Inject CryptoJS if needed
function loadCrypto(callback) {
  if (window.CryptoJS) return callback();

  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
  script.onload = callback;
  document.head.appendChild(script);
}

function handleSave() {
  showSiteStatus("Saving...");

  loadCrypto(() => {
    try {
      const localEntries = Object.entries(localStorage);
      const cookies = document.cookie;

      const payload = {
        localStorage: btoa(JSON.stringify(localEntries)),
        cookies: btoa(cookies),
      };

      const fullString = btoa(JSON.stringify(payload));
      const encrypted = CryptoJS.AES.encrypt(fullString, "egamepass").toString();

      client.auth.getUser().then(async ({ data: { user } }) => {
        if (!user) return showSiteStatus("Not logged in.", "error");

        // Delete existing row first
        await client.from("user_data").delete().eq("user_id", user.id);

        // Insert new row
        const { error } = await client
          .from("user_data")
          .insert({ user_id: user.id, content: encrypted });

        if (error) showSiteStatus("Save failed: " + error.message, "error");
        else showSiteStatus("Website data saved!");
      });
    } catch (err) {
      showSiteStatus("Error saving: " + err.message, "error");
    }
  });
}

function handleLoad() {
  showSiteStatus("Loading...");

  client.auth.getUser().then(async ({ data: { user } }) => {
    if (!user) return showSiteStatus("Not logged in.", "error");

    const { data, error } = await client
      .from("user_data")
      .select("content")
      .eq("user_id", user.id)
      .single();

    if (error || !data || !data.content) {
      return showSiteStatus("Load failed: " + (error?.message || "No saved data"), "error");
    }

    const encrypted = data.content;

    loadCrypto(() => {
      try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, "egamepass").toString(CryptoJS.enc.Utf8);
        const parsed = JSON.parse(atob(decrypted));
        const localData = JSON.parse(atob(parsed.localStorage));
        const cookies = atob(parsed.cookies);

        for (let [key, value] of localData) {
          localStorage.setItem(key, value);
        }

        document.cookie = cookies;
        showSiteStatus("Website data loaded! Reloading...");
        setTimeout(() => window.location.reload(), 1000);
      } catch (err) {
        showSiteStatus("Error loading: " + err.message, "error");
      }
    });
  });
}

// ✅ DOM ready binding
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  const loadBtn = document.getElementById("loadBtn");

  if (saveBtn) saveBtn.addEventListener("click", handleSave);
  if (loadBtn) loadBtn.addEventListener("click", handleLoad);
});
