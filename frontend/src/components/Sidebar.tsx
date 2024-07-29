import { VStack, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export function Sidebar() {
  return (
    <VStack w="200px" h="100%" bg="gray.800" spacing={6} p={4}>
      <Box fontSize="xl" color="white">
        🍁 Maple
      </Box>
      <VStack>
        <Link href="/dashboard">
          <Flex align="center">
            <FaHome color="white" />
            <Box fontSize="md" color="white" paddingLeft={2}>
              Dashboard
            </Box>
          </Flex>
        </Link>
        <Link href="/customers">
          <Flex align="center">
            <FaHome color="white" />
            <Box fontSize="md" color="white" paddingLeft={2}>
              Customers
            </Box>
          </Flex>
        </Link>
      </VStack>
    </VStack>
  );
}
