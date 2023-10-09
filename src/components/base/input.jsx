import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Text,
  FormHelperText,
  Box,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

export default function Input({
  label,
  hideLabel,
  required,
  error,
  variant = "main",
  tips,
  ...rest
}) {
  return (
    <FormControl>
      {!hideLabel && (
        <FormLabel
          display="flex"
          color="black.500"
          fontSize="lg"
          fontWeight="normal"
          ms="4px"
          mb="6px"
        >
          <HStack>
            <Text>
              {label}
              {required && (
                <Text as="span" color="tab.500">
                  *
                </Text>
              )}
            </Text>
           {tips && <Tooltip
              hasArrow
              placement="right-start"
              w="800px"
              label={tips}
              bg="blackAlpha.700"
              color="white"
              rounded="6px"
              px="4"
              py="3"
            >
              <span>
                <FaQuestionCircle />
              </span>
            </Tooltip>}
          </HStack>
        </FormLabel>
      )}
      <Box>
        <ChakraInput
          isRequired={required}
          variant={variant}
          size="lg"
          {...rest}
        />
        {error && <FormHelperText color="red">{error}</FormHelperText>}
      </Box>
    </FormControl>
  );
}
