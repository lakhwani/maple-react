import React from "react";
import { Flex, Box } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <Box>Hello</Box>
    </Flex>
  );
}
