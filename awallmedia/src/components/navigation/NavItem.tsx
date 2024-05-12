import React from 'react';
import {  Flex, IconButton, Text } from '@chakra-ui/react';
import NavItemProps from '../../interfaces/NavItemProps'
import { Link } from "react-router-dom";


const NavItem = ({icon, href, name}: NavItemProps) => {

  return (
    <Link to={href}>
      <Flex
        gap={'8px'}
        alignItems={'center'}
      >
        <IconButton
          title={name} 
          isRound={true}
          aria-label='Done'
          className={href}
          fontSize='20px'
          icon={icon}
        >
        </IconButton>
        <Text>{name}</Text>
      </Flex>
    </Link>
  )
}

export default NavItem;