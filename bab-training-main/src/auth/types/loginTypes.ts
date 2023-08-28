export interface IUser {
  email: string;
  id: number;
  name: string;
  photo: string | null;
}

export interface ILoginResponse<T> {
  success: boolean;
  data?: T;
  token?: string | undefined;
  message?: string;
  type?: string;
  status?: number;
}
 
export interface IFormInput {
email: string;
username?: string;
password: string;
remember: boolean;
}
