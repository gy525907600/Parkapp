import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { useEffect, useState } from 'react';
import axios from "axios";
import apiService from './api/api-Services';

const Success = () => {
  const router = useRouter();
  // const resultId = router.query.result;
  // problem here is next pages first rendered from server 
  // this will be undefined in client side
  const [ receiptData , setReceiptData ] = useState({
    repCode: '',
    siteName: '',
    orderId: 0,
    rego: '',
    payment: 0,
    orderDate: '',
    validateTime: '',
  })
  // getServerSideProps ??
  if (typeof window !== 'undefined') {
    const resultId = router.query.result;
    useEffect(() => {
      const fetchData = async() =>{ 
        const resData = await axios.get(
        `http://localhost:4000/api/windcave/callback?result=${resultId}`)
        .then(function (response) {
          const receipt = response.data;
          console.log(receipt)
          return receipt;
        })
        return setReceiptData(resData);
      }
    
      fetchData() 
    },[resultId])

  const orderId = receiptData.orderId;
  console.log(orderId);
  useEffect(() =>{
    
    const updatePayStatus = async() =>{
      await apiService.updatePayStatus(orderId);
    }
    updatePayStatus()
  },[orderId])

  }
  //   Use this resultId send to backend to get payment result
  //  If payment result 200 update order payment result 
  //  and then create receipt for this payment 
  //  and show the receipt as result
  return (
    <Main
      meta={
        <Meta
          title="Inpark Pay-By-Registration"
          description="Inpark Pay By Your Registration, Scan the QR code, Pay your parking online by your rego."
        />
      }
    >
      <a href="/" >
        <img
          src={`${router.basePath}/assets/images/banner.png`}
          alt="Inpark banner"
        />
      </a>
      <h1 className="text-xl font-bold pt-3 text-center text-green-700">
       Payment Successful, Enjoy Your Visit!
      </h1>
      <div className="flex justify-center">
        <ul className="bg-white rounded-lg min-w-full w-96 text-gray-900">
          <li className="px-4 py-2 border-b border-gray-200 w-full rounded-t-lg">Thanks for Visiting: {receiptData.siteName}</li>
          <li className="px-4 py-2 border-b border-gray-200 w-full">Your Receipt_Code: {receiptData.repCode}</li>
          <li className="px-4 py-2 border-b border-gray-200 w-full">Your Registration: {receiptData.rego}</li>
          <li className="px-4 py-2 border-b border-gray-200 w-full">Parking Fee: {receiptData.payment}$</li>
          <li className="px-4 py-2 border-b border-gray-200 w-full rounded-b-lg">Validate Until: {receiptData.validateTime}</li>
          <li className="px-4 py-2 border-b border-gray-200 w-full rounded-t-lg">Please Visit: https://myreceipt.inpark.nz</li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">to get your invoice/receipt</li>
        </ul>
      </div>
    </Main>
  );
};

export default Success;


