import React from 'react';
import NextLink from 'next/link';
import type { Route } from 'next';
import { Box, Text, Heading, Flex, Button, Divider, ListItem } from '@chakra-ui/react';

export default function GridItem<T extends string>({
  name,
  desc,
  href,
}: {
  name: string;
  desc: string;
  href: Route<T> | URL;
}) {
  return (
    <Box w='100%' h='10' bg='black'>
      <Heading as='h2' size='md'>
        {name}
      </Heading>

      <Flex justifyContent='space-between' alignItems='center'>
        <Text fontSize='sm' color='#A1A1AA'>
          {desc}
        </Text>
        <NextLink href={href} target='_blank'>
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
        </NextLink>
      </Flex>
      <Divider orientation='horizontal' mt={3} />
    </Box>
  );
}