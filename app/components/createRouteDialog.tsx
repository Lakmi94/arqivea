"use client";

import { Dialog, Text, Input, Button, Icon } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

interface CreateRouteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateRouteDialog({ isOpen, onClose }: CreateRouteDialogProps) {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) onClose();
      }}>
      <Dialog.Backdrop bg="blackAlpha.600" />
      <Dialog.Positioner
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Dialog.Content
          bg="brand.surface"
          color="brand.text"
          borderRadius="lg"
          p="6"
          minW="400px"
          shadow="2xl"
          position="relative">
          <Dialog.Header>
            <Dialog.Title fontSize="2xl" fontWeight="bold">
              Create New Route
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body mt="4">
            <Text mb="2">Route Name</Text>
            <Input placeholder="e.g., Weekend Museum Tour" borderColor="brand.border" />
            <Button mt="6" w="full" bg="brand.primary" color="white" _hover={{ bg: "brand.primaryHover" }}>
              Create
            </Button>
          </Dialog.Body>
          <Dialog.CloseTrigger position="absolute" top="4" right="4" cursor="pointer">
            <Icon as={IoClose} boxSize="6" color="brand.muted" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}