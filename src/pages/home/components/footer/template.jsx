import { ResponsiveRender } from '@/src/pages/common';
import { FooterLg, FooterSm, FooterXs } from './screens';

const Footer = (props) => {
  return (
    <ResponsiveRender>
      {{
        mobile: <FooterXs {...props} />,
        tablet: <FooterSm {...props} />,
        desktop: <FooterLg {...props} />,
      }}
    </ResponsiveRender>
  );
};

export default Footer;
