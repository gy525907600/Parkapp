import { IResponse } from "@/lib/model/api";
import axios, { AxiosError } from "axios";

const baseURL = 'http://localhost:4000/api';

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  responseType: 'json',
});


class ApiService {

  public async createOrder(newOrderData: any) {
    
    return await axios.post(
      (`${baseURL}/orders/new-order`),newOrderData)
      .then(function(response) {
        const orderData = response.data;
        console.log(orderData)
        return orderData;
      })
      .catch(() =>{
        this.errorHandler;
      })
  }

  public async sendPayRequest(reqData: any){

    return await axios.post(
      (`${baseURL}/windcave/request`),reqData)
      .then(function(response) {
        const url = response.data;
        console.log(url)
        return url;
      })
      .catch(() =>{
        this.errorHandler;
      })
  }

 public async getPayResponse(params: string){
   if (params === undefined){
     return {     
     repCode: '',
     siteName: '',
     orderId: 0,
     rego: '',
     payment: 0,
     orderDate: '',
     validateTime: '',}
   }

  return await axios.get(
    (`${baseURL}/windcave/callback?result?=${params}`))
    .then(function(response) {
      const receiptData = response.data;
      console.log(receiptData)
      return receiptData;
    })
    .catch(() =>{
      this.errorHandler;
    })
}

public async updatePayStatus(params: any){

  return await axios.put(
    (`${baseURL}/orders/${params}`))
    .catch(() =>{
      this.errorHandler;
    })
}


  protected isError(code: number): boolean {
    return !(code.toString().startsWith('2') || code.toString().startsWith('3'));
  }

  protected showMessage = (isSuccessDisplay = false) => (res: IResponse): IResponse => {
    const { code, msg } = res;
    const isError = this.isError(code);

    if (isError) {
      console.log(msg);
    }

    if (isSuccessDisplay && !isError) {
      console.log(msg);
    }

    return res;
  };

  private errorHandler(err: AxiosError<IResponse>): IResponse {
    const msg = err.response?.data.msg ?? 'unknown error';
    const code = err.response?.status ?? -1;

    if (!err.response) {
      console.error(err);
    }

    return { msg, code };
  }
}

const apiService = new ApiService();

export default apiService;
