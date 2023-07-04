import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TextHeading = styled.div`
  text-align: center;
  color: #5627b0;
  font-size: 64px;

  font-weight: 700;
  text-transform: capitalize;
`;
const TextBody = styled.div`
  color: rgba(26, 26, 26, 0.7);
  text-align: center;
  font-size: 28px;

  font-weight: 500;
  line-height: 160%;
  text-transform: capitalize;
`;

const BlogHeadline = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const BlogHeadlineTitle = styled.div`
  color: #1a1a1a;
  font-size: 36px;

  font-weight: 600;
  line-height: 140%;
  text-transform: capitalize;
`;

const BlogHeadlineButtonFlex = styled.div`
  display: flex;
  gap: 20px;
`;

const BlogHeadlineLeftArrow = styled.div`
  border-radius: 15px;
  padding: 16px;
  background: rgba(86, 39, 176, 0.2);
`;

const BlogHeadlineRightArrow = styled.div`
  border-radius: 15px;
  padding: 16px;
  background: #5627b0;
`;

const BlogFlex = styled.div`
  display: flex;
  gap: 40px;
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BlogTextFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const BlogText1 = styled.div`
  color: rgba(26, 26, 26, 0.7);
  font-size: 18px;

  line-height: 180%;
`;

const BlogText2 = styled.div`
  color: #1a1a1a;
  font-size: 28px;

  font-weight: 600;
  line-height: 160%;
  text-transform: capitalize;
`;

const BlogButton = styled.button`
  background: #5627b0;
  border-radius: 30px;
  padding: 12px 24px;
  width: fit-content;
  color: #fff;
  font-size: 20px;

  font-weight: 700;
  line-height: 140%;
`;

const Styled = {
  Container,
  TextContainer,
  TextBody,
  TextHeading,
  BlogHeadline,
  BlogHeadlineButtonFlex,
  BlogHeadlineTitle,
  BlogHeadlineLeftArrow,
  BlogHeadlineRightArrow,
  BlogFlex,
  BlogCard,
  BlogTextFlex,
  BlogText1,
  BlogText2,
  BlogButton,
};

export default Styled;
