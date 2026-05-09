"use client";

import { Input, InputProps } from "@chakra-ui/react";

export default function DatePicker(props: InputProps) {
  return (
    <Input type="date" {...props} />
  );
}
