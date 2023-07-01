import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from "react";

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
          ¡Somos Amapola! Un bar creado desde el corazón de la familia
          buscando llegar a gente como nostros. Nos esforzamos por ofrecer un
          producto fresco, sano y hecho como en casa, y lo fundamental, que sea
          siempre con una sonrisa.
        </Text>
      </Box>
    </Flex>
  );
};

export default Descripcion;
