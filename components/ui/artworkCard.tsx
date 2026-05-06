import { Box, Heading, Text } from "@chakra-ui/react";

interface ArtworkCardProps {
  title: string;
  description: string;
  key: number;
}

export default function ArtworkCard({
  title,
  description,
  key,
}: ArtworkCardProps) {
  return (
    <Box
      key={key}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="sm"
      _hover={{ shadow: "md" }}
      transition="shadow 0.2s">
      <Box h="48" bg="gray.200" />
      <Box p="5">
        <Heading as="h3" size="md" mb="2">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
