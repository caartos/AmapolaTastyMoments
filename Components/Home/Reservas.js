import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Reservas = ({horarios}) => {
  return (
    <Box align="center">
      <Text fontSize="4xl" textdecor="underline" mb="20px" id="reservation">
        RESERVAS
      </Text>
      <Text fontSize={{ base: "2xl", md: "3xl" }}>
        Podes reservar tu mesa llamando al
      </Text>
      <Text fontSize="4xl" fontWeight="bold" mb="20px">
        960 22 64 65
      </Text>
      <Text fontSize="4xl" textdecor="underline" mb="20px">
        Nuestros Horarios
      </Text>
      {horarios.map((horario) => (
        <Text key={horario.idHorario} fontSize={{ base: "2xl", md: "3xl" }}>
          {horario.dia}{" "}
          {horario.turnoMañana.toUpperCase() === "CERRADO"
            ? "CERRADO"
            : `de ${horario.turnoMañana}` +
              (horario.turnoTarde ? ` y de ${horario.turnoTarde}` : "")}
        </Text>
      ))}
    </Box>
  );
};

export default Reservas;
