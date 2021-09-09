import { useRouter } from 'next/router';
import {
  Box, Container, Heading, Link, Stack, Text,
} from '@chakra-ui/layout';
import {
  Button, Image, Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/react';
import Head from 'next/head';
import { slopes } from '../../data/slopes';
import { TrailClassification } from '../../components/TrailClassification';
import { FactSheet } from '../../components/FactSheet';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // @ts-ignore
  const slope = slopes.find((s) => s.id === +id);

  if (!slope) return null;

  return (
    <>
      <Head>
        <title>AllSlopes</title>
        <meta name="description" content="Find your next slope" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box margin="3rem">
        <Link href="/"><Heading as="h1" size="lg"><Image src="/logo3.jpg" height="72px" /></Heading></Link>
      </Box>

      <Container>
        <Box width="100%" shadow="md" height={72}>
          {/* <Image src="https://via.placeholder.com/1400x350?text=Ski%20Mountain%20Map%20in%203D" /> */}
          <iframe
            title="Vail, Colorado - Winter Map (1:50,000 Scale)"
            frameBorder={0}
            allowFullScreen
            // mozallowfullscreen="true"
            // webkitallowfullscreen="true"
            allow="fullscreen; autoplay; vr"
            // xr-spatial-tracking
            // execution-while-out-of-viewport
            // execution-while-not-rendered
            // web-share
            src="https://sketchfab.com/models/8b3db1b0005d444891422872f3093e95/embed"
            width="100%"
            height="100%"
          />
        </Box>

        <Box display="flex" background="white" py={4} flexDirection="column">
          <TrailClassification trailClassification={slope?.trailClassification} />
          <Heading>{slope?.title}</Heading>
          <Text color="gray.400">{slope?.location}</Text>

          <Box margin={4} />
          <Heading size="md">Description</Heading>
          <Text>
            The ski resort Vail is located in Colorado (USA). For skiing and snowboarding, there are 234 km of slopes available. 25 lifts transport the guests. The winter sports area is situated between the elevations of 2,457 and 3,433 m.
          </Text>
          <Text>
            The Vail ski resort is one of the most famous ski resorts in the USA. It lies in the middle of the Rocky Mountains. The modern elegance and the timeless style of the holiday village is intertwined with the lifestyle of the former West.
          </Text>

          <Box margin={4} />
          {/* @ts-ignore */}
          <FactSheet slope={slope} />

          <Text>
            <Text fontWeight="bold" display="inline-block">3</Text>
            {' '}
            months until ski season
            <Text display="inline-block" color="gray.500" fontSize={12} mx={2}>
              (
              {slope?.season}
              )
            </Text>
          </Text>

        </Box>

        <Box margin={4} />

        <Tabs>
          <TabList>
            <Tab isDisabled>Trails</Tab>
            <Tab isDisabled>Weather</Tab>
            <Tab isDisabled>Reviews</Tab>
            <Tab isDisabled>Photos</Tab>
            <Tab isDisabled>Activities</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </TabPanels>
        </Tabs>

      </Container>

    </>
  );
};

export default Post;
