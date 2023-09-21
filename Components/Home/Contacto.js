import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import LinksLogos from "../Links/LinksLogos";
import linksLogos from "../../config/logosRedes";

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
      <Text fontSize={{ base: "2xl", md: "3xl" }}>Por nuestras redes en:</Text>
      <Flex align={"center"} justifyContent="center">
        {linksLogos.map((link) => (
          <LinksLogos
            key={link.href} // Usa el nombre de la plataforma como clave
            href={link.href}
            src={link.src}
            boxSize={link.boxSize}
          />
        ))}
      </Flex>
      <br />
      <Text fontSize={{ base: "2xl", md: "3xl" }}>
        Si te interesa trabajar con nosotros: <br />
        amapolatastymoments@gmail.com
      </Text>
    </Box>
  );
};

export default Contacto;
