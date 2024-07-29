import { Flex, Box } from "@chakra-ui/react";

export function Navbar() {
  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      bg="gray.200"
      align="center"
      w="100%"
      h={50}
    >
      <Flex align={"center"}>
        <Box></Box>
      </Flex>
      <Flex align={"center"}>
        <Box>Profile</Box>
      </Flex>
    </Flex>
  );
}
