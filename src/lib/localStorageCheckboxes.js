function localStorageKey(id) {
  // key it to the current page
  return `${document.location.pathname}#${id}`;
}

function persist(event) {
  const id = event.target.id;
  if (event.target.checked) {
    localStorage.setItem(localStorageKey(id), "true");
  } else {
    localStorage.setItem(localStorageKey(id), "false");
  }
}

export function clearLocalStorage() {
  document.querySelectorAll("input.save-to-local-storage").forEach((inputEl) => {
    const id = inputEl.id;
    localStorage.setItem(localStorageKey(id), false);
    inputEl.checked = false;
  });
}

export function connectCheckboxes() {
  document.querySelectorAll("input.save-to-local-storage").forEach((inputEl) => {
    const id = inputEl.id;
    inputEl.checked = localStorage.getItem(localStorageKey(id)) == "true";
    inputEl.addEventListener("change", persist);
  });
}
