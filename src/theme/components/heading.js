export const headingStyles = {
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 500,
        textTransform: "capitalize"
      },

      variants: {
        main: (props) => ({
            color: "white"
        }),
        title: (props) => ({
            color: "tab.500",
            fontSize: "20px",
            textTransform: "uppercase"
        }),
      },
    },
  },
};
