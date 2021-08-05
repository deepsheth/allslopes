import { Box, Circle, Square } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import { useRouter } from 'next/router';

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
  const {
    beginner, intermediate, advanced, expert,
  } = trailClassification;
  const router = useRouter();

  const trailClassificationLabel = getTrailClassificationLabel(trailClassification);
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
      <Box
        className="trail-classification"
      >
        <Tooltip
          label={(
            <>
              <Circle size="12px" bg="green.500" display="inline-block" marginRight={2} />
              {trailClassificationLabel.beginner}
            </>
)}
          hasArrow
        >
          <Box
            className="trail-beginner"
            height=".75rem"
            margin=".25rem 0"
            display="inline-block"
            background="green.200"
            borderLeftRadius={6}
            width={`${beginner}%`}
          />
        </Tooltip>
        <Tooltip
          label={(
            <>
              <Square size="12px" bg="blue.500" display="inline-block" marginRight={2} />
              {trailClassificationLabel.intermediate}
            </>
        )}
          hasArrow
        >

          <Box
            className="trail-intermediate"
            height=".75rem"
            margin=".25rem 0"
            display="inline-block"
            background="blue.200"
            width={`${intermediate}%`}
          />
        </Tooltip>
        <Tooltip
          label={(
            <>
              <Square size="12px" bg="black" display="inline-block" marginRight={2} transform="rotate(45deg)" border="1px solid #ccc" />
              {trailClassificationLabel.advanced}
            </>
        )}
          hasArrow
        >
          <Box
            className="trail-advanced"
            height=".75rem"
            margin=".25rem 0"
            display="inline-block"
            background="gray.400"
            width={`${advanced}%`}
          />
        </Tooltip>
        <Tooltip
          label={(
            <>
              <Square size="12px" bg="black" display="inline-block" marginRight={1} transform="rotate(45deg)" border="1px solid #ccc" />
              <Square size="12px" bg="black" display="inline-block" marginRight={2} transform="rotate(45deg)" border="1px solid #ccc" />
              {trailClassificationLabel.expert}
            </>
        )}
          hasArrow
        >

          <Box
            className="trail-expert"
            height=".75rem"
            margin=".25rem 0"
            display="inline-block"
            background="gray.600"
            borderRightRadius={6}
            width={`${expert}%`}
          />
        </Tooltip>
      </Box>

      <Box>
        {map}
      </Box>
    </Box>
  );
};

function getTrailClassificationLabel(trailClassification: Record<string, any>) {
  return {
    beginner: `${trailClassification.beginner}% beginner`,
    intermediate: `${trailClassification.intermediate}% intermediate`,
    advanced: `${trailClassification.advanced}% expert`,
    expert: `${trailClassification.expert}% expert only`,
  };
}
