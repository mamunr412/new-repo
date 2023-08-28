import { useQuery } from "react-query";
import { Api_EndPoints } from "../../../utils/apiEndPoints";
import { fetchClass, fetchMyInfo, fetchSingleClass } from "./FetchQuery";
import { IMyInformation, IMyInformationResponse } from "../../../Types/MyInfo";
import {
  IClass,
  IClassResponse,
  ISingleClass,
  ISingleClassResponse,
} from "../../../Types/ClassTypes";

export const GetClass = (id: number) => {
  const { data, isLoading, error } = useQuery<IClassResponse, Error>(
    [Api_EndPoints.TRAINEE_CLASS],
    () => fetchClass(id)
  );
  return {
    classes: data?.data ?? ([] as IClass[]),
    isLoading,
    error,
  };
};
export const GetSingleClass = (id: number) => {
  const { data, isLoading, error } = useQuery<ISingleClassResponse, Error>(
    [Api_EndPoints.TRAINEE_SINGLE_CLASS],
    () => fetchSingleClass(id)
  );
  return {
    singleClass: data?.data ?? ({} as ISingleClass),
    isLoading,
    error,
  };
};

export const GetMyInformation = (id: number) => {
  const { data, isLoading, error } = useQuery<IMyInformationResponse, Error>(
    [Api_EndPoints.TRAINEE_INFORMATION],
    () => fetchMyInfo(id)
  );
  return {
    myInformation: data?.data ?? ({} as IMyInformation),
    isLoading,
    error,
  };
};
