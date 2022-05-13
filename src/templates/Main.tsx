import { ReactNode } from 'react';
import { Logo } from './Logo';
import { NavbarTwoColumns } from '@/components/navigation/NavTwoColumn';
import { Footer } from './Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-2xl">
      <div className="border-b border-gray-300">
        <NavbarTwoColumns logo={<Logo />}></NavbarTwoColumns>
      </div>
        <div className="content py-2 text-xl">{props.children}</div>
    </div>

    <div>
      <Footer />
    </div>
  </div>
);

export { Main };
