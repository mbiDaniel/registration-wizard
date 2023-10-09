import { Box, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Input from "../base/input";
import Doc from "../doc";
import TabHeading from "../tab-heading";

export default function Business({ formik = {} }) {
  return (
    <Box py="40px">
      <TabHeading
        title="Business Information"
        subTitle="Please, enter information about your company."
        step="Step 2"
      />
      <Spacer h="10" />

      <Heading variant="title">General Information</Heading>
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
          label="Brand Name"
          name="brandName"
          placeholder="Input Your Brand Name"
          value={formik.values?.brandName}
          onChange={formik.handleChange}
          error={formik.errors?.brandName}
        />
        <Input
          required
          label="Brand Type"
          name="brandType"
          placeholder="Input Your Brand Type"
          value={formik.values?.brandType}
          onChange={formik.handleChange}
          error={formik.errors?.brandType}
          tips={<>
            <Text>
            Local: Brands with distribution in 3 divisions or less OR
              multiple divisions but a total of 150 stores or less.
            </Text>
            <br />
              
              <Text>National: Brands with distribution in 4 or more divisions or
              in more than 150 stores.</Text>
            </>}
        />
        <Input
          required
          label="Street Address"
          name="streetAddress"
          placeholder="Input Your Street Address"
          value={formik.values?.streetAddress}
          onChange={formik.handleChange}
          error={formik.errors?.streetAddress}
        />
        <Input
          required
          label="City"
          placeholder="Input Your City"
          name="city"
          value={formik.values?.city}
          onChange={formik.handleChange}
          error={formik.errors?.city}
        />
        <Input
          required
          label="Zip Code"
          name="zipCode"
          placeholder="Input Zip Code"
          value={formik.values?.zipCode}
          onChange={formik.handleChange}
          error={formik.errors?.zipCode}
        />
        <Input
          required
          label="Tax ID Number"
          placeholder="Input Tax ID Number"
          name="taxId"
          value={formik.values?.taxId}
          onChange={formik.handleChange}
          error={formik.errors?.taxId}
        />
      </Box>

      <Spacer h="10" />

      <Heading variant="title">DOCUMENTS</Heading>
      <Spacer h="2" />
      <Text fontSize={{base: "lg", md: "xl"}}>
        Once the following documents are signed, you'l be ready to get started
      </Text>

      <Spacer h="2" />
      <VStack spacing="6">
        <Doc checked> Electronically sign the agreement(s) </Doc>
        <Doc>Non adult beverage Kroger market supplier waiver and release</Doc>
      </VStack>
      <Spacer h="10" />
      <Heading variant="title">COI PDF UPLOAD</Heading>
      <Spacer h="2" />
      <Text fontSize={{base: "lg", md: "xl"}}>
        Once the following documents are signed, you'l be ready to get started
      </Text>

      <Spacer h="2" />
      <VStack spacing="6">
        <Doc checked> Electronically sign the agreement(s) </Doc>
      </VStack>
    </Box>
  );
}
