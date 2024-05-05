import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";


export const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <>
        {colorMode === "light" ?  
          <IconButton 
            onClick={toggleColorMode}
            isRound={true}
            // variant='outline'
            // colorScheme='green'
            _hover={{colorScheme: '#03ad7a', variant: 'outline' }}
            aria-label='Done'
            fontSize='20px'
            icon={<MoonIcon/>}
          >
          </IconButton> 
        : <IconButton 
            onClick={toggleColorMode}
            isRound={true}
            // variant='outline'
            // colorScheme='green'
            aria-label='Done'
            fontSize='20px'
            icon={<SunIcon/>}
          >
          </IconButton> }
      </>
      
  );
};
