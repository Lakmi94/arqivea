"use client";
import { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Icon,
  Grid,
  Image,
} from "@chakra-ui/react";
import { useRoutes, Route } from "../context/RoutesContext";
import { useRoutePlanner } from "../context/RoutePlannerContext";
import RouteArtworkCard from "../components/routeArtworkCard";
import CreateRouteDialog from "../components/createRouteDialog";
import RouteCard from "../components/routeCard";
import { HiOutlinePlus } from "react-icons/hi";
import { IoWalkOutline, IoChevronDown, IoTimeOutline, IoLocationSharp } from "react-icons/io5";

export default function RoutePlanner() {
  const { routes } = useRoutes();
  const { savedArtworks } = useRoutePlanner();
  const [isCreateRouteOpen, setIsCreateRouteOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [expandedMuseumIndex, setExpandedMuseumIndex] = useState<number | null>(null);

  return (
    <Flex
      p="6"
      direction="column"
      flex="1"
      align="center"
      bg="brand.bg"
      fontFamily="sans"
      color="brand.text">
      <Flex maxW="1299px" direction="row" alignItems="center" w="full">
        <Flex direction="column" flex="1" align="flex-start" width="full">
          <Heading as="h1" fontSize="3xl" fontWeight="bold" mt="4">
            Route Planner
          </Heading>
          <Text mt="4" fontSize="lg" color="brand.muted">
            Wishlist Syncing and Museum Routing
          </Text>
          <Text>Your routes: {routes.length}</Text>
        </Flex>
        <Button onClick={() => setIsCreateRouteOpen(true)}>
            <Icon as={HiOutlinePlus} mr="2" />
            Create Route</Button>
      </Flex>
      
      <Flex gap="6" w="full" maxW="1299px" mt="6">
        <Flex
          maxH="450px"
          direction="column"
          w="430px"
          gap={4}
          overflowY="auto"
          pr={2}
          _scrollbar={{ width: "6px" }}
          _scrollbarTrack={{ bg: "transparent" }}
          _scrollbarThumb={{ bg: "brand.border", borderRadius: "full" }}
        >
          {routes.length === 0 ? (
            <Flex direction="column" alignItems="center" justifyContent="center" h="350px" w="full" bg="brand.surface" p="3" borderRadius="lg" borderWidth="1px" borderColor="brand.border">
              <Text fontSize="xl" fontWeight="bold" mb="4">
                No routes yet
              </Text>
              <Text>Create a route to plan your visit</Text>
            </Flex>
          ) : (
            routes.map((route) => (
              <RouteCard 
                key={route.id} 
                {...route} 
                isSelected={selectedRoute?.id === route.id}
                onClick={() => {
                  setSelectedRoute(route);
                  setExpandedMuseumIndex(null);
                }}
              />
            ))
          )}
        </Flex>
        
        <Flex maxH="450px" direction="column" flex="1">
          {!selectedRoute ? (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              h="420px"
              w="full"
              bg="brand.surface"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="brand.border">
              <Text fontSize="xl" fontWeight="bold" mb="4">
                Select a route to view its plan 
              </Text>
              <Text>Or create a new route to get started</Text>
            </Flex>
          ) : (
            <Flex direction="column" h="420px" w="full">
              {/* Detailed Plan Container */}
              <Flex direction="column" h="full" w="full" borderRadius="lg">
                {/* Top Header */}
                <Flex w="full" bg="brand.surface" p="4" px="5" borderRadius="lg" borderWidth="1px" borderColor="brand.border" justify="space-between" align="center" mb="4" shrink={0}>
                  <Heading size="md" fontSize="xl">{selectedRoute.name}</Heading>
                  <Flex gap="4" color="brand.muted" fontSize="sm" fontWeight="medium">
                    <Text>{selectedRoute.museums.length} museum{selectedRoute.museums.length !== 1 ? 's' : ''}</Text>
                    <Text>{selectedRoute.stopsCount} artwork{selectedRoute.stopsCount !== 1 ? 's' : ''}</Text>
                    <Flex align="center" gap="1">
                      <Icon as={IoTimeOutline} boxSize="4" />
                      <Text>~2 hrs</Text>
                    </Flex>
                  </Flex>
                </Flex>
                
                {/* Main Body Grid */}
                <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="4" flex="1" minH="0">
                  {/* Left Column (Timeline) */}
                  <Flex direction="column" overflowY="auto" pr="2" _scrollbar={{ width: "6px" }} _scrollbarTrack={{ bg: "transparent" }} _scrollbarThumb={{ bg: "brand.border", borderRadius: "full" }}>
                    <Text color="brand.muted" fontSize="sm" mb="3">Click a museum to view floor plan</Text>
                    {selectedRoute.museums.length > 0 ? selectedRoute.museums.map((museum, idx) => {
                      const isExpanded = expandedMuseumIndex === idx;
                      const museumArtworks = selectedRoute.artworks?.filter((a) => a.museum === museum) || [];

                      return (
                        <Box key={idx}>
                          <Flex 
                            bg="brand.surface" p="3" px="4" 
                            borderRadius={isExpanded ? "lg lg 0 0" : "lg"} 
                            borderWidth="1px" borderColor="brand.border" 
                            justify="space-between" align="center" 
                            cursor="pointer" _hover={{ bg: "gray.50" }} shadow="sm"
                            onClick={() => setExpandedMuseumIndex(isExpanded ? null : idx)}
                          >
                            <Box>
                              <Text fontWeight="bold" fontSize="md">{museum}</Text>
                              <Text fontSize="sm" color="brand.muted">40 mins</Text>
                            </Box>
                            <Icon as={IoChevronDown} color="brand.muted" transform={isExpanded ? "rotate(180deg)" : "none"} transition="transform 0.2s" />
                          </Flex>

                          {isExpanded && (
                            <Flex 
                              direction="column" gap={3} p={4} 
                              bg="gray.50" 
                              borderWidth="0 1px 1px 1px" borderColor="brand.border" 
                              borderRadius="0 0 lg lg"
                            >
                              {museumArtworks.length > 0 ? museumArtworks.map((artwork, aIdx) => (
                                <Flex key={aIdx} gap={3} align="center">
                                  {artwork.imageUrl ? (
                                    <Image src={`./images/${artwork.imageUrl}`} alt={artwork.title} boxSize="12" borderRadius="md" objectFit="cover" />
                                  ) : (
                                    <Box boxSize="12" bg="brand.placeholder" borderRadius="md" />
                                  )}
                                  <Box>
                                    <Text fontSize="sm" fontWeight="bold" lineHeight="tight">{artwork.title}</Text>
                                    <Text fontSize="xs" color="brand.muted">Room {artwork.room}</Text>
                                  </Box>
                                </Flex>
                              )) : (
                                <Text fontSize="sm" color="gray.500">No specific artworks selected.</Text>
                              )}
                            </Flex>
                          )}

                          {idx < selectedRoute.museums.length - 1 && (
                            <Flex align="center" my="1" ml="6">
                              <Box w="2px" h="14" backgroundImage="linear-gradient(to bottom, #CBD5E0 50%, transparent 50%)" backgroundSize="100% 8px" />
                              <Flex align="center" gap="2" ml="4" color="brand.muted" fontSize="sm" fontWeight="medium">
                                <Icon as={IoWalkOutline} boxSize="4" />
                                <Text>10 min | 700m</Text>
                              </Flex>
                            </Flex>
                          )}
                        </Box>
                      );
                    }) : (
                      <Text color="gray.500" fontSize="sm">No museums in this route.</Text>
                    )}
                  </Flex>

                  {/* Right Column (Map) */}
                  <Box borderRadius="lg" position="relative" overflow="hidden" minH={{ base: "300px", md: "auto" }} borderWidth="1px" borderColor="brand.border">
                    {expandedMuseumIndex !== null ? (
                      <Flex direction="column" align="center" justify="center" h="full" w="full" bg="brand.surface" p={6}>
                        <Text fontWeight="bold" fontSize="lg" mb={4} textAlign="center">
                          {selectedRoute.museums[expandedMuseumIndex]} Floor Plan
                        </Text>
                        <Flex 
                          direction="column" align="center" justify="center" flex="1" w="full" 
                          bg="gray.50" borderRadius="lg" borderWidth="2px" borderColor="gray.200" borderStyle="dashed" p={4}
                        >
                          <Icon as={IoLocationSharp} boxSize="12" color="gray.400" mb={4} />
                          <Text color="gray.500" mb={4} fontWeight="medium">Floor plan view</Text>
                          <Flex gap={2} wrap="wrap" justify="center">
                            {selectedRoute.artworks
                              ?.filter((a) => a.museum === selectedRoute.museums[expandedMuseumIndex])
                              .map((artwork, i) => (
                                <Box key={i} px={3} py={1.5} bg="brand.primary" color="white" borderRadius="full" fontSize="xs" fontWeight="bold" shadow="sm">
                                  Room {artwork.room}
                                </Box>
                              ))}
                          </Flex>
                        </Flex>
                      </Flex>
                    ) : (
                      <>
                        <Image
                          src="/images/madrid-map.png"
                          alt="Map of central Madrid with museum locations"
                          objectFit="cover"
                          w="full"
                          h="full"
                        />
                        {/* SVG Path Overlay */}
                        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                          <path d="M 45% 25% L 60% 50% L 40% 75%" fill="transparent" stroke="#1A202C" strokeWidth="4" strokeDasharray="8 8" />
                        </svg>
                        {/* Markers for the 3 museums */}
                        {[
                          { top: "18%", left: "36%" }, // Thyssen-Bornemisza
                          { top: "38%", left: "48%" }, // Prado
                          { top: "88%", left: "38%" }, // Reina Sofía
                        ].map((pos, i) => (
                          <Box key={i} position="absolute" top={pos.top} left={pos.left} transform="translate(-50%, -100%)" zIndex={2}>
                            <Icon as={IoLocationSharp} boxSize="10" color="brand.primary" />
                            <Box position="absolute" top="8px" left="50%" transform="translateX(-50%)" w="3" h="3" bg="white" borderRadius="full" />
                          </Box>
                        ))}
                      </>
                    )}
                  </Box>
                </Grid>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex direction="column" w="full" maxW="1299px" mt="8">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Wishlist: {savedArtworks.length} items
        </Text>
        <Flex overflowX="auto" gap="6" pb="4" w="full">
          {savedArtworks.map((artwork, index) => (
            <Box key={index} minW="320px">
              <RouteArtworkCard {...artwork} />
            </Box>
          ))}
        </Flex>
      </Flex>

      <CreateRouteDialog
        isOpen={isCreateRouteOpen}
        onClose={() => setIsCreateRouteOpen(false)}
      />
    </Flex>
  );
}
