import { chakra } from '@chakra-ui/react';

const ChakraParagraph = chakra('p', {
  baseStyle: {
    fontSize: ['18px', '22px', '42px'],
    lineHeight: '132%',
    letterSpacing: '-2%',
    textAlign: 'start',
  },
});

export const Paragraph = () => (
  <ChakraParagraph>
    I am a passionate Junior full - stack developer based in Tbilisi, Georgia. Aiming on crafting
    great - looking software products. I focus on details, accessibility and writing maintainable
    code.
  </ChakraParagraph>
);
