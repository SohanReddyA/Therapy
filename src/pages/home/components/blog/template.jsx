const { default: Styled } = require('./template.styled');

const Blog = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.TextHeading>Read our Blog</Styled.TextHeading>
        <Styled.TextBody>
          Read the blogs <br />
          Reflect your thoughts <br />
          Make Progress
        </Styled.TextBody>
      </Styled.TextContainer>
      <Styled.BlogHeadline>
        <Styled.BlogHeadlineTitle>Most popular posts</Styled.BlogHeadlineTitle>
        <Styled.BlogHeadlineButtonFlex>
          <Styled.BlogHeadlineLeftArrow>{'<'}</Styled.BlogHeadlineLeftArrow>
          <Styled.BlogHeadlineRightArrow>{'>'}</Styled.BlogHeadlineRightArrow>
        </Styled.BlogHeadlineButtonFlex>
      </Styled.BlogHeadline>
      <Styled.BlogFlex>
        <Styled.BlogCard>
          <img src="/images/BlogImage.png" alt="BlogImage" />
          <Styled.BlogTextFlex>
            <Styled.BlogText1>Random</Styled.BlogText1>
            <Styled.BlogText1>24 Nov 2021</Styled.BlogText1>
          </Styled.BlogTextFlex>
          <Styled.BlogText2>Weekly roundup SaaS global SaaS </Styled.BlogText2>
          <Styled.BlogButton>Read Now</Styled.BlogButton>
        </Styled.BlogCard>
        <Styled.BlogCard>
          <img src="/images/BlogImage.png" alt="BlogImage" />
          <Styled.BlogTextFlex>
            <Styled.BlogText1>Random</Styled.BlogText1>
            <Styled.BlogText1>24 Nov 2021</Styled.BlogText1>
          </Styled.BlogTextFlex>
          <Styled.BlogText2>Weekly roundup SaaS global SaaS </Styled.BlogText2>
          <Styled.BlogButton>Read Now</Styled.BlogButton>
        </Styled.BlogCard>
        <Styled.BlogCard>
          <img src="/images/BlogImage.png" alt="BlogImage" />
          <Styled.BlogTextFlex>
            <Styled.BlogText1>Random</Styled.BlogText1>
            <Styled.BlogText1>24 Nov 2021</Styled.BlogText1>
          </Styled.BlogTextFlex>
          <Styled.BlogText2>Weekly roundup SaaS global SaaS </Styled.BlogText2>
          <Styled.BlogButton>Read Now</Styled.BlogButton>
        </Styled.BlogCard>
        <Styled.BlogCard>
          <img src="/images/BlogImage.png" alt="BlogImage" />
          <Styled.BlogTextFlex>
            <Styled.BlogText1>Random</Styled.BlogText1>
            <Styled.BlogText1>24 Nov 2021</Styled.BlogText1>
          </Styled.BlogTextFlex>
          <Styled.BlogText2>Weekly roundup SaaS global SaaS </Styled.BlogText2>
          <Styled.BlogButton>Read Now</Styled.BlogButton>
        </Styled.BlogCard>
      </Styled.BlogFlex>
    </Styled.Container>
  );
};

export default Blog;
