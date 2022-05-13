import { ICreateOrderReq, PaymentRequest } from '../../types/types';
import { httpPost } from './httpRequest';
import { RootPath, subPath } from '../../lib/service/api-path';

export async function createOrder(newOrderData:ICreateOrderReq) {

  return httpPost(
    [RootPath.order,subPath.newOrder],
    newOrderData)
}

export async function sendPaymentRequest(paymentReq: PaymentRequest){

  return httpPost(
    [RootPath.windcave,subPath.request],
    paymentReq)

}