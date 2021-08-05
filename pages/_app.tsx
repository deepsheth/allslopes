import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      body: 'Inter',
      heading: 'Heebo, monospace',
    },
    colors: {
      brand: {
        100: '#f72585',
        200: '#b5179e',
        300: '#b5179e',
        400: '#7209b7',
        500: '#560bad',
        600: '#480ca8',
        700: '#3a0ca3',
        800: '#3f37c9',
        900: '#4361ee',
        950: '#4895ef',
        1000: '#4cc9f0',
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
