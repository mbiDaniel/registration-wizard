import { Box } from "@chakra-ui/react";
import React from "react";

export default function Progress({index = 0, maxIndex = 3}) {
    const level = ((index + 1) / maxIndex) * 100
  return (
    <Box
      pos="absolute"
      w={level + "%"}
      inset={0}
      shadow="2xl"
      borderRightRadius={level === 100 ? "0px" : "100px"}
      bgGradient="linear(to-r, tab.400, tab.500)"
    />
  );
}
