export default function isAdminQuery() {
  if (window) {
    return window.localStorage.getItem("isAdmin");
  }
}
