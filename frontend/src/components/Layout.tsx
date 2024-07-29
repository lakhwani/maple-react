import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex h="100vh">
      <Sidebar></Sidebar>
      <Flex flexDirection="column" flex={1}>
        <Navbar></Navbar>
        <Box flex={1} overflowY="auto" p={4}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
