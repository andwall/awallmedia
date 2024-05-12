import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import SidebarDrawer from './SidebarDrawer'

const Navbar = () => {
  return (
    <Flex
      justifyContent={'space-between'} 
      width={'100%'}
      alignItems={'center'}
      position={'fixed'}
      padding={'15px'}
    >
      <Box
        display={'flex'}
        alignItems={'center'} 
        justifyContent={'center'}
      >
        <Image src='awall.gif' width={'50px'} />
      </Box>
      <SidebarDrawer>
        <Sidebar />
      </SidebarDrawer>
    </Flex>
  )
}

export default Navbar