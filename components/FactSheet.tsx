import { FC } from 'react';
import { Heading, Text } from '@chakra-ui/layout';

// @ts-ignore
export const FactSheet: FC = ({ slope }) => (
  <>
    <Heading size="md">Facts</Heading>
    <Text>
      <Text fontWeight="bold" display="inline-block">{slope?.skiLifts}</Text>
      {' '}
      Ski Lifts
      {' '}
      <Text display="inline-block" color="gray.500" fontSize={12} mx={2}>Above average</Text>
    </Text>
    <Text>
      <Text fontWeight="bold" display="inline-block">{slope?.elevationDelta}</Text>
      {' '}
      Vertical Rise
      {' '}
      <Text display="inline-block" color="gray.500" fontSize={12} mx={2}>Above average</Text>
    </Text>
    <Text>
      <Text fontWeight="bold" display="inline-block">
        $
        {slope?.price}
      </Text>
      {' '}
      Day Pass
      {' '}
      <Text display="inline-block" color="red.300" fontSize={12} mx={2}>Above average</Text>
    </Text>
  </>
);
