import { IResponse } from "./CommonTypes";

export interface IClass {
  id: number;
  title: string;
  teacher: string;
  date: string;
}

export interface IClassResponse extends IResponse {
  data?: IClass[];
}

export interface ISingleClass {
  id: number;
  title: string;
  teacher: string;
  details: string;
  date: string;
  time: string;
  created_at: string;
}
export interface ISingleClassResponse extends IResponse {
  data?: ISingleClass;
}
