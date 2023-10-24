import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';

const config: string[] = [];

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(config);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {},
  dialogContainer: {
    borderRadius: 'md', // set the border radius
  },
  dialog: {
    borderRadius: 'md', // set the border radius
  },
});

const modalTheme = defineMultiStyleConfig({
  baseStyle,
});

const theme = extendTheme({
  colors: {},
  components: {
    Modal: modalTheme,
  },
});

export default theme;
