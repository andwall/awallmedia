import React from 'react'
// import { BannerProps } from '../interfaces/BannerProps'
import { Heading, Text, VStack, Link, Image, Flex } from '@chakra-ui/react'
import { BannerProps } from '../interfaces/BannerProps'
// import { color } from 'framer-motion'

const Banner = ({title, image, subtitle, body, gradient1, gradient2}: BannerProps) => {
  return (

    <>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        gap={'8px'}
      >
        <VStack
          alignItems={'start'} 
        >
          <Text size={'xs'} fontWeight={'300'} color={'gray.400'}>{subtitle}</Text>
          <Heading 
            bgClip='text'
            // bgGradient='linear(to-l, #7928CA, #FF0080)'
            // bgGradient='linear(to-r, teal.500, green.500)'
            // bgGradient={'linear(to-r, #74ebd5, #ACB6E5)'}
            // bgGradient={'linear(to-r, #03001e, #ec38bc, #fdeff9)'} //Argon
            // bgGradient={'linear(to-r, #7F00FF, #E100FF)'} //purpink
            // bgGradient={'linear(to-r, #d9a7c7, #fffcdc)'} // broken hearts
            // bgGradient={'linear(to-r, #0cebeb, #fffcdc)'} // broken hearts
            bgGradient={`linear(to-r, ${gradient1}, ${gradient2})`} // Cinnamint
            fontSize='6xl'
            fontWeight='extrabold'
            marginTop={'-5px'}
            _hover={{
              bgGradient: 'linear(to-r, #B2FEFA, #0ED2F7)',
              transition: 'bgGradient 0.5s',
              cursor: 'pointer'
            }}
          >
            <span style={{fontWeight: '200'}}>Hi, I'm</span> <Link style={{fontWeight: 'extrabold', textDecoration: 'none', color: 'inherit'}} _hover={{color: ''}}>{title}</Link>
          </Heading>
          <Heading fontSize={'xl'} fontWeight={'100'} color={''}>{body}</Heading>
        </VStack>
        {image && 
          <Image maxWidth={'700px'} src={image}></Image> 
        }
      </Flex>
    </>

  )
}

export default Banner