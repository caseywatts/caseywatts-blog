function localStorageKey(id) {
  // key it to the current page
  return `${document.location.pathname}#${id}`;
}

export function localStorageSet(id, checkedState) {
  if (checkedState) {
    localStorage.setItem(localStorageKey(id), "true");
  } else {
    localStorage.setItem(localStorageKey(id), "false");
  }
}

export function localStorageGet(id) {
  return localStorage.getItem(localStorageKey(id)) == "true";
}
