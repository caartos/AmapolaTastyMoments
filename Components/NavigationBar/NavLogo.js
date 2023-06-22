import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const NavLogo = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleLinkClick = () => {
        if (isMobile) {
          onClose();
        }
      };
    
  return (
    <Flex align="center" justifyContent="center" mr={5}>
        <Link mx={2} my={1} href="/" onClick={handleLinkClick}>
        <Image
          src="/images/amapola.png"
          alt="logo"
          boxSize={{base: "150", md:"200"}}
          objectFit="cover"
          mr={2}
        />
        </Link>
      </Flex>
  )
}

export default NavLogo