import {
  Box,
  Flex,
  Text,
  Button,
  FormControl,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";

const AdminHorarios = () => {
  const [day, setDay] = useState({ dia: "", turnoMañana: "", turnoTarde: "" });
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleChange = ({ target: { name, value } }) => {
    setDay({ ...day, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!day.turnoMañana) {
      Swal.fire({
        text:'Turno mañana no puede quedar vacío.',
        titleText: "Debe seleccionar una tostada.",
    })
      return;
    }
    const res = await axios.put("/api/horarios", day);
    Swal.fire({
      titleText: "Horario Modificado!",
      icon: 'success',
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    }
    )
  };

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  return (
    <Box>
      <Box
        bgImg="../images/porton.png"
        bgSize="contain"
        paddingTop={{ base: "5", md: "10" }}
        paddingBottom={{ base: "5", md: "100px" }}
        align="center"
      >
        <Box
          width={["90%", "55%"]}
          margin={["0 auto", "0 auto"]}
          minHeight="85vh"
          padding={4}
          border="8px"
          borderColor="#e1f1e9"
          borderRadius={{ base: "none", md: "5" }}
          boxShadow="dark-lg"
          bg="#ebeeed"
          paddingBottom={{ base: "0px", md: "100px" }}
        >
          <Text mb="10" fontSize={"5xl"}>
            EDITAR HORARIOS
          </Text>
          <Box>
            <Text>CAMBIAR HORARIOS</Text>
            <Flex mb="10" justifyContent="center">
              <form method="PUT" encType="multipart/form-data" name="image">
                <FormControl>
                  <FormLabel>
                    <Text fontSize={"3xl"} align="center">
                      Dia
                    </Text>
                  </FormLabel>
                  <Select
                    width={"60"}
                    placeholder={"Seleccionar día"}
                    onChange={handleChange}
                    fontSize={"2xl"}
                    name="dia"
                    borderColor="#057f54"
                  >
                    <option value={"Martes"}>Martes</option>
                    <option value={"Miércoles"}>Miércoles</option>
                    <option value={"Jueves"}>Jueves</option>
                    <option value={"Viernes"}>Viernes</option>
                    <option value={"Sábado"}>Sábado</option>
                    <option value={"Domingo"}>Domingo</option>
                    <option value={"Lunes"}>Lunes</option>
                  </Select>
                </FormControl>
              </form>
            </Flex>
            <Text mb="10">HORARIOS</Text>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "space-around" }}
              mb="10"
            >
              <Box>
                <FormControl>
                  <FormLabel fontSize={"2xl"}>
                    <Text align={"center"}>
                      Turno Mañana
                    </Text>
                    <Text fontSize={"xl"} align={"center"}>
                      (si no abre en todo el día, CERRADO)
                    </Text>   
                    
                  </FormLabel>
                  <Input
                  borderColor="#057f54"
                    defaultValue="X hs a X hs o CERRADO"
                    fontSize={"2xl"}
                    width={280}
                    onChange={handleChange}
                    type="text"
                    name="turnoMañana"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel fontSize={"2xl"}>
                    <Text align={"center"}>
                      Turno Tarde
                    </Text>
                    <Text fontSize={"xl"} align={"center"}>
                      (si no abre por la tarde, dejar vacío)
                    </Text> 
                    </FormLabel>
                  <Input
                    width={280}
                    fontSize={"2xl"}
                    onChange={handleChange}
                    type="text"
                    name="turnoTarde"
                    borderColor="#057f54"
                  />
                </FormControl>
              </Box>
            </Flex>
            <Box>
              <Button
                type="submit"
                padding={"5"}
                height={"20"}
                fontSize={{base:"2xl",md:"4xl"}}
                bg="#8af0be"
                onClick={handleSubmit}
                mb={{ base: "65"}}
              >
                EDITAR HORARIO
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminHorarios;
