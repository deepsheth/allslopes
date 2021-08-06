import { Box, Circle, Square } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import { useRouter } from 'next/router';
import { TrailClassification } from './TrailClassification';

type PreviewCard = {
    title: string,
    location: string,
    trailClassification: {
        beginner: number,
        intermediate: number,
        advanced: number,
        expert: number,
    },
}

export const PreviewCard = ({
  id, title, location, trailClassification, map, skiLifts, elevationDelta, price,
}: PreviewCard) => {
  const router = useRouter();

  return (
    <Box
      boxShadow="md"
      padding="1rem"
      borderRadius="md"
      background="white"
      cursor="pointer"
      onClick={() => {
        router.push(`/slopes/${id}`);
      }}
    >
      <Box fontWeight="bold">{title}</Box>
      <Box fontSize="sm" color="gray.400">{location}</Box>
      <TrailClassification trailClassification={trailClassification} />
      <Box>
        {map}
      </Box>
    </Box>
  );
};
