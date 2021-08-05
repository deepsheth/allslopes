import { FunctionComponent } from 'react';
import { Box, Heading } from '@chakra-ui/layout';
import { PreviewCard } from './PreviewCard';

export const TrendingMountains: FunctionComponent = () => (
  <Box padding=" 3rem" background="gray.100">
    <Heading size="lg">Trending Mountains</Heading>
    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gridColumnGap="3rem" gridRowGap="3rem" margin="2rem 0">
      <PreviewCard
        title="Vail Mountain Resort"
        location="Vail, Colorado"
        trailClassification={{
          beginner: 18,
          intermediate: 29,
          advanced: 23,
          expert: 30,
        }}
      />
      <PreviewCard
        title="Aspen Snowmass"
        location="Snowmass Village, Colorado"
        trailClassification={{
          beginner: 5,
          intermediate: 48,
          advanced: 17,
          expert: 30,
        }}
      />
      <PreviewCard
        title="Telluride Ski Resort"
        location="Mountain Village, Colorado"
        trailClassification={{
          beginner: 23,
          intermediate: 36,
          advanced: 15,
          expert: 26,
        }}
      />
      <PreviewCard
        title="Beaver Creek Resort"
        location="Avon, Colorado"
        trailClassification={{
          beginner: 19,
          intermediate: 43,
          advanced: 15,
          expert: 23,
        }}
      />
      <PreviewCard
        title="Breckenridge Ski Resort"
        location="Breckenridge, Colorado"
        trailClassification={{
          beginner: 11,
          intermediate: 31,
          advanced: 24,
          expert: 34,
        }}
      />
    </Box>
    <Box />
  </Box>
);
