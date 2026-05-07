"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "../theme"
import { FilterProvider } from "../app/context/FilterContext"
import { RoutePlannerProvider } from "./context/RoutePlannerContext"

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <RoutePlannerProvider>
        <FilterProvider>
          {children}
        </FilterProvider>
      </RoutePlannerProvider>
    </ChakraProvider>
  )
}