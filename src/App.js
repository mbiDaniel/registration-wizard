import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import TabButton from "./components/tab-button";
import { useTab } from "./hooks/tab";
import Profile from "./components/tab-components/profile";
import Business from "./components/tab-components/business";
import AdditionalUsers from "./components/tab-components/additional-users";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Progress from "./components/progress";
import { useFormik } from "formik";
import useDispatch from "./hooks/dispatch";
import {
  dispatchState,
  getValidationSchema,
  getValues,
} from "./helper/validation";

function App() {
  const tabs = [Profile, Business, AdditionalUsers];
  const toast = useToast();
  const [state, dispatch] = useDispatch();
  
  const { Component, canNext, canPrev, next, prev, currentIndex } = useTab(tabs);

  function handleSubmit(values) {
    toast({ title: "Check your console", status: "success" });
    console.log(values);
  }

  const formik = useFormik({
    initialValues: getValues(currentIndex, state),

    validationSchema: getValidationSchema(currentIndex),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (e) =>
      dispatchState(
        currentIndex,
        e,
        dispatch,
        next,
        state,
        handleSubmit,
        formik
      ),
  });

  return (
    <Box w="100vw" minH="100vh" bg="gray.200" px="6">
      <Box
        bg="brand.500"
        w="full"
        h="50vh"
        pos="fixed"
        left="0px"
        roundedBottom="30%"
      />
      <Box w="full" maxW="7xl" mx="auto" py="10" pos="relative">
        <HStack
          flexDir={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          w="full"
        >
          <Text visibility="hidden">Contact US</Text>
          <Heading textAlign="center" variant="main">
            Create new account
          </Heading>
          <Heading fontSize="lg" color="white">
            Contact US
          </Heading>
        </HStack>
        <Spacer h="10" />
        <Card
          w="full"
          bg="white"
          pb="10"
          shadow="2xl"
          rounded="3xl"
          overflow="hidden"
        >
          <Box bg="gray.200" w="full" h="80px" pos="relative" overflow="hidden">
            <Progress maxIndex={tabs.length} index={currentIndex} />
            <HStack
              pos="relative"
              justifyContent="space-around"
              alignItems="center"
              h="full"
            >
              <TabButton
                isActive={currentIndex >= 0}
                name="Your Profile"
                index="1"
              />
              <TabButton
                isActive={currentIndex >= 1}
                name="Business Information"
                index="2"
              />
              <TabButton
                isActive={currentIndex >= 2}
                name="Additional Users"
                index="3"
              />
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "75%" }} paddingX="20px" mx="auto">
            <Component formik={formik} />
          </Box>
        </Card>
        <Spacer h="10" />
        <HStack
          flexDir={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
        >
          <Button size="lg" variant="text">
            <FaChevronLeft /> Back to Login
          </Button>
          <HStack spacing="6" flexDir={{ base: "column-reverse", md: "row" }}>
            <Button
              w="200px"
              size="lg"
              isDisabled={!canPrev}
              onClick={prev}
              variant="outline"
            >
              <FaChevronLeft /> Previous Step
            </Button>
            <Button
              w="200px"
              size="lg"
              isDisabled={!canNext && currentIndex !== 2}
              onClick={formik.submitForm}
              variant="brand"
            >
              Next Step <FaChevronRight />
            </Button>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default App;
