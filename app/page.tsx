import {
  Flex,
  Heading,
  Text,
  Input,
  Button,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import artworksData from "./artworks.json";
import ArtworkCard from "../components/ui/artworkCard";
import { relative } from "path";

export default function Home() {
  return (
    <Flex
    p="6"
      direction="column"
      flex="1"
      align="center"
      w="full"
      bg="brand.bg"
      fontFamily="sans"
      color="brand.text">
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mt="4">
        Discovery
      </Heading>
      <Text mt="4" fontSize="lg" color="brand.muted">
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
        borderColor="brand.border"
        borderRadius="lg"
        bg="brand.surface"
        align="center">
        <Input
          id="search"
          type="text"
          placeholder="Search for artworks, artists, museums, or vibes..."
          flex="1"
          px="4"
          py="2"
          // variant="unstyled"
        />
        
        <Button
          px="6"
          py="2"
          bg="brand.primary"
          color="white"
          _hover={{ bg:"brand.primaryHover" }}
          transition="colors 0.2s">
          Filters
        </Button>
      </Flex>
      <Text>Recommended artwork</Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
        mt="12"
        w="full"
        maxW="6xl" 
        position={'relative'}
        px="4">
        {artworksData.artworks.map((artwork) => artwork.homePage === true && (
          <ArtworkCard
            key={artwork.id}
            title={artwork.title}
            description={artwork.artist}
            imageUrl={artwork.imageUrl}
            recommendationTag={artwork.recommendationTag ?? undefined}
            museum={artwork.museum}
            room={artwork.room}
            medium={artwork.medium}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
