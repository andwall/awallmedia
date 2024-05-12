import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Flex 
        gap={'8px'}
        alignItems={'center'} 
      >
        {colorMode === "light" ?  
          <IconButton
            title="Color Mode"
            onClick={toggleColorMode}
            isRound={true}
            _hover={{colorScheme: '#03ad7a', variant: 'outline' }}
            aria-label='Done'
            fontSize='20px'
            icon={<MoonIcon/>}
          >
          </IconButton> 
        : <IconButton 
            title="Color Mode"
            onClick={toggleColorMode}
            isRound={true}
            aria-label='Done'
            fontSize='20px'
            icon={<SunIcon/>}
          >
          </IconButton> }

          <Text>Color Mode</Text>
      </Flex>
      
  );
};
