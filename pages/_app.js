import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { SessionProvider, getSession } from 'next-auth/react';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/swiper.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider >
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
}
