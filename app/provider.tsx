"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "../theme"
import { FilterProvider } from "../app/context/FilterContext"

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <FilterProvider>
        {children}
      </FilterProvider>
    </ChakraProvider>
  )
}