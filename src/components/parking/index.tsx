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
            Time For This Session
          </div>

          <div className="relative pt-1 ">
            <input
              type="range"
              className="
              range 
              range-accent
              mx-10
              w-3/4
              "
              min="0"
              max="5"
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
              17:02:59 01/05/2022
            </div>
            <div className='flex mx-10 py-1'>
              PARKING FEE: $3
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