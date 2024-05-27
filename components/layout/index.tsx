import { ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box as='main'>
      <Container maxW='71em' mb='10px' mt={{ sm: 10, lg: 0 }}>
        {children}
      </Container>
    </Box>
  );
};
