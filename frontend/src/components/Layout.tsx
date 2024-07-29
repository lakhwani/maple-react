import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex h="100vh">
      <Sidebar></Sidebar>
      <Box>{children}</Box>
    </Flex>
  );
}
