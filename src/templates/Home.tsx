import { useRouter } from 'next/router';
import { useState } from 'react';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { UserForm } from '@/components/form';
import { Rego } from '@/components/rego';


const Home = () => {
  const router = useRouter();
  let siteId = router.query.siteId;
  console.log('siteId: '+siteId);

  const [regoNumber, setRegoNumber] = useState<any>('');

  return (
    <Main
      meta={
        <Meta
          title="Inpark Pay-By-Registration"
          description="Inpark Pay By Your Registration, Scan the QR code, Pay your parking online by your rego."
        />
      }
    >
      {/* <a href="/" >
        <img
          src={`${router.basePath}/assets/images/banner.png`}
          alt="Inpark banner"
        />
      </a> */}
      <h1 className="text-2xl font-bold py-3 text-center text-green-700">
        Welcome to George street
      </h1>
      <Rego regoNumber={regoNumber} setRegoNumber={setRegoNumber}/>

      <UserForm regoNumber={regoNumber}/>
    </Main>
  );
};
// to-do add get


export {Home};