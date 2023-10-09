import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheck, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Doc({children, checked}) {
  return (
    <HStack w="full" spacing="6">
      <HStack
        border="1px solid"
        h={{base: "max-content", md: "48px"}}
        justifyContent="space-between"
        flex={1}
        p={{base: "6px 10px", md: "20px"}}
        borderColor="gray.500"
        borderRadius="8px"
      >
        <Text ontSize={{base: "lg", md: "xl"}}>{children}</Text>


        <Text color={checked ? "green.400" : "red.400"}>
        {checked ? <FaCheck /> : <FaTimes />}
        </Text>
      </HStack>

      <IconButton h="48px" bg="brand.400" color="white" w="48px" icon={<FaChevronRight />} />
    </HStack>
  );
}
