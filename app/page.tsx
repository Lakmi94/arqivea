import { Flex, Heading, Text, Input, Button, SimpleGrid, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      flex="1"
      align="center"
      w="full"
      bg="gray.50"
      fontFamily="sans"
      color="gray.800"
    >
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mt="8">
        Discovery
      </Heading>
      <Text mt="4" fontSize="lg" color="gray.600">
        Hyper-search & Academic Gallery
      </Text>

      <Flex
        mt="8"
        w="full"
        maxW="lg"
        p="3"
        px="4"
        gap="2"
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="lg"
        bg="white"
        align="center"
      >
        <Input
          id="search"
          type="text"
          placeholder="Search for artworks, artists, museums, or vibes..."
          flex="1"
          px="4"
          py="2"
          // variant="unstyled"
        />outline
        <Button
          px="6"
          py="2"
          bg="gray.800"
          color="white"
          _hover={{ bg: "gray.700" }}
          transition="colors 0.2s"
        >
          filters
        </Button>
      </Flex>
<Text>Recommended artwork</Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
        mt="12"
        w="full"
        maxW="6xl"
        px="4"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Box key={i} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" shadow="sm" _hover={{ shadow: "md" }} transition="shadow 0.2s">
            <Box h="48" bg="gray.200" />
            <Box p="5">
              <Heading as="h3" size="md" mb="2">
               Artwork{i + 1}
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Short description of the artwork  goes here.
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
