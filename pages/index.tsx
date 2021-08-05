import Head from 'next/head';
import {
  Box, Heading, Link, Stack, Text,
} from '@chakra-ui/layout';
import {
  Button, Container, Image, Input, InputGroup, InputLeftAddon,
} from '@chakra-ui/react';
import { TrendingMountains } from '../components/TrendingMountains';

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
        <Link href="/"><Heading as="h1" size="lg"><Image src="./logo3.jpg" height="72px" /></Heading></Link>
      </Box>
      <Container>
        <Stack spacing={6}>
          <Heading as="h1" size="3xl" marginTop="1rem">
            Find your next slope
          </Heading>
          <Heading as="h3" size="md" textAlign="center">
            The definitive guide for skiing.
          </Heading>
        </Stack>
      </Container>
      <Stack spacing={6}>
        <Box margin="5rem 0">
          {/* <Image src="./hero-image.jpg" height="400px" width="100%" objectFit="cover" /> */}
          <TrendingMountains />

          <Box py="6rem" px="3rem" background="white">
            <Heading size="lg">Slopes For Every Preference</Heading>
            <Box>
              <Box display="flex" justifyContent="space-between" paddingTop={12} paddingBottom={0}>
                <Button colorScheme="blackAlpha" variant="ghost">Top Rated</Button>
                <Button colorScheme="blackAlpha" variant="ghost">Beginners</Button>
                <Button colorScheme="blackAlpha" variant="ghost">Families</Button>
                <Button colorScheme="blackAlpha" variant="ghost">Affordable</Button>
                <Button colorScheme="blackAlpha" variant="ghost">Snow Reliability</Button>
              </Box>
            </Box>
          </Box>

          <Box height={1} width="100%">
            <Box background="gray.100" height="100%" mx={12} borderRadius={8} />
          </Box>

          <Box py="8rem" px="3rem" background="white">
            <Box display="flex" justifyContent="space-around" color="blue.500">
              <Stack spacing={4} textAlign="center" width="33%">
                <Heading size="3xl">526</Heading>
                <Text fontWeight="bold" fontSize="lg">Ski Resorts</Text>
                <Text size="sm" color="gray.500">Discover extensive information for every ski resort in America.</Text>
              </Stack>
              <Stack spacing={4} textAlign="center" width="33%">
                <Heading size="3xl">8,755</Heading>
                <Text fontWeight="bold" fontSize="lg">Slopes</Text>
                <Text size="sm" color="gray.500">Explore detailed information on every slope.</Text>
              </Stack>
              <Stack spacing={4} textAlign="center" width="33%">
                <Heading size="3xl">9,450</Heading>
                <Text fontWeight="bold" fontSize="lg">User Reviews</Text>
                <Text size="sm" color="gray.500">Share your experience at different mountains.</Text>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Box padding=" 3rem" background="blue.100">
              <Heading size="md">Sign up for the ✨ Freshest Snow ✨</Heading>
              <Box display="flex" my={6} maxWidth="30rem">
                <InputGroup>
                  <InputLeftAddon children="Email" />
                  <Input background="white" />
                </InputGroup>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  mx={4}
                  px={4}
                  width="12rem"
                  onClick={() => {
                    fetch('https://getwaitlist.com/api/v1/waitlists/submit', {
                      method: 'POST',
                      body: JSON.stringify({
                        api_key: '2IIKTQ',
                        email: 'new@signup.com',
                        referral_link: 'http://google.com\t',
                      }),
                    });
                  }}
                >
                  Submit Email
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
