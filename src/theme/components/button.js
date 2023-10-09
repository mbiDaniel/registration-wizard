export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
        transition: ".25s all ease",
        display: "flex",

        gap: "6px",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        brand: (props) => ({
          bg: "brand.400",
          color: "white",
          _focus: {
            bg: "brand.500",
          },
          _active: {
            bg: "brand.500",
          },
          _hover: {
            bg: "brand.500",
          },
        }),
        text: (props) => ({
          bg: "transparent",
          color: "tab.500",
          _focus: {
            color: "tab.400",
            bg: "transparent",
          },
          _active: {
            color: "tab.400",
            bg: "transparent",
          },
          _hover: {
            color: "tab.400",
            bg: "transparent",
          },
        }),
        outline: (props) => ({
          bg: "white",
          border: "2px solid",
          borderColor: "brand.400",
          color: "brand.400",
          _focus: {
            color: "white",
            bg: "brand.400",
          },
          _active: {
            color: "white",
            bg: "brand.400",
          },
          _hover: {
            color: "white",
            bg: "brand.400",
          },
        }),
      },
    },
  },
};
