import { AppConfig } from '../../utils/AppConfig';

const FooterCopyright = () => (
  <div className="border-t border-gray-300 py-2 text-center text-sm">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
    <span role="img" aria-label="Love" color='red'>
      ♥
    </span>{' '}
    by Josh
  </div>
);

export { FooterCopyright };
