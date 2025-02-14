import { extendTheme, ThemeConfig } from "@chakra-ui/react";

//
//
// NOTE :
// if you don't provide nothing
// this is the default:
//
// const defaultChakraConfig = {
//   initialColorMode: 'light'
//   useSystemColorMode: false,
// }
//
//
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

export const chakraCustomTheme = extendTheme({
  config,
  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: 'black.400',
        // color: 'white',
      },
      // styles for the `a`
      a: {
        // color: 'green.500',
        // _hover: {
        //   textDecoration: 'underline',
        // },
      },
    },
  },
});

//
//
//
export function deleteColorModeInLocalStorage() {
  window.localStorage.removeItem("chakra-ui-color-mode");
  console.log('deleted "chakra-ui-color-mode" from local storage');
  console.log("You can now refresh to see how a first visit looks like.");
}

// After 3s reset the localStorage
setTimeout(deleteColorModeInLocalStorage, 3000);
