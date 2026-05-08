"use client";

import { useState } from "react";
import { 
  Dialog, 
  Flex, 
  Text, 
  Input, 
  Button, 
  Icon, 
  Box, 
  Textarea,
  DatePicker,
  Portal
} from "@chakra-ui/react";
import { IoClose, IoChevronForward } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";

interface CreateRouteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateRouteDialog({ isOpen, onClose }: CreateRouteDialogProps) {
  const [step, setStep] = useState(1);

  const [routeName, setRouteName] = useState("");
  const [routeDescription, setRouteDescription] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [durationHours, setDurationHours] = useState("");
  const [durationMinutes, setDurationMinutes] = useState("");

  const steps = ["Details", "Add artworks", "Review & confirm"];

  const isStep1Valid =
    routeName.trim() !== "" &&
    routeDescription.trim() !== "" &&
    visitDate.trim() !== "" &&
    (durationHours.trim() !== "" || durationMinutes.trim() !== "");

  const resetState = () => {
    setStep(1);
    setRouteName("");
    setRouteDescription("");
    setVisitDate("");
    setDurationHours("");
    setDurationMinutes("");
  };

  const handleContinue = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      // Handle final submit here
      onClose();
      resetState(); // Reset for next time
    }
  };

  const handleCancel = () => {
    if (step > 1) {
      // Optional: change this to onClose() if you want Cancel to strictly close the modal
      setStep(step - 1); 
    } else {
      onClose();
      resetState();
    }
  };

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) {
          onClose();
          resetState(); // Reset step and fields when closed by clicking outside
        }
      }}
    >
      <Dialog.Backdrop bg="blackAlpha.600" />
      <Dialog.Positioner display="flex" alignItems="center" justifyContent="center">
        <Dialog.Content
          bg="brand.surface"
          color="brand.text"
          borderRadius="xl"
          minW="500px"
          shadow="2xl"
          position="relative"
          overflow="hidden"
        >
          {/* Close Button */}
          <Dialog.CloseTrigger position="absolute" top="4" right="4" cursor="pointer" zIndex={10}>
            <Icon as={IoClose} boxSize="6" color="gray.400" _hover={{ color: "gray.600" }} />
          </Dialog.CloseTrigger>

          {/* Header */}
          <Dialog.Header pt={6} pb={4} px={8}>
            <Flex flexDir="column">
              <Text color="gray.500" fontSize="md">New Route</Text>
              <Dialog.Title fontSize="3xl" fontWeight="bold">
                Plan your visit
              </Dialog.Title>
            </Flex>
          </Dialog.Header>

          {/* Stepper Status Bar */}
          <Box borderTopWidth="1px" borderBottomWidth="1px" borderColor="brand.border" px={8} py={3} bg="white">
            <Flex align="center" gap={4}>
              {steps.map((label, index) => {
                const stepNum = index + 1;
                const isActive = step === stepNum;
                const isPast = step > stepNum;
                // Active or past steps get the dark styling, future steps are gray
                const isHighlighted = isActive || isPast; 

                return (
                  <Flex key={label} align="center" gap={4}>
                    <Flex align="center" gap={2} color={isHighlighted ? "black" : "gray.400"}>
                      <Flex
                        w={6}
                        h={6}
                        borderRadius="full"
                        bg={isHighlighted ? "black" : "gray.300"}
                        color="white"
                        align="center"
                        justify="center"
                        fontSize="sm"
                        fontWeight="bold"
                      >
                        {stepNum}
                      </Flex>
                      <Text fontWeight={isActive ? "medium" : "normal"}>{label}</Text>
                    </Flex>
                    {/* Add separator except for the last item */}
                    {index < steps.length - 1 && (
                      <Icon as={IoChevronForward} color="gray.300" />
                    )}
                  </Flex>
                );
              })}
            </Flex>
          </Box>

          {/* Form Body - Conditionally rendered based on 'step' */}
          <Dialog.Body px={8} py={6} bg="white">
            {step === 1 && (
              <Flex flexDir="column" gap={5}>
                <Box>
                  <Text mb="2" color="gray.500">Route name *</Text>
                  <Input
                    borderColor="gray.300"
                    borderRadius="md"
                    size="lg"
                    value={routeName}
                    onChange={(e) => setRouteName(e.target.value)}
                  />
                </Box>
                <Box>
                  <Text mb="2" color="gray.500">Route description *</Text>
                  <Textarea
                    borderColor="gray.300"
                    borderRadius="md"
                    size="lg"
                    rows={3}
                    value={routeDescription}
                    onChange={(e) => setRouteDescription(e.target.value)}
                  />
                </Box>
                <Box>
                  <DatePicker.Root
                    w="full"
                    onValueChange={(e) => {
                      // Extracts the string format from the Ark UI DatePicker
                      const newDate = e.valueAsString[0] || "";
                      setVisitDate(newDate);
                      console.log("Visit date selected:", newDate);
                    }}
                  >
                    <DatePicker.Label mb="2" color="gray.500" display="block">Visit date *</DatePicker.Label>
                    <DatePicker.Control>
                      <DatePicker.Input
                        placeholder="DD/MM/YYYY"
                        borderColor="gray.300"
                        borderRadius="md"
                        // size="lg"
                      />
                      <DatePicker.IndicatorGroup pr="3">
                        <DatePicker.Trigger>
                          <Icon as={LuCalendar} color="gray.500" />
                        </DatePicker.Trigger>
                      </DatePicker.IndicatorGroup>
                    </DatePicker.Control>
                    <Portal>
                      <DatePicker.Positioner>
                        <DatePicker.Content bg="white" shadow="xl" borderRadius="md" p="4" zIndex="popover" borderWidth="1px" borderColor="brand.border">
                          <DatePicker.View view="day">
                            <DatePicker.Header />
                            <DatePicker.DayTable />
                          </DatePicker.View>
                          <DatePicker.View view="month">
                            <DatePicker.Header />
                            <DatePicker.MonthTable />
                          </DatePicker.View>
                          <DatePicker.View view="year">
                            <DatePicker.Header />
                            <DatePicker.YearTable />
                          </DatePicker.View>
                        </DatePicker.Content>
                      </DatePicker.Positioner>
                    </Portal>
                  </DatePicker.Root>
                </Box>
                <Box>
                  <Text mb="2" color="gray.500">Route duration *</Text>
                  <Flex gap={4}>
                    <Flex align="center" gap={2} flex={1}>
                      <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        borderColor="gray.300"
                        borderRadius="md"
                        size="lg"
                        value={durationHours}
                        onChange={(e) => setDurationHours(e.target.value)}
                      />
                      <Text color="gray.500">hrs</Text>
                    </Flex>
                    <Flex align="center" gap={2} flex={1}>
                      <Input
                        type="number"
                        placeholder="00"
                        min={0}
                        max={59}
                        borderColor="gray.300"
                        borderRadius="md"
                        size="lg"
                        value={durationMinutes}
                        onChange={(e) => setDurationMinutes(e.target.value)}
                      />
                      <Text color="gray.500">mins</Text>
                    </Flex>
                  </Flex>
                </Box>
                <Text fontSize="sm" color="gray.400" mt={-2}>* Required fields</Text>
              </Flex>
            )}

            {step === 2 && (
              <Box py={10} textAlign="center">
                <Text color="gray.500">Add artworks interface goes here...</Text>
              </Box>
            )}

            {step === 3 && (
              <Box py={10} textAlign="center">
                <Text color="gray.500">Review & confirm interface goes here...</Text>
              </Box>
            )}
          </Dialog.Body>

          {/* Footer */}
          <Box borderTopWidth="1px" borderColor="gray.200" px={8} py={5} bg="white">
            <Flex justify="space-between">
              <Button 
                onClick={handleCancel} 
                bg="gray.200" 
                color="black" 
                _hover={{ bg: "gray.300" }} 
                borderRadius="lg" 
                px={8}
                size="lg"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleContinue} 
                disabled={step === 1 && !isStep1Valid}
                bg="gray.400" // Kept gray as in your wireframe, change to brand.primary for production
                color="white" 
                _hover={{ bg: "gray.500" }} 
                borderRadius="lg" 
                px={8}
                size="lg"
              >
                {step === steps.length ? "Create route" : "Continue"}
              </Button>
            </Flex>
          </Box>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}