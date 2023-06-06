export function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) as string) || [];
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}
