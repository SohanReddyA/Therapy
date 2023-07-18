import ChatLg from "./screens/template-lg/screen-lg";
import ChatMd from "./screens/template-md/screen-md";
import ChatXs from "./screens/template-xs/screen-xs";
import { ResponsiveRender } from '../common';

const Chat = () => {
  return (
    <ResponsiveRender>
      {{
        mobile: <ChatXs />,
        tablet: <ChatMd />,
        desktop: <ChatLg />,
      }}
    </ResponsiveRender>
  );
};

export default Chat;
