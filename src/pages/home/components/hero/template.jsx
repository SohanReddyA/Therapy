import { ResponsiveRender } from '@/src/pages/common';
import { HeroLg, HeroSm, HeroXs } from './screens';

const Hero = ({ executeScroll }) => {
  return (
    <ResponsiveRender>
      {{
        mobile: <HeroXs executeScroll={executeScroll} />,
        tablet: <HeroSm executeScroll={executeScroll} />,
        desktop: <HeroLg executeScroll={executeScroll} />,
      }}
    </ResponsiveRender>
  );
};

export default Hero;
