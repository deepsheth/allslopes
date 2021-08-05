import { Box } from '@chakra-ui/layout';

type PreviewCard = {
    title: string,
    location: string,
    trailClassification: {
        beginner: number,
        intermediate: number,
        advanced: number,
        expert: number,
    },
    paragraph?: string
}

export const PreviewCard = ({
  title, paragraph, location, trailClassification: {
    beginner, intermediate, advanced, expert,
  },
}: PreviewCard) => (
  <Box boxShadow="md" padding="1rem" borderRadius="md" background="white">
    <Box fontWeight="bold">{title}</Box>
    <Box fontSize="sm" color="gray.400">{location}</Box>
    <Box
      className="trail-classification"
      borderRadius="lg"
    >
      <Box
        className="trail-beginner"
        height=".75rem"
        margin=".25rem 0"
        display="inline-block"
        background="green.200"
        width={`${beginner}%`}
      />
      <Box
        className="trail-intermediate"
        height=".75rem"
        margin=".25rem 0"
        display="inline-block"
        background="blue.200"
        width={`${intermediate}%`}
      />
      <Box
        className="trail-advanced"
        height=".75rem"
        margin=".25rem 0"
        display="inline-block"
        background="yellow.200"
        width={`${advanced}%`}
      />
      <Box
        className="trail-expert"
        height=".75rem"
        margin=".25rem 0"
        display="inline-block"
        background="gray.400"
        width={`${expert}%`}
      />
    </Box>
    <Box>{paragraph}</Box>
  </Box>
);
