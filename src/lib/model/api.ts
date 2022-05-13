export interface IResponse<T = any> {
  code: number;
  msg: string;
  data?: T;
}

export interface QueryParams {
  [key: string]: string | number;
}
