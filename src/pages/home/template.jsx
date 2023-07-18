import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { BASE_API_URL } from '@/src/utils/api';
import { useRouter } from 'next/router';
import { HomeLg, HomeSm, HomeXs } from './screens';
import { CookieUtil } from '@/src/utils';
import { ResponsiveRender } from '../common';

const Home = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    setIsLoggedIn(CookieUtil.getCookie('FriennlyUser'));
  }, [CookieUtil.getCookie('FriennlyUser')]);
  useEffect(() => {
    fetch(BASE_API_URL).then((res) => {
      console.log(res, 'Init');
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (router.isReady && !loading) {
      console.log(router.query, 'Testlog');
      if (router.query.quiz) {
        executeScroll();
      }
    }
  }, [router, loading]);

  if (loading)
    return (
      <div
        style={{
          margin: 'auto',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ColorRing visible={true} height="80" width="80" colors={['#b8c480']} />
      </div>
    );
  return (
    <ResponsiveRender>
      {{
        mobile: <HomeXs {...props} isLoggedIn={isLoggedIn} />,
        tablet: <HomeSm {...props} isLoggedIn={isLoggedIn} />,
        desktop: <HomeLg {...props} isLoggedIn={isLoggedIn} />,
      }}
    </ResponsiveRender>
  );
};
export default Home;
