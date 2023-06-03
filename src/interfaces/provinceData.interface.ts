export interface IPropsProvinceDistrict {
  [province: string]: {
    name: string;
    cities: {
      [district: string]: string;
    };
  };
}
