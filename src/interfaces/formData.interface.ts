export interface IFormData {
  fullName: string;
  object: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  nationId: string;
  travels: ITravelForm[];
  province: string;
  district: string;
  address: string;
  mobile: string;
  email: string;
  symptoms?: string[];
  vaccines?: string;
}

export interface ITravelForm {
  departureDate: string;
  immigrationDate: string;
  departure: string;
  destination: string;
}
