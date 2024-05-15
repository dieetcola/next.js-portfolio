import React from 'react';
import NextLink from 'next/link';
import type { Route } from 'next';
import { Box, IconButton, IconButtonProps, useColorMode, Link, LinkProps } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ListItem(props: IconButtonProps & LinkProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display='flex' alignItems='end' gap={3}>
      {props.title === 'Toggle' ? (
        <IconButton
          onClick={toggleColorMode}
          aria-label='Sun and Moon Icons'
          icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
          //
          variant='outline'
          // size='md'
          // px={3}
          // py={4}
          // fontSize='19px'
        />
      ) : (
        <IconButton
          as={Link}
          {...props}
          isExternal
          //
          // variant='customIconButton'
          // size='md'
          // px={3}
          // py={4}
          // fontSize='19px'
        />
      )}
    </Box>
  );
}
