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
import { useRoutes } from "../context/RoutesContext";
import { useRoutePlanner } from "../context/RoutePlannerContext";
import RouteArtworkCard from "../components/routeArtworkCard";
import CreateRouteDialog from "../components/createRouteDialog";
import { HiOutlinePlus } from "react-icons/hi";

export default function RoutePlanner() {
  const { routes } = useRoutes();
  const { savedArtworks } = useRoutePlanner();
  const [isCreateRouteOpen, setIsCreateRouteOpen] = useState(false);

     return (
    <Flex
      p="6"
      direction="column"
      flex="1"
      align="center"
      bg="brand.bg"
      fontFamily="sans"
      color="brand.text"
    >
      <Flex maxW="1299px" direction="column" w="full" gap="5">
        {/* Page header */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          w="full"
          gap="4"
        >
          <Box>
            <Heading as="h1" fontSize="3xl" fontWeight="bold">
              Route Planner
            </Heading>
            <Text mt="2" fontSize="lg" color="brand.muted">
              Wishlist Syncing and Museum Routing
            </Text>
            <Text mt="3" color="brand.text">
              Your routes: 1
            </Text>
          </Box>

          <Button onClick={() => setIsCreateRouteOpen(true)}>
            <Icon as={HiOutlinePlus} mr="2" />
            New route
          </Button>
        </Flex>

              {/* Main route planning area */}
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap="5" w="full" alignItems="stretch">
        {/* Left: route list */}
        <Box
          bg="brand.surface"
          p="5"
          minH="500px"
        >
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="1">
            Your routes
          </Heading>
          <Text fontSize="sm" color="brand.muted" mb="5">
            1 saved route
          </Text>

          <Box
            borderWidth="1px"
            borderColor="brand.border"
            borderRadius="md"
            p="4"
            bg="brand.bg"
            minH="105px"
          >
            <Flex justify="space-between" align="flex-start" gap="3">
              <Box>
                <Text fontWeight="bold">Madrid&apos;s Golden Triangle</Text>
                <Text fontSize="sm" color="brand.muted" mt="1">
                  Multiple museums
                </Text>
              </Box>

              <Text fontSize="sm" color="brand.muted">
                3 stops
              </Text>
            </Flex>

            <Flex gap="4" mt="4" color="brand.muted" fontSize="sm">
              <Text>Planning</Text>
              <Text>13-05-2026</Text>
            </Flex>
          </Box>
        </Box>

        {/* Right: empty route preview / image placeholder */}
        <Box
          bg="brand.surface"
          borderWidth="1px"
          borderColor="brand.border"
          borderRadius="lg"
          p="5"
          minH="500px"
          gridColumn={{ base: "auto", lg: "span 2" }}
        >
          <Flex
            h="full"
            minH="288px"
            align="center"
            justify="center"
            textAlign="center"
            borderWidth="1px"
            borderColor="brand.border"
            borderRadius="md"
            bg="brand.bg"
          >
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Select a route to view its plan
              </Text>
              <Text color="brand.muted" mt="2">
                Or create a new route to get started
              </Text>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>

        {/* Wishlist section */}
        <Box
          bg="brand.surface"
          borderWidth="1px"
          borderColor="brand.border"
          borderRadius="lg"
          p="5"
          w="full"
        >
          <Flex justify="space-between" align="center" mb="4">
            <Box>
              <Heading as="h2" fontSize="xl" fontWeight="bold">
                Wishlist
              </Heading>
              <Text color="brand.muted" mt="1">
                Artworks selected from Discovery are saved here before creating a route.
              </Text>
            </Box>

            <Text color="brand.muted" fontWeight="medium">
              Wishlist: {savedArtworks.length > 0 ? savedArtworks.length : 3}
            </Text>
          </Flex>

          {savedArtworks.length > 0 ? (
            <Flex gap="5" pb="2" w="full" align="stretch">
              {savedArtworks.map((artwork, index) => (
                <Box key={index} w="250px" flexShrink={0}>
                  <RouteArtworkCard {...artwork} />
                </Box>
              ))}
            </Flex>
          ) : (
            <Flex gap="5" w="full" align="stretch">
              {[
                {
                  title: "Mona Lisa",
                  museum: "The Louvre",
                },
                {
                  title: "The Starry Night",
                  museum: "Museum of Modern Art, New York",
                },
                {
                  title: "Sunflowers (Fourth Version)",
                  museum: "National Gallery, London",
                },
              ].map((artwork) => (
                <Box
                  key={artwork.title}
                  bg="brand.bg"
                  borderWidth="1px"
                  borderColor="brand.border"
                  borderRadius="md"
                  overflow="hidden"
                  w="250px"
                  flexShrink={0}
                >
                  <Box h="150px" bg="brand.placeholder" />
                  <Box p="4">
                    <Text fontWeight="bold">{artwork.title}</Text>
                    <Text fontSize="sm" color="brand.muted" mt="1">
                      {artwork.museum}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          )}
        </Box>
      </Flex>

      <CreateRouteDialog
        isOpen={isCreateRouteOpen}
        onClose={() => setIsCreateRouteOpen(false)}
      />
    </Flex>
  );
}