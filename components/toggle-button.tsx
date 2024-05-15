import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      variant='customIconButton'
      size='md'
      px={3}
      py={4}
      fontSize='19px'
      aria-label='Sun and Moon Icons'
      icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
    />
  );
}
