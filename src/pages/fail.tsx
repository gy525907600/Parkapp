import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Fail = () => {
  const router = useRouter();

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
      <h1 className="text-xl font-bold pt-2 text-center text-green-700">
       Payment Failed, Please try again!
      </h1>
    
    </Main>
  );
};

export default Fail;