import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function TabHeading({title, subTitle, step}) {
  return (
    <VStack textAlign="center" color="black.500">
      <VStack spacing={0}>
        <Text fontSize="lg">{step}</Text>
        <Heading>{title}</Heading>
      </VStack>
      <Text maxW="520px" fontSize={{base: "lg", lg: "2xl"}}>
        {subTitle}
      </Text>
    </VStack>
  );
}
