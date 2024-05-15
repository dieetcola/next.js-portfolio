import React from 'react';
import { IconButton as Button, IconButtonProps } from '@chakra-ui/react';

export default function IconButton(props): IconButtonProps {
  console.log(props);
  return (
    <Button
      variant='customIconButton'
      size='md'
      px={3}
      py={4}
      fontSize='19px'
      colorScheme='gray'
      {...props}
    />
  );
}
