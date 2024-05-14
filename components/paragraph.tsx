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
    Takuya is a freelance and a full-stack developer based in Osaka with a passion for building
    digital services/stuff he wants.
  </ChakraParagraph>
);
