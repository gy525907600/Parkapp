import { useLocalStorage } from '@/custom-hooks/local-storage';
import { useRouter } from 'next/router';

export const CheckSession = () => {
  const router = useRouter();
  // const [siteId, setSIteId ] = useState(1);
  const [rego, setRego] = useLocalStorage<string>('rego', '')
  const [paidHours, setPaidHours] = useLocalStorage<number>('paidHours', 0);
  console.log(rego);
  console.log(paidHours);



  return (
    <div className='h-auto text-green-400 '>

      <div className='flex justify-center py-2'>
        LAST SESSION VALIDATE UNTIL:</div>
      <div className='flex justify-center py-2'>
        16:02:34  01/05/2022</div>

    </div>

  );
};