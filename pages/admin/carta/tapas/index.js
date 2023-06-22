import {
  Box,
  Flex,
  Text,
  Button,
  FormControl,
  Input,
  FormLabel,
  Select,
  Center,
  Divider,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";

const AdminTapas = ({ tapas }) => {
  const [tapa, setTapa] = useState({ nombre: "", descripcion: null, precio: "" });
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleChange = ({ target: { name, value } }) => {
    setTapa({ ...tapa, [name]: value });
  };

  const handleCrearTapa = async (e) => {
    e.preventDefault();
    if (!tapa.nombre || !tapa.precio) {
      Swal.fire("No puede quedar vacío el nombre ni el precio.");
      return;
    }
    const res = await axios.post("/api/tapas", tapa);
    Swal.fire({
      titleText: "Nueva Tapa!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
  };

  const handleEditarTapa = async (e) => {
    e.preventDefault();
    if (!tapa.nombre || !tapa.precio) {
      Swal.fire("No puede quedar vacío ningún campo.");
      return;
    }
    const res = await axios.put("/api/tapas", tapa);
    Swal.fire({
      titleText: "Tapa Modificada!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
  };

  const handleEliminarTapa = (e) => {
    e.preventDefault();
    if (!tapa.nombre) {
      Swal.fire({
        titleText: "Debe seleccionar una tapa.",
        confirmButtonColor: "#8af0be",
      });
      return;
    }
    const res = axios.delete(`/api/tapas?nombre=${tapa.nombre}`);
    Swal.fire({
      titleText: "Tapa Eliminada!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
  };

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  return (
    <Box>
      <Box
        bgImg="../../images/porton.png"
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
         <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "", md: "27%" }}
          >
            <Button
              bg="#e8bcce"
              w={{ base: "fit-content" }}
              fontSize={{ base: "xl" }}
            >
              <Link href="/admin/carta">Atras</Link>
            </Button>
            <Text mb="10" fontSize={"5xl"}>
              EDITAR TAPAS
            </Text>
          </Stack>
          
          <Text>NUEVA TAPA</Text>
          <Text fontSize={"3xl"} align="center">
            Nombre
          </Text>
          <Box mb="10">
            <FormControl>
              <Input
                borderColor="#057f54"
                defaultValue="Nombre de tapa"
                fontSize={"2xl"}
                width={280}
                onChange={handleChange}
                type="text"
                name="nombre"
              />
            </FormControl>
          </Box>
          <Text fontSize={"3xl"} align="center">
            Descripción
          </Text>
          <Box mb="10">
            <FormControl>
              <Input
                borderColor="#057f54"
                defaultValue="Descripcion de tapa"
                fontSize={"2xl"}
                width={{base: "100%",md:"60%"}}
                onChange={handleChange}
                type="text"
                name="descripcion"
              />
            </FormControl>
          </Box>
          <Text fontSize={"3xl"} align="center">
            Precio
          </Text>
          <Box mb="10">
            <FormControl>
              <Input
                borderColor="#057f54"
                defaultValue="0.00"
                fontSize={"2xl"}
                width={280}
                onChange={handleChange}
                type="text"
                name="precio"
              />
            </FormControl>
          </Box>
          <Box>
            <Button
              type="submit"
              padding={"5"}
              height={"20"}
              fontSize={{base: "2xl", md:"4xl"}}
              bg="#8af0be"
              onClick={handleCrearTapa}
            >
              NUEVA TAPA
            </Button>
          </Box>
          <Center>
            <Divider
              width="600px"
              mt={{ base: "65", md: "85" }}
              mb={{ base: "65", md: "85" }}
              border="1px"
              borderColor="#057f54"
            />
          </Center>
        <Box>
          <Text>CAMBIAR TAPA</Text>
          <Flex mb="10" justifyContent="center">
            <form method="PUT" encType="multipart/form-data" name="image">
              <FormControl>
                <FormLabel>
                  <Text fontSize={"3xl"} align="center">
                    Tapas
                  </Text>
                </FormLabel>
                <Select
                  width={"60"}
                  placeholder={"Seleccionar tapa"}
                  onChange={handleChange}
                  fontSize={"2xl"}
                  name="nombre"
                  borderColor="#057f54"
                >
                  {tapas.map((tapa) => (
                    <option key={tapa.idTapa} value={tapa.nombre}>
                      {tapa.nombre}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </form>
          </Flex>
          <Text fontSize={"3xl"} align="center">
            Descripción
          </Text>
          <Box mb="10">
            <FormControl>
              <Input
                borderColor="#057f54"
                defaultValue="Descripcion de tapa"
                fontSize={"2xl"}
                width={{base: "100%",md:"60%"}}
                onChange={handleChange}
                type="text"
                name="descripcion"
              />
            </FormControl>
          </Box>
          <Text fontSize={"3xl"} align="center">
            Precio
          </Text>
          <Box mb="10">
            <FormControl>
              <Input
                borderColor="#057f54"
                defaultValue="0.00"
                fontSize={"2xl"}
                width={280}
                onChange={handleChange}
                type="text"
                name="precio"
              />
            </FormControl>
          </Box>
          <Box>
            <Button
              type="submit"
              padding={"5"}
              height={"20"}
              fontSize={{base: "2xl", md:"4xl"}}
              bg="#8af0be"
              onClick={handleEditarTapa}
            >
              EDITAR TAPA
            </Button>
          </Box>
          <Center>
            <Divider
              width="600px"
              mt={{ base: "65", md: "85" }}
              mb={{ base: "65", md: "85" }}
              border="1px"
              borderColor="#057f54"
            />
          </Center>
          <Text>ELIMINAR TOSTADA</Text>
          <Box mb="10" justifyContent="center">
            <form method="PUT" encType="multipart/form-data" name="image">
              <FormControl>
                <FormLabel>
                  <Text fontSize={"3xl"} align="center">
                    Tapas
                  </Text>
                </FormLabel>
                <Select
                  width={"60"}
                  placeholder={"Seleccionar tapa"}
                  onChange={handleChange}
                  fontSize={"2xl"}
                  name="nombre"
                  borderColor="#057f54"
                >
                  {tapas.map((tapa) => (
                    <option key={tapa.idTapa} value={tapa.nombre}>
                      {tapa.nombre}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </form>
          </Box>

          <Box>
            <Button
              type="submit"
              padding={"5"}
              height={"20"}
              fontSize={{base: "2xl", md:"4xl"}}
              bg="#8af0be"
              onClick={handleEliminarTapa}
              mb={{ base: "65"}}
            >
              ELIMINAR TAPA
            </Button>
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export const getServerSideProps = async (context) => {
  const { data: tapas } = await axios.get("http://localhost:3000/api/tapas");
  return {
    props: {
      tapas,
    },
  };
};
export default AdminTapas;
