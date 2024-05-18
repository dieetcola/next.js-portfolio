import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { menuAnatomy } from '@chakra-ui/anatomy';
import { defineStyle, defineStyleConfig, createMultiStyleConfigHelpers } from '@chakra-ui/react';

// CONFIG
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// GLOBAL
const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('black', 'white')(props),
      bg: mode('#FFFFFF', 'black')(props),
    },
    h2: {
      color: mode('black', 'white')(props),
    },
  }),
};

const colors = {
  black: '#09090B',
  white: '#FFFFFF',
};

// FONT
const fonts = {
  heading: 'var(--font-rubik)',
  body: 'var(--font-rubik)',
};

// BUTTON
const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'lg',
      px: '12',
      p: 12,
      py: 4,
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: '#d4d4d8',
      color: 'black',
      _dark: {
        background: 'RGBA(0, 0, 0, 0.36)',
        borderColor: 'RGBA(255, 255, 255, 0.16)',
        color: 'RGBA(255, 255, 255, 0.92)',
        _hover: {
          bg: 'RGBA(255, 255, 255, 0.06)',
        },
      },
      _hover: {
        bg: 'gray.400',
      },
    },
    solid: {
      height: '30px',
      width: '65px',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      border: '1px',
      p: 4,
      borderRadius: '18px',
      fontSize: '16px',
      borderColor: '#ccd0d5',
      background: ' black',
      color: 'white',
      _dark: {
        background: 'white',
        color: 'black',
      },
      letterSpacing: '0.5px',
      _hover: {
        bg: '#464649',
        borderColor: 'none',
      },
      _active: {
        bg: '#464649',
        borderColor: 'none',
      },
      _focus: {
        bg: '#464649',
        borderColor: 'none',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

export const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components: {
    Button,
  },
});
