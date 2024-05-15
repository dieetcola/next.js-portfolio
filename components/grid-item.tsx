import React from 'react';
import NextLink from 'next/link';
import type { Route } from 'next';
import { Box, Text, Heading, Flex, Button, Divider } from '@chakra-ui/react';

type GridItemsProps<T> = {
  name: string;
  desc: string;
  href: Route<T> | URL;
};

export default function GridItem<T extends string>({ name, desc, href }: GridItemsProps<T>) {
  return (
    <Box w='100%' h='10'>
      <Heading as='h2' size='md'>
        {name}
      </Heading>

      <Flex justifyContent='space-between' alignItems='center'>
        <Text fontSize='sm' color='#A1A1AA'>
          {desc}
        </Text>
        <NextLink href={href} target='_blank'>
          <Button variant='solid' size='lg'>
            View
          </Button>
        </NextLink>
      </Flex>
      <Divider orientation='horizontal' mt={3} />
    </Box>
  );
}
