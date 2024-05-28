import { Box, Container, Text, VStack, Grid, GridItem, Image, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#f3f2ef">
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h2" size="xl" mb={4}>Featured Article</Heading>
          <Image src="https://via.placeholder.com/800x400" alt="Featured Article" mb={4} />
          <Text fontSize="lg">This is the featured article. It has a captivating headline and an engaging summary to attract readers.</Text>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <Image src="https://via.placeholder.com/400x200" alt="Article 1" mb={2} />
            <Heading as="h4" size="md">Article 1</Heading>
            <Text>Summary of article 1.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://via.placeholder.com/400x200" alt="Article 2" mb={2} />
            <Heading as="h4" size="md">Article 2</Heading>
            <Text>Summary of article 2.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://via.placeholder.com/400x200" alt="Article 3" mb={2} />
            <Heading as="h4" size="md">Article 3</Heading>
            <Text>Summary of article 3.</Text>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;