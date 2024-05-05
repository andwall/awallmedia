import React from 'react'
import NavItemProps from '../interfaces/NavItemProps';
import { Box, Flex, Image } from '@chakra-ui/react'
import NavItem from './NavItem';
import { ColorModeToggler } from './ColorModeToggler';
import { IoHome, IoNewspaper, IoCompassOutline, IoBag, IoSettings } from 'react-icons/io5';

const Sidebar = () => {
  // Nav item defs
  const navItems: Array<NavItemProps> = [
    { icon: <IoHome/>, href: '#' },
    { icon: <IoNewspaper/>, href: '#' },
    { icon: <IoCompassOutline />, href: '#' },
    { icon: <IoBag />, href: '#' },
    { icon: <IoSettings />, href: '#' },
  ];

  return (
    <Flex
      position={'sticky'}
      justifyContent={'flex-end'}
   
    >
      <Flex
        marginLeft={'auto'} 
        order={2}      
        alignItems={'center'}
        padding={'5px 5px 5px 5px'}
        direction={'column'}
        height={'100vh'} 
        gap={'5px'}
      >

        <Box
          display={'flex'}
          alignItems={'center'} 
          justifyContent={'center'}
          width={'100%'}
          padding={'15px 0'}
        >
          <Image src='aw.png' width={'50px'} />
        </Box>
        { navItems.map((item) => {
          return (<NavItem 
            icon={item.icon}
            href={item.href} 
          />)
        }) }

        <Box>
          <ColorModeToggler />
        </Box>

      </Flex>
    </Flex>
  )
}

export default Sidebar