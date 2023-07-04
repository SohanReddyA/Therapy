import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
