import { chakra } from '@chakra-ui/react';

const ChakraParagraph = chakra('p', {
  baseStyle: {
    fontSize: ['18px', '28px', '32px', '35px'],
    lineHeight: '125%',
    letterSpacing: '-2%',
    textAlign: 'start',
  },
});

export const Paragraph = () => (
  <ChakraParagraph>
    Hey there! Let&apos;s get straight to it! I&apos;m Irakli, a motivated web developer based in
    Tbilisi. I&apos;m building cutting - edge web applications using the latest technologies such as
    React.js, Next.js, TypeScript, and much more for almost 1 year.
  </ChakraParagraph>
);
