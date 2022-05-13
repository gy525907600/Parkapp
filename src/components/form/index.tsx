import { useLocalStorage } from '@/custom-hooks/local-storage';
import { useRouter } from 'next/router';

export const UserForm = () => {
  const router = useRouter();
  // const [siteId, setSIteId ] = useState(1);
  const [rego, setRego] = useLocalStorage<string>('rego','')
  const [paidHours, setPaidHours] = useLocalStorage<number>('paidHours' , 0);
  console.log(rego);
  console.log(paidHours);



  return (
    <div>

{/* 
        <div className='h-auto text-black-400'>
          <div > Please Input Your Rego Number</div>
          <div className='flex justify-center py-4'>
            <div className='bg-pink-200 
            rounded-lg 
            h-32 
            font-medium 
            mx-6
            shadow-md 
            duration-150
            border-solid 
            border-4 
            border-black
            text-black
            relative '>
              <label className= "absolute left-1 top-0 h-4 w-4 ">•</label> 
              <label className= "absolute top-0 right-0 h-4 w-4 ">•</label> 
              <label className= "absolute bottom-0 right-0 h-8 w-4 ">•</label> 
              <label className= "absolute bottom-0 left-1 h-8 w-4 ">•</label> 
              <input type="text" 
              className='bg-white-400 
              uppercase 
              h-full 
              w-full
              text-6xl
              tracking-widest
              text-center	
              ' 
              placeholder="ABC123"/>
            </div>
          </div>
        </div> */}
      {/* <div className="flex justify-center align-middle">
        <div className="mb-3 xl:w-96 py-2">
          <label
            className="form-label inline-block mb-2 text-gray-700 text-l font-semibold"
          >
            Please Input Your Plate Num:
          </label>
          <input
            type="text"
            required
            minLength={2}
            maxLength={6}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        uppercase
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            placeholder="Your_Rego"
            value={rego}
            onChange={e => setRego(e.target.value.toUpperCase())}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            className="form-label inline-block mb-2 text-gray-700 text-l font-semibold"
          >
            How Long You Like To Stay:
          </label>
          <select
            value = {paidHours}
            required
            onChange = {e => setPaidHours(+(e.target.value)) }
            className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-lg
            font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option defaultValue={1} >Click to Select </option>
            <option value={1}>1_Hour</option>
            <option value={2}>2_Hours</option>
            <option value={3}>3_Hours</option>
            <option value={4}>4_Hours</option>
            <option value={5}>5_Hours</option>
            <option value={6}>6_Hours and More</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-center py-4">
        <button
          onClick={() =>router.push('/confirm')}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="
          inline-block 
          items-end 
          px-6 
          py-2.5 
          bg-green-700 
          text-white 
          font-medium 
          text-xm leading-tight 
          uppercase rounded shadow-md 
          hover:bg-blue-700 hover:shadow-lg 
          focus:bg-blue-700 focus:shadow-lg focus:outline-none 
          focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
          duration-150 ease-in-out"
        >Next</button>
      </div> */}

      <div className='h-32 text-black-400'>
        <div > Early Bird Parking is Available Now</div>
       
        <div className='flex justify-center py-4'>
          <button className='
          bg-green-101
          rounded-2xl 
          h-16 
          w-11/12
          mx-6

          font-medium 
          hover:bg-blue-700 
          hover:shadow-lg 
          shadow-md 
          duration-150'>
            $8 EarlyBird Parking Up to 12 Hours
          </button>
        </div>
      </div>


    

        <div className='h-32 text-black-400'>
          <div > Casul Parking, No Time Limit</div>
          <div className='flex justify-center py-4'>
            <button className='          
            bg-green-102
 
            rounded-2xl 
            h-16 
            w-11/12
            mx-6

            font-medium 
            hover:bg-blue-700 
            hover:shadow-lg 
            shadow-md 
            duration-150'>
              Click to Choose
            </button>
          </div>
        </div>







        <div className='h-auto text-black-400'>
          <div > Already Parking Here, Ckeck or Extend The Session</div>
          <div className='flex justify-center py-4'>
            <button className='          
            bg-green-103

            rounded-2xl 
            h-16 
            w-11/12
            mx-6

            font-medium 
            hover:bg-blue-700
            hover:shadow-lg 
            shadow-md 
            duration-150'>
              Check or Extend
            </button>
          </div>
        </div>

         




    </div>

  );
};
