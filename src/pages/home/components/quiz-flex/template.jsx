import { ResponsiveRender } from '@/src/pages/common';
import { QuizFlexLg, QuizFlexSm, QuizFlexXs } from './screens';

const QuizFlex = (props) => {
  return (
    <ResponsiveRender innerRef={props.innerRef}>
      {{
        mobile: <QuizFlexXs {...props} />,
        tablet: <QuizFlexSm {...props} />,
        desktop: <QuizFlexLg {...props} />,
      }}
    </ResponsiveRender>
  );
};

export default QuizFlex;
