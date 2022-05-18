import { useLocalStorage } from '@/custom-hooks/local-storage';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import * as moment from 'moment';

const defaultValue = 8;
const value = 4;
const defaultStep = 4;

const saveLocal = (value: any) => {
  localStorage.setItem('parking', JSON.stringify(value));
}

const getLocal = () => {
  const parking = localStorage.getItem('parking')
 return parking ? JSON.parse(parking): [];
}

export const UserForm = () => {
  const router = useRouter();
  const {  type, rego }: any = router.query;
  const [time, setTime ] = useState<any>();
  const [step, setStep ] = useState<any>(defaultStep);
  const [total, setTotal ] = useState<number>(0);

  useEffect(() => {
    let local: any = getLocal()
    if(type === '1') {
      const hours: any = moment().hours();
      if(hours < 8){
        setTotal(value)
        const findIndex = local.findIndex((item: any) => item.rego == rego);
        if(findIndex > -1){
          local[findIndex] = {rego, step, total: value};
        }else{
          local.push({rego, step, total: value})
        }
        saveLocal(local)
      }else {
        setTotal(value * defaultStep)

        const findIndex = local.findIndex((item: any) => item.rego == rego);
        if(findIndex > -1){
          local[findIndex] = {rego, step, total: value * defaultStep};
        }else{
          local.push({rego, step, total: value * defaultStep})
        }
        saveLocal(local)
        setTime(moment().add(step, 'h').format('YYYY-MM-DD HH:mm:ss'))

      }
    }else if(type === '2'){
      setTotal(value * defaultStep)
      const findIndex = local.findIndex((item: any) => item.rego == rego);
      if(findIndex > -1){
        local[findIndex] ={rego, step, total: value * defaultStep};
      }else{
        local.push({rego, step, total: value * defaultStep})
      }
      saveLocal(local)
      setTime(moment().add(step, 'h').format('YYYY-MM-DD HH:mm:ss'))
    }else{
      let parking: any = getLocal()
      if(parking && Array.isArray(parking)){
        const findParking = parking.find((item) => item.rego == rego);
        if(findParking && findParking.rego){
          setTotal(findParking.total);
          setStep(parseInt(findParking.step))
          setTime(moment().add(parseInt(findParking.step), 'h').format('YYYY-MM-DD HH:mm:ss'))
        }
      }
    }
  }, [])

  const handleChange = (e:any) => {
    const val = parseInt(e.target.value);
    setStep(val)
    setTotal(value * val)
    const newVal = Math.abs(val - step);
    setTime(moment(new Date(time)).add(newVal, 'h').format('YYYY-MM-DD HH:mm:ss'));
    let local: any = getLocal()
    const findIndex = local.findIndex((item: any) => item.rego == rego);
    if(findIndex > -1){
      local[findIndex] = {rego, step, total: value * val};
    }else{
      local.push({rego, step, total: value * defaultStep})
    }
    saveLocal(local)
  }

  return (
    <div>
      <div>
        <div className='h-auto text-black-400'>
          <div className='h-auto text-black-400'>
            Time For This Session
          </div>

          <div className="relative pt-1 ">
            <input
              onChange={handleChange}
              value={step}
              type="range"
              className="
              range
              range-accent
              mx-10
              w-3/4
              "
              min="0"
              max="12"
              step="0.5"
            />
            {/* <ul className="flex justify-between w-full px-[10px]">
                <li className="flex justify-center relative"><span class="absolute">1H</span></li>
                <li className="flex justify-center relative"><span class="absolute">1D</span></li>
                <li className="flex justify-center relative"><span class="absolute">1W</span></li>
                <li className="flex justify-center relative"><span class="absolute">1M</span></li>
                <li className="flex justify-center relative"><span class="absolute">1Y</span></li>
                <li className="flex justify-center relative"><span class="absolute">ALL</span></li>
            </ul> */}

          </div>

          <div className='divide-y'>

            <div className='flex mx-10 py-1 '>
              PARK UNTIL:
              <br />
              {time}
            </div>
            <div className='flex mx-10 py-1'>
              PARKING FEE: ${total}
            </div>

            <div className='mx-16'></div>
          </div>

        </div>
      </div>


      <div className='h-12 py-2 my-2'>
        <button onClick={() => router.back()} className='h-12 w-2/12 float-left bg-blue-200 rounded-2xl 
          hover:bg-blue-700
            hover:shadow-lg 
            shadow-md 
            mx-10
            duration-150'>
          Back
        </button>

        <button className='h-12 w-2/12 float-right bg-red-500 rounded-2xl 
          hover:bg-blue-700
            hover:shadow-lg 
            mx-10
            shadow-md 
            duration-150'>
          Next
        </button>
      </div>


    </div>

  );
};