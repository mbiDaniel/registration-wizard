import { Box, Spacer } from "@chakra-ui/react";
import React from "react";
import Input from "../base/input";
import TabHeading from "../tab-heading";

export default function Profile({ formik = {} }) {
  return (
    <Box py="40px" w="full">
      <TabHeading
        title="Your Profile"
        subTitle="Enter the login information for your account. You will be able to create
        additional users after registering."
        step="Step 1"
      />
      <Spacer h="10" />
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
          label="First Name"
          name="firstName"
          placeholder="Input Your First Name"
          value={formik.values?.firstName}
          onChange={formik.handleChange}
          error={formik.errors?.firstName}
        />
        <Input
          required
          label="Last Name"
          name="lastName"
          placeholder="Input Your Last Name"
          value={formik.values?.lastName}
          onChange={formik.handleChange}
          error={formik.errors?.lastName}
        />
        <Input
          required
          label="Email"
          name="email"
          placeholder="Input Your Email"
          value={formik.values?.email}
          onChange={formik.handleChange}
          error={formik.errors?.email}
        />
        <Input
          required
          label="Phone Number"
          placeholder="Input Your Phone Number"
          name="phoneNumber"
          value={formik.values?.phoneNumber}
          onChange={formik.handleChange}
          error={formik.errors?.phoneNumber}
        />
        <Input
          required
          label="Password"
          name="password"
          placeholder="Create Password"
          value={formik.values?.password}
          type="password"
          onChange={formik.handleChange}
          error={formik.errors?.password}
        />
        <Input
          required
          label="Confirm Password"
          placeholder="Confirm Your Password"
          name="cpassword"
          type="password"
          value={formik.values?.cpassword}
          onChange={formik.handleChange}
          error={formik.errors?.cpassword}
        />
      </Box>
    </Box>
  );
}
