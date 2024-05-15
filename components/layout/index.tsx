import React from 'react';
import { Box, Container } from '@chakra-ui/react';

interface PropsInterface {
  children: React.ReactNode;
}

export default function Layout(props: PropsInterface): JSX.Element {
  return (
    <Box as='main'>
      <Container maxW='71em' mb='10px' mt={{ sm: 10, lg: 0 }}>
        {props.children}
      </Container>
    </Box>
  );
}
