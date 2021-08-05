import { FunctionComponent } from 'react';
import { Box, Heading } from '@chakra-ui/layout';
import { PreviewCard } from './PreviewCard';
import { slopes } from '../data/slopes';

export const TrendingMountains: FunctionComponent = () => (
  <>
    <Box padding=" 3rem" background="gray.100">
      <Heading size="lg">Trending Mountains</Heading>
      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gridColumnGap="3rem" gridRowGap="3rem" margin="2rem 0">
        {
            slopes.map(({
              id, title, location, trailClassification: {
                beginner, intermediate, advanced, expert,
              },
            }) => (
              <PreviewCard
                key={id}
                id={id}
                title={title}
                location={location}
                trailClassification={{
                  beginner,
                  intermediate,
                  advanced,
                  expert,
                }}
              />
            ))
        }
      </Box>
      <Box />
    </Box>
  </>
);
