import { ReactNode } from 'react';

import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';

type INavbarProps = {
  logo: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="grid grid-cols-2 gap-y-5 py-4 px-2 items-center justify-between">
    
    <div className=' '>
      <div>
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>
    </div>

    <div>
      <div className="text-xl font-bold float-right">
        Login Logout        
      </div>
    </div>


    <div className="text-l font-bold flex col-start-1 col-end-7"> 
    {AppConfig.description}  
        
    </div>


  </div>
);

export { NavbarTwoColumns };