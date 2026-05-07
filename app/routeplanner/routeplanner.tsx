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
      <Flex gap="6">
         <Flex maxH="450px" direction="column">
        <Flex
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          h="350px"
          w="430px"
          bg="brand.surface"
          p="3"
          borderRadius="lg"
          borderWidth="1px"
          borderColor="brand.border">
          <Text fontSize="xl" fontWeight="bold" mb="4">
            No routes yet
          </Text>
          <Text>Create a route to plan your visit</Text>
        </Flex>
      </Flex>
      <Flex maxH="450px" direction="column">
        <Flex
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          h="420px"
          w="845px"
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
