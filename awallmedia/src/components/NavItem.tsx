import React from 'react';
import {  IconButton } from '@chakra-ui/react';
import NavItemProps from '../interfaces/NavItemProps'

const NavItem = ({icon, href}: NavItemProps) => {

  return (
    // <Link href={href} style={{ textDecoration: 'none', width: '100%' }} _focus={{ boxShadow: 'none', color: 'white' }} _hover={{textDecoration: 'none', color: 'white'}}>
    //   <Flex
    //     align="center"
    //     p="4"
    //     // mx="4"
    //     borderRadius="0 6px 6px 0"
    //     role="group"
    //     cursor="pointer"
    //     _hover={{
    //       bg: 'green.400',
    //       color: 'black',
    //       transition: '0.5s'
    //     }}
    //   >
    //     {icon && (
    //       <Icon
    //         mr="4"
    //         fontSize="16"
    //         _groupHover={{
    //           color: 'black',
    //           transition: '0.5s'
    //         }}
    //         as={icon}
    //       />
    //     )}
    //     {title}
    //   </Flex>
    // </Link>
    // <Link
    //   href={href} 
    //   style={{ textDecoration: 'none', width: '100%' }} 
    //   _focus={{ boxShadow: 'none', color: 'white' }}
    // >
      <IconButton 
        isRound={true}
        // variant='outline'
        // colorScheme='green'
        aria-label='Done'
        className={href}
        fontSize='20px'
        icon={icon}
      >
      </IconButton>
    // </Link>
  )
}

export default NavItem;