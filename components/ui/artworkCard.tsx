import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

interface ArtworkCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  recommendationTag: string | undefined;
  museum: string;
  room: string;
  medium: string;

}

export default function ArtworkCard({
  title,
  description,
  imageUrl,
  recommendationTag,
  museum,
  room,
  medium
}: ArtworkCardProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="brand.surface"
      shadow="sm"
      _hover={{ shadow: "md" }}
      transition="shadow 0.2s">
      {imageUrl ? (
        <Image
          src={`./images/${imageUrl}`}
          alt={title}
          h={80}
          w="full"
          objectFit="cover"
        />
      ) : (
        <Box h="48" bg="brand.placeholder" />
      )}
      <Flex
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        p="4"
        borderBottomWidth="1px"
        borderBottomColor="brand.border">
        <Box>
          <Heading as="h3" size="md" mb="2">
            {title}
          </Heading>
          <Text color="brand.muted" fontSize="sm">
            {description}
          </Text>
        </Box>
        <Box
          borderWidth="1px"
          borderBlockColor="brand.border"
          borderRadius="md"
          p="2">
          <Text>{recommendationTag}</Text>
        </Box>
      </Flex>
      <Flex direction="column" p="2">
        <Flex p="2" justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="brand.lightMuted">
            Museum
          </Text>
          <Text fontSize="sm" color="brand.lightMuted">
            {museum}
          </Text>
        </Flex>
        <Flex p="2" justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="brand.lightMuted">
            Room
          </Text>
          <Text fontSize="sm" color="brand.lightMuted">
            {room}
          </Text>
        </Flex>
        <Flex p="2" justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="brand.lightMuted">
          Medium
          </Text>
          <Text fontSize="sm" color="brand.lightMuted">
            {medium}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
