import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ProvideAuth } from '../utils/auth';
import theme from './theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideAuth>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ProvideAuth>
  );
}

export default MyApp;
