import React from 'react';
import { Box, IconButton, IconButtonProps, useColorMode, Link, LinkProps } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ListItem = (props: IconButtonProps & LinkProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display='flex' alignItems='end' gap={3}>
      {props.title === 'Toggle' ? (
        <IconButton
          onClick={toggleColorMode}
          aria-label='Sun and Moon Icons'
          icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
          variant='outline'
          size='md'
        />
      ) : (
        <IconButton as={Link} {...props} isExternal />
      )}
    </Box>
  );
};
