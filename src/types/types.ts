export interface ICreateOrderReq {
  siteId: number,
  rego: string,
  paiHours: number,
  payment: number,
  validateTime: string
}

export interface INewOrderResponse {
  id: number;
  rego: string;
  paiHours: number;
  payment: number;
  validateTime: string;
}


export type NewOrderResponse = INewOrderResponse;
// passing the same order response data to form the payment request data in backend


export interface UserData {
  rego: string,
  paidHours: number,
}

export interface IPaymentRequest {
  id: number;
  siteName: string;
  rego: string;
  paiHours: number;
  payment: number;
  validateTime: string;
}

export type PaymentRequest = IPaymentRequest;