import React from 'react';
import { Box, Grid, List } from '@chakra-ui/react';

import { Paragraph } from '@/components/paragraph';
import { ListItem } from '@/components/list-item';
import { GridItem } from '@/components/grid-item';
import { projects, socialAccounts } from '@/config/constants';

export default function Home() {
  return (
    <Box
      display='flex'
      flexDir='column'
      h='90vh'
      justifyContent={{ base: 'space-between', md: 'center' }}>
      <div>
        <Paragraph />

        <List display='flex' alignItems='end' gap={2} mt={6}>
          {socialAccounts?.map(({ ...items }, i) => (
            <ListItem key={i} {...items} />
          ))}
        </List>
      </div>

      <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }} gap={12} mt={16}>
        {projects?.map(({ ...items }, i) => (
          <GridItem key={i} {...items} />
        ))}
      </Grid>
    </Box>
  );
}
