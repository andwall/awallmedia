import React from 'react';
import {  IconButton } from '@chakra-ui/react';
import NavItemProps from '../interfaces/NavItemProps'

const NavItem = ({icon, href}: NavItemProps) => {

  return (
    <IconButton 
      isRound={true}
      aria-label='Done'
      className={href}
      fontSize='20px'
      icon={icon}
    >
    </IconButton>
  )
}

export default NavItem;