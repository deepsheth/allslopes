import { Box } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { TrailClassification } from './TrailClassification';

type PreviewCard = {
    id: number,
    title: string,
    location: string,
    trailClassification: {
        beginner: number,
        intermediate: number,
        advanced: number,
        expert: number,
    },
    // skiLifts: number,
    // elevationDelta: number,
    // price: number,
    // map: string,
}

export const PreviewCard = ({
    // @ts-ignore
  id, title, location, trailClassification, map,
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
