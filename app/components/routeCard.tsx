"use client";

import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { MdOutlineMuseum } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { Route } from "../context/RoutesContext";

interface RouteCardProps extends Route {
  onClick?: () => void;
  isSelected?: boolean;
}

export default function RouteCard(props: RouteCardProps) {
  const { name, museums, date, stopsCount, onClick, isSelected } = props;

  const displayMuseums =
    museums.length > 2
      ? "Multiple museums"
      : museums.length > 0
      ? museums.join(" • ")
      : "None";

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="brand.surface"
      p="5"
      shadow="sm"
      borderColor={isSelected ? "gray.800" : "brand.border"}
      w="full"
      _hover={{ shadow: "md", borderColor: isSelected ? "gray.800" : "gray.400" }}
      transition="all 0.2s"
      cursor="pointer"
      onClick={onClick}
    >
      <Text fontSize="xl" fontWeight="bold" mb="3">{name}</Text>
      <Flex direction="column" gap="2" color="gray.600" fontSize="sm">
        <Flex align="flex-start" gap="2">
          <Icon as={MdOutlineMuseum} boxSize="4" mt={0.5} />
          <Text>{displayMuseums}</Text>
        </Flex>
        <Flex align="center" gap="2">
          <Icon as={LuCalendar} boxSize="4" />
          <Text>{date}</Text>
          <Text mx="1">•</Text>
          <Text>{stopsCount} stop{stopsCount !== 1 ? "s" : ""}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}