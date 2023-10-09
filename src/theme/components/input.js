export const inputStyles = {
  components: {
    Input: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: "8px",

        },
      },

      variants: {
        main: (props) => ({
          field: {
            border: "1px solid",
            borderColor: "gray.500",
            borderRadius: "8px",
            fontSize: "lg",
            _placeholder: { color: "black.500", fontSize: "lg" },
            _focus: {borderColor: "tab.500"}
          },
        })
      },
    },
  },
};
