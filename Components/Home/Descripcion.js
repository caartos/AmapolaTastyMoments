import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from 'react'

const Descripcion = () => {
  return (
    <Flex
          mt={8}
          direction={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width={["100%", "50%"]}>
            <Image src="/images/nico.png" alt="nico-cocina" />
          </Box>
          <Box
            width={["100%", "50%"]}
            marginLeft={[0, 8]}
            mt={{ base: "40px", md: "0px" }}
          >
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={{ base: "3", md: "5" }}
              align="center"
            >
              QUIENES SOMOS
            </Text>
            <Text fontSize={{ base: "2xl", md: "3xl" }} align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              faucibus lectus sed tincidunt tincidunt. Integer pretium augue sit
              amet ullamcorper pellentesque.
            </Text>
          </Box>
        </Flex>
  )
}

export default Descripcion

        