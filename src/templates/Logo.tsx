import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.png';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Image src={logo} alt=" " />
    </Link>
  );
};

export { Logo };
