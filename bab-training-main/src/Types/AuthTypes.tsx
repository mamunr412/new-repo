export interface IUser {
  avatar: null | string;
  designation: string;
  email: string;
  id: number;
  name: string;
  phone: null | string;
  status: string;
  user_member_id: number;
}

export interface IAuthContextState {
  user: IUser;
  isLoading?: boolean;
  isError?: boolean;
  dispatch?: any;
  setIsLoading?: any;
}
