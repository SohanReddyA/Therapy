import { ResponsiveRender } from '@/src/pages/common';
import { OurProcessLg, OurProcessSm, OurProcessXs } from './screens';

const OurProcess = () => {
  return (
    <ResponsiveRender>
      {{
        mobile: <OurProcessXs />,
        tablet: <OurProcessSm />,
        desktop: <OurProcessLg />,
      }}
    </ResponsiveRender>
  );
};

export default OurProcess;

// Blog(Decide site and check if it has integrations)
// Database
// Login
//
//
//
