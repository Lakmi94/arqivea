"use client";

import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Input,
  Button,
  SimpleGrid,
  Box,
  Icon,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

import ArtworkCard from "../components/ui/artworkCard";
import Filters from "./components/filters";

interface Artwork {
  id: string;
  title: string;
  artist: string;
  museum: string;
  room: string;
  medium: string;
  displayStatus?: string;
  recommendationTag?: string | null;
  imageUrl: string;
  homePage: boolean;
}

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [artworksData, setArtworksData] = useState<{ artworks: Artwork[] }>({ artworks: [] });

  useEffect(() => {
    fetch("/artworks.json")
      .then((res) => res.json())
      .then((data) => setArtworksData(data))
      .catch((err) => console.error("Error fetching artworks:", err));
  }, []);

  return (
    <Flex
      p="6"
      direction="column"
      flex="1"
      align="center"
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
        p="3"
        px="4"
        gap="2"
        borderWidth="1px"
        borderColor="brand.border"
        borderRadius="lg"
        bg="brand.surface"
        align="center"
        w="full"
        maxW="4xl">
        <Icon size="lg" color="">
          <CiSearch />
        </Icon>{" "}
        <Input
        ml="-13px"
          id="search"
          type="text"
          placeholder="Search for artworks, artists, museums, or vibes..."
          flex="1"
          border="none"
          _focus={{ border: "none", boxShadow: "none", outline: "none" }}
        />
        <Button
          px="6"
          py="2"
          bg="brand.primary"
          color="white"
          _hover={{ bg: "brand.primaryHover" }}
          transition="colors 0.2s"
          onClick={() => setShowFilters(!showFilters)}>
          Filters
        </Button>
      </Flex>
      {showFilters && (
        <Box w="full" maxW="4xl" mt="4">
          <Filters />
        </Box>
      )}
      <Text>Recommended artwork</Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
        mt="12"
        w="full"
        maxW="6xl"
        position={"relative"}>
        {artworksData.artworks.map(
          (artwork) =>
            artwork.homePage === true && (
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
            ),
        )}
      </SimpleGrid>
    </Flex>
  );
}
