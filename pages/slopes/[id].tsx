import { useRouter } from 'next/router';
import {
  Box, Circle, Container, Heading, Link, Stack,
} from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import Head from 'next/head';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
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
        <Link href="/"><Heading as="h1" size="lg"><Image src="/logo3.jpg" height="72px" /></Heading></Link>
      </Box>

      <Box width="100%" shadow="md">
        <Image src="https://via.placeholder.com/1400x350?text=Ski%20Mountain%20Map%20in%203D" />
        <Box display="flex" background="white" py={4}>
          <Circle size={8} bg="blue.500" display="inline-block" />
        </Box>
      </Box>
      <Stack spacing={6}>
        <Box margin="5rem 0">
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
        </Box>
      </Stack>
    </>
  );
};

export default Post;
