import React from 'react'
import NavItemProps from '../../interfaces/NavItemProps';
import { Box, Flex } from '@chakra-ui/react'
import NavItem from './NavItem';
import { ColorModeToggler } from '../ColorModeToggler';
import { IoHome, IoNewspaper, IoCompassOutline, IoBag /*, IoSettings */ } from 'react-icons/io5';

const Sidebar = () => {

  // Nav item defs
  const navItems: Array<NavItemProps> = [
    { icon: <IoHome/>, href: '/', name: 'Home' },
    { icon: <IoNewspaper/>, href: '/blog', name: 'Blog' },
    { icon: <IoCompassOutline />, href: '/explore', name: 'Explore' },
    { icon: <IoBag />, href: '/shop', name: 'Shop' },
    // { icon: <IoSettings />, href: '/settings', name: 'Settings' },
  ];

  return (
    <Flex
      // position={'sticky'}
      justifyContent={'flex-end'}
    >
      <Flex
        marginLeft={'auto'} 
        order={2}      
        alignItems={'start'}
        padding={'5px 5px 5px 5px'}
        direction={'column'}
        height={'100%'} 
        width={'100%'}
        gap={'5px'}
      >
        { navItems.map((item, key) => {
          return (<NavItem
            key={`nav-item-${key}`} 
            icon={item.icon}
            href={item.href}
            name={item.name} 
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