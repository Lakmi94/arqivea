"use client";

import { Box, Text, Image, Icon } from "@chakra-ui/react";
import { IoTrashOutline } from "react-icons/io5";
import { ArtworkCardProps } from "./artworkCard";
import { useRoutePlanner } from "../context/RoutePlannerContext";

export default function RouteArtworkCard(props: ArtworkCardProps) {
  const { title, imageUrl, museum, city, imagePosition } = props;
  const { toggleSavedArtwork } = useRoutePlanner();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="brand.surface"
      overflow="hidden"
      shadow="sm"
      position="relative"
    >
      <Box
        role="button"
        tabIndex={0}
        aria-label={`Remove ${title} from wishlist`}
        position="absolute"
        top="2"
        right="2"
        bg="whiteAlpha.900"
        borderRadius="full"
        p="1.5"
        cursor="pointer"
        shadow="sm"
        onClick={() => toggleSavedArtwork(props)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleSavedArtwork(props);
          }
        }}
        _hover={{ bg: "red.50" }}
        zIndex={2}
      >
        <Icon as={IoTrashOutline} color="red.500" boxSize="4" />
      </Box>
      {imageUrl ? (
        <Image
          src={`./images/${imageUrl}`}
          alt={title}
          h={48}
          w="full"
          objectFit="cover"
          objectPosition={imagePosition || "top"}
        />
      ) : (
        <Box h={48} bg="brand.placeholder" />
      )}
      <Box p="4">
        <Text fontWeight="bold">{title}</Text>
        <Text color="brand.muted" fontSize="sm">{museum} - {city}</Text>
         
      </Box>
    </Box>
  );
}