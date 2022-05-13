import { useLocalStorage } from '@/custom-hooks/local-storage';
import { useRouter } from 'next/router';

export const Rego = () => {
  const router = useRouter();
  // const [siteId, setSIteId ] = useState(1);
  const [rego, setRego] = useLocalStorage<string>('rego', '')
  const [paidHours, setPaidHours] = useLocalStorage<number>('paidHours', 0);
  console.log(rego);
  console.log(paidHours);



  return (
    <div>


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
            <label className="absolute left-1 top-0 h-4 w-4 ">•</label>
            <label className="absolute top-0 right-0 h-4 w-4 ">•</label>
            <label className="absolute bottom-0 right-0 h-8 w-4 ">•</label>
            <label className="absolute bottom-0 left-1 h-8 w-4 ">•</label>
            <input type="text"
              className='bg-white-400 
              uppercase 
              h-full 
              w-full
              text-6xl
              tracking-widest
              text-center	
              '
              placeholder="ABC123" />
          </div>
        </div>
      </div>


    </div>

  );
};
