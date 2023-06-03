import countries from "../../data/countries.json";
import vnProvinceDistrict from "../../data/vietnam-province-district.json";
import { IPropsProvinceDistrict } from "../../interfaces/provinceData.interface";

export const objectOptions = [
  "Expert",
  "Vietnamese",
  "International Student",
  "Other",
];

export const genderOptions = ["Male", "Female", "Other"];

export const nationalityOptions = countries.map((country) => country.name);

export const provinceOptions = Object.keys(vnProvinceDistrict).map(
  (province) => (vnProvinceDistrict as IPropsProvinceDistrict)[province].name
);

export const districtsOfProvinceOptions = (province: string | undefined) => {
  const provinceKey = Object.keys(vnProvinceDistrict).find(
    (key) =>
      (vnProvinceDistrict as IPropsProvinceDistrict)[key].name === province
  );
  if (!provinceKey) return [];
  return Object.values(
    (vnProvinceDistrict as IPropsProvinceDistrict)[provinceKey].cities
  );
};
