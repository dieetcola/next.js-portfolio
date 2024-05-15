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
      color: mode('black', 'RGBA(255, 255, 255, 0.92)')(props),
      bg: mode('#F7FAFC', 'RGBA(0, 0, 0, 0.36)')(props),
      // lineHeight: 'base',
    },
  }),
};

const colors = {
  black: 'black',
  white: '#fff',
  Alpha: {
    100: 'red',
    // ...
    900: 'RGBA(255, 255, 255, 0.92)',
  },
};

// FONT
const fonts = {
  heading: 'var(--font-rubik)',
  body: 'var(--font-rubik)',
};

// MENU
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys,
);
// define the base component styles
const baseStyle = definePartsStyle({
  list: {
    // this will style the MenuList component
    py: '4',
    borderRadius: 'xl',
    borderColor: 'gray.400',
    // border: 'none',
    bg: 'black',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'white',
    bg: 'black',
    borderRadius: 'xl',
    borderColor: 'gray.400',
    _hover: {
      bg: 'gray.400',
    },
    _focus: {
      bg: 'teal.600',
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4',
  },
  divider: {
    // this will style the MenuDivider component
    my: '4',
    borderColor: 'gray.400',
    borderBottom: '2px dotted',
  },
});
const menuTheme = defineMultiStyleConfig({ baseStyle });

// BUTTON
const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    // padding: "",
    // borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'lg',
      // px: '12',
      w: 10,
      h: 9,
      // p: 12, // <-- these values are tokens from the design system
      // py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      padding: '20px',
      border: '2px solid',
      borderColor: 'RGBA(255, 255, 255, 0.16)',
      color: 'purple.500',
      _dark: {
        background: 'RGBA(0, 0, 0, 0.36)',
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
      // bg: colors.black,
      // borderRadius: '6px',
      // color: 'RGBA(255, 255, 255, 0.92)',
      // _dark: {
      //   background: '#F7FAFC',
      //   color: 'RGBA(0, 0, 0, 0.36)',
      //   _hover: {
      //     bg: 'RGBA(255, 255, 255, 0.06)',
      //   },
      // },

      height: '30px',
      width: '65px',
      // lineHeight: '1.2',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      border: '1px',
      p: 2,
      borderRadius: '18px',
      fontSize: '16px',
      fontWeight: 'semibold',
      bg: '#f5f6f7',
      borderColor: '#ccd0d5',
      color: 'black',
      _hover: {
        bg: '#ebedf0',
        borderColor: 'teal',
      },
      _active: {
        bg: '#dddfe2',
        borderColor: 'red',
      },
      _focus: {
        bg: '#ebedf0',
        border: '12px',
        borderColor: 'green',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

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

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  textStyles,
  components: {
    // Button: buttonTheme,
    Button,
    Menu: menuTheme,
  },
});

export default theme;
