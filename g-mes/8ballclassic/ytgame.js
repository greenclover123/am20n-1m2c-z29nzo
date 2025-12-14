// ytgame-stub.js
window.ytgame = {
  game: {
    firstFrameReady() {
      console.log("[ytgame] firstFrameReady (stub)");
    },
    gameReady() {
      console.log("[ytgame] gameReady (stub)");
    },
    saveData(data) {
      try {
        localStorage.setItem("ytgame-save", data);
      } catch {}
    },
    loadData() {
      try {
        return localStorage.getItem("ytgame-save") || "";
      } catch {
        return "";
      }
    },
    pause() {},
    resume() {}
  },
  ads: {
    requestAd() {
      return Promise.resolve(0); // DISMISSED
    }
  },
  environment: {
    IN_PLAYABLES_ENV: false
  }
};
