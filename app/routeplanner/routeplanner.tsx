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
  const [isRouteSelected, setIsRouteSelected] = useState(false);

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
            bg={isRouteSelected ? "brand.surface" : "brand.bg"}
            minH="105px"
            cursor="pointer"
            onClick={() => setIsRouteSelected(true)}
            _hover={{ borderColor: "brand.text" }}
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

                {/* Right: selected route detail / image placeholder */}
        <Box
          bg="brand.surface"
          borderWidth="1px"
          borderColor="brand.border"
          borderRadius="lg"
          p="5"
          minH="380px"
          gridColumn={{ base: "auto", lg: "span 2" }}
        >
          {isRouteSelected ? (
            <Flex direction="column" gap="4" minH="338px">
              {/* Route title and summary */}
              <Flex
                justify="space-between"
                align="center"
                borderWidth="1px"
                borderColor="brand.border"
                borderRadius="md"
                bg="brand.bg"
                p="4"
              >
                <Text fontWeight="bold" fontSize="lg">
                  Madrid&apos;s Golden Triangle
                </Text>

                <Flex gap="5" color="brand.muted" fontSize="sm">
                  <Text>3 museums</Text>
                  <Text>4 artworks</Text>
                  <Text>~2 hrs</Text>
                </Flex>
              </Flex>

              <Flex gap="5" flex="1" minH="280px">
                {/* Left route steps */}
                <Box w="280px" flexShrink={0}>
                  <Text color="brand.muted" fontSize="sm" mb="3">
                    Click a museum to view floor plan
                  </Text>

                  <Flex direction="column" align="center" gap="2">
                    <Box
                      w="full"
                      bg="brand.bg"
                      borderWidth="1px"
                      borderColor="brand.border"
                      borderRadius="md"
                      p="3"
                    >
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text fontWeight="medium">Museo Reina Sofía</Text>
                          <Text fontSize="sm" color="brand.muted">
                            40 mins
                          </Text>
                        </Box>
                        <Text color="brand.muted">⌄</Text>
                      </Flex>
                    </Box>

                    <Text color="brand.muted" fontSize="sm" my="1">
                      10 min · 700 m
                    </Text>

                    <Box
                      h="34px"
                      borderLeftWidth="3px"
                      borderLeftStyle="dotted"
                      borderColor="brand.muted"
                    />

                    <Box
                      w="full"
                      bg="brand.bg"
                      borderWidth="1px"
                      borderColor="brand.border"
                      borderRadius="md"
                      p="3"
                    >
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text fontWeight="medium">Museo Nacional del Prado</Text>
                          <Text fontSize="sm" color="brand.muted">
                            30 mins
                          </Text>
                        </Box>
                        <Text color="brand.muted">⌄</Text>
                      </Flex>
                    </Box>

                    <Text color="brand.muted" fontSize="sm" my="1">
                      6 min · 450 m
                    </Text>

                    <Box
                      h="34px"
                      borderLeftWidth="3px"
                      borderLeftStyle="dotted"
                      borderColor="brand.muted"
                    />

                    <Box
                      w="full"
                      bg="brand.bg"
                      borderWidth="1px"
                      borderColor="brand.border"
                      borderRadius="md"
                      p="3"
                    >
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text fontWeight="medium">Museo Thyssen-Bornemisza</Text>
                          <Text fontSize="sm" color="brand.muted">
                            30 mins
                          </Text>
                        </Box>
                        <Text color="brand.muted">⌄</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>

                {/* Right map placeholder */}
                <Box
                  flex="1"
                  bg="brand.bg"
                  borderWidth="1px"
                  borderColor="brand.border"
                  borderRadius="md"
                  minH="280px"
                  overflow="hidden"
                >
                  <Flex
                    h="full"
                    minH="280px"
                    align="center"
                    justify="center"
                    textAlign="center"
                    p="6"
                  >
                    <Box>
                      <Text fontWeight="bold">Route map image area</Text>
                      <Text color="brand.muted" fontSize="sm" mt="2">
                        The Madrid museum route map will be placed here.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          ) : (
            <Flex
              h="full"
              minH="338px"
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
          )}
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