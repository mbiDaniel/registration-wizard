import { Box, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Input from "../base/input";
import Doc from "../doc";
import TabHeading from "../tab-heading";

export default function AdditionalUsers({ formik = {} }) {
  return (
    <Box py="40px">
      <TabHeading
        title="Additional Users"
        subTitle="Please, enter information about your company."
        step="Step 3"
      />

      <Spacer h="10" />

      <Heading variant="title">User</Heading>
      <Spacer h="3" />
      <Box
        display={{ base: "flex", lg: "grid" }}
        flexDir="column"
        gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        rowGap={{ base: "10px", lg: "20px" }}
        columnGap="30px"
        w="full"
      >
        <Input
          required
          label="Username"
          name="username"
          placeholder="Input Username"
          value={formik.values?.username}
          onChange={formik.handleChange}
          error={formik.errors?.username}
        />
        <Input
          required
          label="PIN"
          name="pin"
          placeholder="Input PIN"
          value={formik.values?.pin}
          onChange={formik.handleChange}
          error={formik.errors?.pin}
        />
      </Box>

      <Spacer h="10" />

      <Heading variant="title">DOCUMENTS</Heading>
      <Spacer h="2" />
      <Text fontSize={{ base: "lg", md: "xl" }}>
        Once the following documents are signed, you'l be ready to get started
      </Text>

      <Spacer h="2" />
      <VStack spacing="6">
        <Doc checked> Electronically sign the agreement(s) </Doc>
        <Doc>Non adult beverage Kroger market supplier waiver and release</Doc>
      </VStack>
    </Box>
  );
}
