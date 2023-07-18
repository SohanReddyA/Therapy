import ResponsiveRender from '../../../render/template';
import { NavbarLg, NavbarSm, NavbarXs } from './screens';

const Navbar = (props) => {
  return (
    <ResponsiveRender>
      {{
        mobile: <NavbarXs {...props} />,
        tablet: <NavbarSm {...props} />,
        desktop: <NavbarLg {...props} />,
      }}
    </ResponsiveRender>
  );
};

export default Navbar;
