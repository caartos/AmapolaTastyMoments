import { HamburgerIcon } from '@chakra-ui/icons'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const NavItems = () => {
    const router = useRouter()
    const path = router.pathname
    const [isMobile, setIsMobile] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    
  
    const handleLinkClick = () => {
        if (isMobile) {
          onClose();
        }
      };

    const handleResize = () => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
    
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  return (
    <>
    {path=== "/[menu]"?
    <>
    {isMobile ? (
        <>
          <IconButton
            icon={isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
            aria-label="Abrir menú"
            size="lg"
            onClick={isOpen ? onClose : onOpen}
            display={{ base: "block", md: "none" }}
          />
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent mt="17vh">
              <DrawerBody bg="#ebeeed">
                <Flex direction="column" align="center">
                  <Link mx={2} my={1} href="/" onClick={handleLinkClick} >
                    Bienvenido
                  </Link>
                  <Link mx={2} my={1} href="/" onClick={handleLinkClick}>
                    Menu Principal
                  </Link>
                  
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex
          align="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
          mt={{ base: 4, md: 0 }}
          color="white"
        >
          <Link
            fontWeight="1000"
            
            mx={2}
            my={1}
            href="/"
            onClick={handleLinkClick}
            mr="25px"
            color="white"
            textcecor="none"
          >
            <Text
              fontWeight={1000}
              mx={2}
              my={1}
              mr="25px"
              color="white"
              textdecor="none"
              fontSize={50}
            >
              Bienvenido
            </Text>
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            <Text mx={2} my={1} ml="35px" color="white" textDecor="none" fontSize={45}>
              Menu Principal
            </Text>
          </Link>
          
          
        </Flex>
      )}
      </>
     
      
      
      
      
      
      
      
      :
      <>
    {isMobile ? (
        <>
          <IconButton
            icon={isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
            aria-label="Abrir menú"
            size="lg"
            onClick={isOpen ? onClose : onOpen}
            display={{ base: "block", md: "none" }}
          />
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent mt="17vh">
              <DrawerBody bg="#ebeeed">
                <Flex direction="column" align="center">
                  <Link mx={2} my={1} href="/" onClick={handleLinkClick} >
                    Bienvenido
                  </Link>
                  <Link mx={2} my={1} href="/menu" onClick={handleLinkClick}>
                    Carta
                  </Link>
                  <Link mx={2} my={1}  href="#gallery" onClick={handleLinkClick}>
                    Galería
                  </Link>
                  <Link
                    mx={2}
                    my={1}
                    href="#reservation"
                    onClick={handleLinkClick}
                  >
                    Reserva
                  </Link>
                  <Link mx={2} my={1} href="#contact" onClick={handleLinkClick}>
                    Contacto
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex
          align="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
          mt={{ base: 4, md: 0 }}
          color="white"
        >
          <Link
            fontWeight="1000"
            
            mx={2}
            my={1}
            href="/"
            onClick={handleLinkClick}
            mr="25px"
            color="white"
            textcecor="none"
          >
            <Text
              fontWeight={1000}
              mx={2}
              my={1}
              mr="25px"
              color="white"
              textdecor="none"
              fontSize={50}
            >
              Bienvenido
            </Text>
          </Link>
          <Link href="/menu" onClick={handleLinkClick}>
            <Text mx={2} my={1} mr="25px" color="white" textDecor="none" fontSize={45}>
              Carta
            </Text>
          </Link>
          <Link
            mx={2}
            my={1}
            href="#gallery"
            onClick={handleLinkClick}
            mr="25px"
            color="white"
            textdecor="none"
          >
            <Text mx={2} my={1} mr="25px" color="white" textDecor="none" fontSize={45}>
              Galería
            </Text>
          </Link>
          <Link
            mx={2}
            my={1}
            href="#reservation"
            onClick={handleLinkClick}
            color="white"
            textdecor="none"
            mr="25px"
          >
            <Text mx={2} my={1} mr="25px" color="white" textDecor="none" fontSize={45}>
              Reserva
            </Text>
          </Link>
          <Link
            mx={2}
            my={1}
            href="#contact"
            onClick={handleLinkClick}
            mr="25px"
            color="white"
            textdecor="none"
          >
            <Text mx={2} my={1} mr="25px" color="white" textdecor="none" fontSize={45} >
              Contacto
            </Text>
          </Link>
        </Flex>
      )}
      </>
    }
    
    </>
  )
}

export default NavItems