import {  Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function TabButton({ isActive, name, index }) {
  return (
    <HStack>
      <Flex
        w="30px"
        justifyContent="center"
        alignItems="center"
        rounded="full"
        h="30px"
        bg={isActive ? "white" : "gray.400"}
        color={isActive ? "tab.500" : "white"}
      >
        {index}
      </Flex>
      <Text display={{base: "none", lg: "inline-block"}} color={isActive ? "white" : "gray.400"} fontSize="25px">
        {name}
      </Text>
    </HStack>
  );
}
