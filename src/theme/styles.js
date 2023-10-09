import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#E9E3FF",
      400: "#757AF4",
      500: "#7551FF",
      600: "#5C51DA"
    },
    tab: {
      400: "#98DDFE",
      500: "#5B99FA"
    },
    gray: {
      200: "#E6EDFD",
      400: "#AFB9E3",
      500: "#94A2CE",
    },
    black: {
      500: "#475981"
    }
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
    }),
  },
};
