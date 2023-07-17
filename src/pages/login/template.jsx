import { ResponsiveRender } from '../common';
import { LoginLg, LoginXs } from './screens';

const Login = () => {
  return (
    <ResponsiveRender>
      {{
        mobile: <LoginXs />,
        tablet: <LoginXs />,
        desktop: <LoginLg />,
      }}
    </ResponsiveRender>
  );
};

export default Login;
