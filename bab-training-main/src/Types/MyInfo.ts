import { IResponse } from "./CommonTypes";

export interface IMyInformation {
  id: number;
  designation: string;
  email: string;
  name_en: string;
  name_bn: string;
  official_address: string;
  residential_contact_number: string;
  official_contact_number: string;
  residential_address: string;
  date_of_birth: string;
  last_education_qualification: string;
  board: string;
  exam: string;
  division: string;
  year: string;
  group_subject: string;
  total_work_exp: string;
  proffessional_qualification: string;
  phone: null | string;
  photo: null | string;
  workshop_attended: number;
  signature: null | string;
}

export interface IMyInformationResponse extends IResponse {
  data?: IMyInformation;
}
