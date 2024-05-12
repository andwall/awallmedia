import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  IconButton,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const SidebarDrawer = ({children} : Props) => {
      
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLInputElement>(null);

  const handleDrawer = (event: { target: unknown }) => {
    if(!((event.target as HTMLElement).nodeName === "DIV") ){
      onClose();
    }
  }; 

  return (
    <>
      <IconButton 
        onClick={onOpen}
        icon={<HamburgerIcon/>} 
        aria-label={'Menu hamburger'} 
        isRound={true}
      >
        
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody onClick={handleDrawer}>
            {children}
          </DrawerBody>

          <DrawerFooter>
            <Text fontWeight={'200'}>&copy;&nbsp;Andrew Wallace, 2024</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SidebarDrawer;
