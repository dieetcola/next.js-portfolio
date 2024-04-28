import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('#FAFAFA', 'black')(props),
      bg: mode('black', 'white')(props),
      lineHeight: 'base',
    },
  }),
};

// const semanticTokens = {
//   colors: {
//     text: {
//       default: 'gray.900',
//       _dark: 'gray.50',
//     },
//   },
// };

const colors = {
  brand: {
    100: 'red',
    // ...
    900: '#1a202c',
  },
};

const fonts = {
  heading: 'var(--font-rubik)',
  body: 'var(--font-rubik)',
};
const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: ['48px', '42px'],
    fontWeight: '300',
    lineHeight: '132%',
    letterSpacing: '-2%',
  },
  h2: {
    fontSize: ['36px', '48px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
};

const outline = defineStyle({
  border: '2px solid #FAFAFA', // change the appearance of the border
  borderRadius: 'md',
  fontWeight: 'semibold', // change the font weight
  background: 'black',
  color: 'white',
});

const xl = defineStyle({
  fontSize: 'xl',
  px: '6',
  h: '16',
  borderRadius: 'md',
});

export const buttonTheme = defineStyleConfig({
  variants: { outline },
});

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  textStyles,
  components: { Button: buttonTheme },
  // semanticTokens
});

export default theme;
