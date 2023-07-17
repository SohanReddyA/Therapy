import ResponsiveRender from '../common/render/template';
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
