import { FooterContactInfo } from './FooterContactInfo';
import { FooterCopyright } from './FooterCopyright';

const CenteredFooter = () => (
  <div className="text-center">


    <div className="mt- flex justify-center">
      <FooterContactInfo />
    </div>

    <div className="mt-2 text-sm">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
