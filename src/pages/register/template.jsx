import ResponsiveRender from '../common/render/template';
import { RegisterLg, RegisterXs } from './screens';

const Register = () => {
  return (
    <ResponsiveRender>
      {{
        mobile: <RegisterXs />,
        tablet: <RegisterXs />,
        desktop: <RegisterLg />,
      }}
    </ResponsiveRender>
  );
};

export default Register;
