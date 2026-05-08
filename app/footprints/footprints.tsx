"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Footprints() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <Flex
      p="6"
      direction="column"
      flex="1"
      align="center"
      bg="brand.bg"
      fontFamily="sans"
      color="brand.text"
      position="relative"
    >
      <Flex maxW="1299px" direction="column" w="full" gap="5">
        {/* Page header */}
        <Box>
          <Heading as="h1" fontSize="3xl" fontWeight="bold">
            Footprints
          </Heading>
          <Text mt="2" fontSize="lg" color="brand.muted">
            Personal Digital Drawer and Cultural Footprint
          </Text>
          <Text mt="3" color="brand.text">
            Your routes: 2
          </Text>
        </Box>

        {/* Main content area */}
        <Flex gap="6" w="full" align="stretch">
          {/* Left: route archive list */}
          <Box
            w="370px"
            flexShrink={0}
            minH="460px"
            p="5"
            bg="transparent"
          >
            <Flex direction="column" gap="5">
              {/* Route card 1 */}
              <Box
                borderWidth="1px"
                borderColor="brand.border"
                borderRadius="md"
                p="4"
                bg="brand.surface"
              >
                <Flex justify="space-between" align="flex-start" gap="3">
                  <Box>
                    <Text fontWeight="bold">Madrid&apos;s Golden Triangle</Text>
                    <Text fontSize="sm" color="brand.muted" mt="1">
                      Multiple museums
                    </Text>
                  </Box>

                  <Button size="sm" onClick={() => setIsShareOpen(true)}>
                    Share
                  </Button>
                </Flex>

                <Flex
                  justify="space-between"
                  align="center"
                  mt="5"
                  color="brand.muted"
                  fontSize="sm"
                >
                  <Flex align="center" gap="2">
                    <Box
                      w="14px"
                      h="14px"
                      borderRadius="full"
                      borderWidth="2px"
                      borderColor="brand.text"
                    />
                    <Text color="brand.text">Mark as done</Text>
                  </Flex>

                  <Text>13-05-2026</Text>
                  <Text>3 stops</Text>
                </Flex>
              </Box>

              {/* Route card 2 */}
              <Box
                borderWidth="1px"
                borderColor="brand.border"
                borderRadius="md"
                p="4"
                bg="brand.surface"
                opacity={0.65}
              >
                <Flex justify="space-between" align="flex-start" gap="3">
                  <Box>
                    <Text fontWeight="bold">Trip to East Asia</Text>
                    <Text fontSize="sm" color="brand.muted" mt="1">
                      Multiple museums
                    </Text>
                  </Box>

                  <Text fontSize="sm" color="brand.muted">
                    2 stops
                  </Text>
                </Flex>

                <Flex
                  justify="space-between"
                  align="center"
                  mt="5"
                  color="brand.muted"
                  fontSize="sm"
                >
                  <Flex align="center" gap="2">
                    <Flex
                      w="16px"
                      h="16px"
                      borderRadius="full"
                      borderWidth="1px"
                      borderColor="brand.muted"
                      align="center"
                      justify="center"
                      fontSize="10px"
                    >
                      ✓
                    </Flex>
                    <Text>Completed</Text>
                  </Flex>

                  <Text>13-12-2025</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>

          {/* Right: map / footprint visualization area */}
          <Box
            flex="1"
            minH="460px"
            bg="brand.surface"
            borderRadius="lg"
            p="5"
          >
            <Flex
              h="full"
              minH="420px"
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
                  Map or footprint image area
                </Text>
                <Text color="brand.muted" mt="2">
                  The cultural footprint map will be placed here.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      {/* Share modal */}
      {isShareOpen && (
        <Flex
          position="fixed"
          inset="0"
          bg="blackAlpha.600"
          align="center"
          justify="center"
          zIndex="modal"
          p="6"
        >
          <Box
            bg="brand.surface"
            borderRadius="lg"
            w="620px"
            maxW="90vw"
            p="6"
            position="relative"
            boxShadow="xl"
          >
            {/* Close button */}
            <Button
              position="absolute"
              top="4"
              right="4"
              variant="ghost"
              onClick={() => setIsShareOpen(false)}
              fontSize="xl"
            >
              ×
            </Button>

            <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="5">
              Share your visit!
            </Heading>

            <Flex direction="column" align="center" gap="5">
              {/* Share card preview */}
              <Box
                w="340px"
                maxW="100%"
                bg="brand.bg"
                borderWidth="1px"
                borderColor="brand.border"
                borderRadius="md"
                p="4"
                boxShadow="md"
              >
                {/* Image placeholder */}
                <Flex
                  h="210px"
                  align="center"
                  justify="center"
                  borderWidth="1px"
                  borderColor="brand.border"
                  borderRadius="md"
                  bg="brand.surface"
                  textAlign="center"
                  p="4"
                >
                  <Box>
                    <Text fontWeight="bold">Madrid&apos;s Art Triangle</Text>
                    <Text fontSize="sm" color="brand.muted" mt="2">
                      Completed route image / postcard preview
                    </Text>
                  </Box>
                </Flex>

                <Text mt="4" fontSize="sm" lineHeight="1.6">
                  Even a wandering minstrel must pause to marvel at the visual
                  masterpieces of Madrid&apos;s Golden Triangle! Just completed
                  the Paseo del Arte trail, and my creative spirit is absolutely
                  overflowing.
                </Text>

                <Text mt="2" fontSize="sm" color="brand.muted">
                  #Madrid #Spain
                </Text>
              </Box>

              {/* Social buttons */}
              <Flex gap="6" mt="2">
                <Button
                  w="52px"
                  h="52px"
                  borderRadius="md"
                  fontSize="2xl"
                  bg="brand.text"
                  color="brand.bg"
                  _hover={{ opacity: 0.85 }}
                >
                  f
                </Button>

                <Button
                  w="52px"
                  h="52px"
                  borderRadius="md"
                  fontSize="2xl"
                  bg="brand.text"
                  color="brand.bg"
                  _hover={{ opacity: 0.85 }}
                >
                  ◎
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      )}
    </Flex>
  );
}