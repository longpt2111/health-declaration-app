import { IFormData } from "../interfaces/formData.interface";

export function getLocalStorage(key: string): IFormData[] {
  return JSON.parse(localStorage.getItem(key) as string) || [];
}

export function removeLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

export function setLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}
