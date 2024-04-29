import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { menuAnatomy } from '@chakra-ui/anatomy';
import { defineStyle, defineStyleConfig, createMultiStyleConfigHelpers } from '@chakra-ui/react';

// MENU
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys,
);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: 'medium',
    bg: 'black',
    color: 'gray.200',
    _hover: {
      bg: 'gray.400',
      color: 'white',
    },
    // _hover={{ bg: 'gray.400' }}
    // _expanded={{ bg: 'blue.400' }}
    // _focus={{ boxShadow: 'outline' }}
  },
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

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('black', '#FAFAFA')(props),
      bg: mode('white', 'black')(props),
      // lineHeight: 'base',
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
  color: '#FAFAFA',
  // padding: '116px',
  // h: '22px',
  // fontSize: 'sm',
});

const xl = defineStyle({
  // fontSize: 'xl',
  // px: '6',
  // h: '16',
  // borderRadius: 'md',
  fontSize: 'lg',
  px: '20px', // <-- these values are tokens from the design system
  py: '111px', // <-- these values are tokens from the design system
});

const customIconButton = defineStyle({
  border: '2px solid #FAFAFA', // change the appearance of the border
  background: '#FAFAFA',
  color: 'black',
  // fontFamily: 'serif',
  fontWeight: 'normal',

  // let's also provide dark mode alternatives
  _dark: {
    background: 'black',
    color: '#FAFAFA',
  },
});

const buttonTheme = defineStyleConfig({
  // variants: { outline },
  variants: { customIconButton },

  // sizes: { xl },
});

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  textStyles,
  components: {
    Button: buttonTheme,
    Menu: menuTheme,
  },
  // semanticTokens
});

export default theme;
