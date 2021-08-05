import Head from 'next/head';
import {
  Box, Heading, Link, Stack,
} from '@chakra-ui/layout';
import { Container, Image } from '@chakra-ui/react';
import { PreviewCard } from '../components/PreviewCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AllSlopes</title>
        <meta name="description" content="Find your next slope" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box margin="3rem">
        <Link href="/"><Heading as="h1" size="lg"><Image src="./logo2.jpg" height="72px" /></Heading></Link>
      </Box>
      <Container>
        <Stack spacing={6}>
          <Heading as="h1" size="3xl" marginTop="1rem">
            Find your next slope
          </Heading>
          <Heading as="h3" size="md" textAlign="center">
            The definitive guide for where to ski.
          </Heading>
        </Stack>
      </Container>
      <Box margin="5rem 0">
        {/* <Image src="./hero-image.jpg" height="400px" width="100%" objectFit="cover" /> */}
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
      </Box>
    </div>
  );
}
