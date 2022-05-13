import { useLocalStorage } from '@/custom-hooks/local-storage';
import { useRouter } from 'next/router';

export const UserForm = () => {
  const router = useRouter();
  // const [siteId, setSIteId ] = useState(1);
  const [rego, setRego] = useLocalStorage<string>('rego', '')
  const [paidHours, setPaidHours] = useLocalStorage<number>('paidHours', 0);
  console.log(rego);
  console.log(paidHours);



  return (
    <div>

      <div>
        <div className='h-auto text-black-400'>
          <div className='h-auto text-black-400'>
            Details For This Session
          </div>


          <div className='divide-y'>
            <div className='flex mx-10 py-1 '>
              CARPARK:  QUEEN STREET
            </div>
            <div className='flex mx-10 py-1'>
              TIME_TO_STAY: 2HOURS
            </div>
            <div className='flex mx-10 py-1'>
              PARKING FEE: $6
            </div>
            <div className='flex mx-10 py-1'>

              VALIDATE UNTIL: 
              <br />
              16:02:34 01/0152022
            </div>
            <div className='mx-16'></div>
          </div>

        </div>
      </div>


      <div className='h-12 py-2 my-2'>
        <button className='h-12 w-2/12 float-left bg-blue-200 rounded-2xl 
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