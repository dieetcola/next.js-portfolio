import React from 'react';

import {
  Box,
  Grid,
  List,
  ListItem as ChakraListItem,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';

import { FiMoon, FiSun } from 'react-icons/fi';
import { Paragraph } from '@/components/paragraph';
import ListItem from '@/components/list-item';
import GridItem from '@/components/grid-item';
import { socialAccounts } from '@/config/social';

const projects = [
  {
    name: 'Portfolio',
    description: 'Complete front-end ',
    href: 'https://github.com/',
  },
  {
    name: 'Favourite-Pubs',
    description: 'Complete front-end ',
    href: 'https://github.com/',
  },
  {
    name: 'Reminder App',
    description: 'comming soon...',
    href: 'https://github.com/',
  },
];

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display='flex' flexDir='column' h='90vh' justifyContent='center'>
      <Paragraph />

      <List display='flex' alignItems='end' gap={3}>
        {socialAccounts?.map(({ ...rest }, i) => (
          <ListItem key={i} {...rest} />
        ))}

        <ChakraListItem>
          <IconButton
            onClick={toggleColorMode}
            variant='outline'
            colorScheme='gray'
            fontSize='20px'
            aria-label='Sun and Moon Icons'
            icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
          />
        </ChakraListItem>
      </List>

      <Grid templateColumns='repeat(2, 1fr)' gap={12} mt={16}>
        {projects?.map((item, i) => (
          <GridItem key={i} name={item.name} desc={item.description} href={item.href} />
        ))}
      </Grid>
    </Box>
  );
}
