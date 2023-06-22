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

const AdminFocaccias = ({ focaccias }) => {
  const [focaccia, setFocaccia] = useState({
    nombre: "",
    descripcion: null,
    precio: "",
  });
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleChange = ({ target: { name, value } }) => {
    setFocaccia({ ...focaccia, [name]: value });
  };

  const handleCrearFocaccia = async (e) => {
    e.preventDefault();
    if (!focaccia.nombre || !focaccia.precio) {
      Swal.fire("No puede quedar vacío el nombre ni el precio.");
      return;
    }
    const res = await axios.post("/api/focaccias", focaccia);
    Swal.fire({
      titleText: "Nueva Focaccia!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
  };

  const handleEditarFocaccia = async (e) => {
    e.preventDefault();
    if (!focaccia.nombre || !focaccia.precio) {
      Swal.fire("No puede quedar vacío ningún campo.");
      return;
    }
    const res = await axios.put("/api/focaccias", focaccia);
    Swal.fire({
      titleText: "Focaccia Modificada!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
  };

  const handleEliminarFocaccia = (e) => {
    e.preventDefault();
    if (!focaccia.nombre) {
      Swal.fire({
        titleText: "Debe seleccionar una focaccia.",
        confirmButtonColor: "#8af0be",
      });
      return;
    }
    const res = axios.delete(`/api/focaccias?nombre=${focaccia.nombre}`);
    Swal.fire({
      titleText: "Focaccia Eliminada!",
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
              EDITAR FOCACCIAS
            </Text>
          </Stack>

          <Text>NUEVA FOCACCIA</Text>
          <Text fontSize={"3xl"} align="center">
            Nombre
          </Text>
          <Box mb="10">
            <FormControl>
              <Input
                borderColor="#057f54"
                defaultValue="Nombre de focaccia"
                fontSize={"2xl"}
                width={280}
                onChangeCapture={handleChange}
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
                defaultValue="Descripcion de focaccia"
                fontSize={"2xl"}
                width={{ base: "100%", md: "60%" }}
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
              onClick={handleCrearFocaccia}
            >
              NUEVA FOCACCIA
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
            <Text>CAMBIAR FOCACCIA</Text>
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
                    placeholder={"Seleccionar focaccia"}
                    onChange={handleChange}
                    fontSize={"2xl"}
                    name="nombre"
                    borderColor="#057f54"
                  >
                    {focaccias.map((foca) => (
                      <option key={foca.idFocaccia} value={foca.nombre}>
                        {foca.nombre}
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
                  defaultValue="Descripcion de focaccia"
                  fontSize={"2xl"}
                  width={{ base: "100%", md: "60%" }}
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
                onClick={handleEditarFocaccia}
              >
                EDITAR FOCACCIA
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
            <Text>ELIMINAR FOCACCIA</Text>
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
                    placeholder={"Seleccionar focaccia"}
                    onChange={handleChange}
                    fontSize={"2xl"}
                    name="nombre"
                    borderColor="#057f54"
                  >
                    {focaccias.map((foca) => (
                      <option key={foca.idFocaccia} value={foca.nombre}>
                        {foca.nombre}
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
                onClick={handleEliminarFocaccia}
                mb={{ base: "65"}}
              >
                ELIMINAR FOCACCIA
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export const getServerSideProps = async (context) => {
  const { data: focaccias } = await axios.get(
    "http://localhost:3000/api/focaccias"
  );
  return {
    props: {
      focaccias,
    },
  };
};
export default AdminFocaccias;
