import { Box, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

const Contacto = () => {
  return (
    <Box align="center">
          <Text fontSize="4xl" textdecor="underline" mb="20px" id="contact">
            CONTACTO
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }}>
            Nos encontrás en: <br />
            Calle Vicente Sancho Tello 7
          </Text>
          <br />
          <Text fontSize={{ base: "2xl", md: "3xl" }}>
            Por nuestras redes en:
          </Text>
          <Flex align={"center"} justifyContent="center">
            <Link
              href="https://www.google.com/search?q=amapola+tasty+moments&sxsrf=APwXEdd1I3lU83QuFurVekycmayMHvsiAA%3A1686141633429&ei=wXqAZMvkGeSqkdUPttSTCA&ved=0ahUKEwiLyeeIl7H_AhVkVaQEHTbqBAEQ4dUDCA4&uact=5&oq=amapola+tasty+moments&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCCMQigUQsAMQJzIOCC4QrwEQxwEQgAQQsAMyCggAEIoFELADEEMyCAgAEIAEELADMgsIABCABBCwAxDLATIICAAQgAQQsANKBAhBGAFQAFgAYJ0OaAFwAHgAgAEAiAEAkgEAmAEAwAEByAEG&sclient=gws-wiz-serp"
              
            >
              <Image
                src="/images/googleLOGO.png"
                alt="logo"
                boxSize="74"
                objectFit="cover"
                mr={2}
              />
            </Link>
            <Link
              href="https://www.instagram.com/amapolatastymoments/"
              
            >
              <Image
                src="/images/INSTALOGO.png"
                alt="logo"
                boxSize="101"
                objectFit="cover"
                mr={2}
              />
            </Link>
            <Link
              href="https://www.facebook.com/amapolatastymoments/"
              
            >
              <Image
                src="/images/facebooklogo.png"
                alt="logo"
                boxSize="74"
                objectFit="cover"
              />
            </Link>
          </Flex>
          <br />
          <Text fontSize={{ base: "2xl", md: "3xl" }}>
            Si te interesa trabajar con nosotros: <br />
            amapolatastymoments@gmail.com
          </Text>
        </Box>
  )
}

export default Contacto;