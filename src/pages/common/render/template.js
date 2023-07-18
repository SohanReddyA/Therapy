import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`;

const ChildMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const ChildTablet = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
  }
`;

const ChildDesktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

function ResponsiveRender({ children }) {
  return (
    <Container>
      <ChildMobile>{children.mobile}</ChildMobile>
      <ChildTablet>{children.tablet}</ChildTablet>
      <ChildDesktop>{children.desktop}</ChildDesktop>
    </Container>
  );
}

export default ResponsiveRender;
