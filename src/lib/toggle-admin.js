// copy-paste this into the console
(function toggleAdmin() {
  if (window) {
    if (window.localStorage.getItem("isAdmin")) {
      window.localStorage.removeItem("isAdmin");
    } else {
      window.localStorage.setItem("isAdmin", "true");
    }
  }
})();
