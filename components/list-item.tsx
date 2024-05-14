import React from 'react';
import NextLink from 'next/link';
import type { Route } from 'next';
import { Box, IconButton, IconButtonProps } from '@chakra-ui/react';

export default function ListItem<T extends string>({
  href,
  title,
  ...rest
}: { href: Route<T> | URL } & IconButtonProps) {
  return (
    <Box display='flex' alignItems='end' gap={3}>
      <NextLink href={href} target={title === 'Email' ? '' : '_blank'}>
        <IconButton variant='outline' colorScheme='gray' fontSize='20px' {...rest} />
      </NextLink>
    </Box>
  );
}
