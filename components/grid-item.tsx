import React from 'react';
import { Box, Text, Heading, Flex, Link, Button, Divider, ListItem } from '@chakra-ui/react';

export const GridItem = ({ name, desc, path }) => (
  <Box w='100%' h='10' bg='black'>
    <Heading as='h2' size='md'>
      {name}
    </Heading>

    <Flex justifyContent='space-between' alignItems='center'>
      <Text fontSize='sm' color='#A1A1AA'>
        {desc}
      </Text>
      <Link href={path} target='_blank'>
        <Button
          _hover={{ bg: '#ebedf0' }}
          borderRadius={20}
          bg='white'
          color='black'
          p='0'
          h={8}
          w={16}>
          View
        </Button>
      </Link>
    </Flex>
    <Divider orientation='horizontal' mt={3} />
  </Box>
);
