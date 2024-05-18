import { chakra } from '@chakra-ui/react';

const ChakraParagraph = chakra('p', {
  baseStyle: {
    fontSize: ['18px', '28px', '32px', '42px'],
    lineHeight: '122%',
    letterSpacing: '-2%',
    textAlign: 'start',
  },
});

export const Paragraph = () => (
  <ChakraParagraph>
    Hey there! Let's get straight to it! I'm Irakli, a motivated web developer based in Tbilisi. I'm
    building cutting - edge web applications using the latest technologies such as React.js,
    Next.js, TypeScript, and much more for almost 1 year.
  </ChakraParagraph>
);
