import Link from 'next/link';

const FooterContactInfo = () => (
  <div className="footer-contact-info flex flex-wrap">
    <Link href="mailto:info@inpark.co.nz" passHref>
      <h3 className="text-m text-gray-800">525907600@qq.com</h3>
    </Link>
    <span>
      <h4 className="text-m text-gray-800 pl-2"> +86 123 456 789</h4>
    </span>
  </div>
);

export { FooterContactInfo };
