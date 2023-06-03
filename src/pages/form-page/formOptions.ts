import countries from "../../data/countries.json";

export const objectOptions = [
  "Expert",
  "Vietnamese",
  "International Student",
  "Other",
];

export const genderOptions = ["Male", "Female", "Other"];

export const nationalityOptions = countries.map((country) => country.name);

export const provinceOptions = [];

export const districtOptions = [];
