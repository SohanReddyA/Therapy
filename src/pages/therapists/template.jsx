import { useEffect, useState } from 'react';
import { Layout } from '../common';
import Styled from './template.styled';
import { CookieUtil } from '@/src/utils';

const Therapists = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    setIsLoggedIn(CookieUtil.getCookie('FriennlyUser'));
  }, [CookieUtil.getCookie('FriennlyUser')]);
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Styled.Container>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.ImageContainer>
            <img
              src="/images/Therapist.png"
              width="100%"
              alt="Therapist"
              style={{ borderRadius: '24px 24px 0px 0px' }}
            />
            <Styled.ImageText>Firstname Lastname</Styled.ImageText>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
              ipsum dolor sit amet,
            </Styled.Text1>
            <Styled.Text2>Chat with Firstname Lastname</Styled.Text2>
          </Styled.TextContainer>
        </Styled.CardContainer>
      </Styled.Container>
    </Layout>
  );
};

export default Therapists;
