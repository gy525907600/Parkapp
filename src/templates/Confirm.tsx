import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { UserForm } from '@/components/confirm';
import { Rego } from '@/components/rego';


const Confirm = () => {
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
       
        <h1 className="text-2xl font-bold py-3 text-center text-green-700">
          Welcome to George street
        </h1>
        <Rego />

        <UserForm />
      </Main>
    );
  };

export {Confirm};