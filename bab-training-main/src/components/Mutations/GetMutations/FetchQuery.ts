import {
  IClassResponse,
  ISingleClassResponse,
} from "../../../Types/ClassTypes";
import { IMyInformationResponse } from "../../../Types/MyInfo";
import { HttpClient } from "../../../app/Api/HTTPClient";
import { Api_EndPoints } from "../../../utils/apiEndPoints";

export const fetchClass = async (id: number) => {
  return await HttpClient.get<IClassResponse>(
    `${Api_EndPoints.TRAINEE_CLASS}/${id}`
  );
};
export const fetchSingleClass = async (id: number) => {
  return await HttpClient.get<ISingleClassResponse>(
    `${Api_EndPoints.TRAINEE_SINGLE_CLASS}/${id}`
  );
};
export const fetchMyInfo = async (id: number) => {
  return await HttpClient.get<IMyInformationResponse>(
    `${Api_EndPoints.TRAINEE_INFORMATION}/${id}`
  );
};
