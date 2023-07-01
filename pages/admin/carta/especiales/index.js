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
  
  const AdminEspeciales = ({ especiales }) => {
    const [especial, setEspecial] = useState({
      nombre: "",
      descripcion: null,
      precio: "",
    });
    const router = useRouter();
    const { data: session, status } = useSession();
  
    const handleChange = ({ target: { name, value } }) => {
      setEspecial({ ...especial, [name]: value });
    };
  
    const handleCrearEspecial = async (e) => {
      e.preventDefault();
      if (!especial.nombre || !especial.precio) {
        Swal.fire("No puede quedar vacío el nombre ni el precio.");
        return;
      }
      const res = await axios.post("/api/bocadillosespeciales", especial);
      Swal.fire({
        titleText: "Nuevo Bocadillo Especial!",
        icon: "success",
        iconColor: "#8af0be",
        confirmButtonColor: "#8af0be",
      });
    };
  
    const handleEditarEspecial = async (e) => {
      e.preventDefault();
      if (!especial.nombre || !especial.precio) {
        Swal.fire("No puede quedar vacío ningún campo.");
        return;
      }
      const res = await axios.put("/api/bocadillosespeciales", especial);
      Swal.fire({
        titleText: "Bocadillo especial Modificado!",
        icon: "success",
        iconColor: "#8af0be",
        confirmButtonColor: "#8af0be",
      });
    };
  
    const handleEliminarEspecial = (e) => {
      e.preventDefault();
      if (!especial.nombre) {
        Swal.fire({
          titleText: "Debe seleccionar un bocadillo especial.",
          confirmButtonColor: "#8af0be",
        });
        return;
      }
      const res = axios.delete(`/api/bocadillosespeciales?nombre=${especial.nombre}`);
      Swal.fire({
        titleText: "Bocadillo especial Eliminado!",
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
              EDITAR BOCADILLOS ESPECIALES
            </Text>
          </Stack>
            <Text>NUEVO BOCADILLO ESPECIAL</Text>
            <Text fontSize={"3xl"} align="center">
              Nombre
            </Text>
            <Box mb="10">
              <FormControl>
                <Input
                  borderColor="#057f54"
                  defaultValue="Nombre de bocadillo especial"
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
                  defaultValue="Descripcion de bocadillo especial"
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
                onClick={handleCrearEspecial}
              >
                NUEVO BOC. EPECIAL
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
              <Text>CAMBIAR BOCADILLO ESPECIAL</Text>
              <Flex mb="10" justifyContent="center">
                <form method="PUT" encType="multipart/form-data" name="image">
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"3xl"} align="center">
                        Bocadillos espciales
                      </Text>
                    </FormLabel>
                    <Select
                      width={"60"}
                      placeholder={"Seleccionar bocadillo especial"}
                      onChange={handleChange}
                      fontSize={"2xl"}
                      name="nombre"
                      borderColor="#057f54"
                    >
                      {especiales.map((especial) => (
                        <option key={especial.idBocadillosEspeciales} value={especial.nombre}>
                          {especial.nombre}
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
                    defaultValue="Descripcion de bocadillo especial"
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
                  onClick={handleEditarEspecial}
                >
                  EDITAR BOC. ESPECIAL
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
              <Text>ELIMINAR BOCADILLO ESPECIAL</Text>
              <Box mb="10" justifyContent="center">
                <form method="PUT" encType="multipart/form-data" name="image">
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"3xl"} align="center">
                        Bocadillos espciales
                      </Text>
                    </FormLabel>
                    <Select
                      width={"60"}
                      placeholder={"Seleccionar un bocadillo especial"}
                      onChange={handleChange}
                      fontSize={"2xl"}
                      name="nombre"
                      borderColor="#057f54"
                    >
                      {especiales.map((especial) => (
                        <option key={especial.idBocadilloEspecial} value={especial.nombre}>
                          {especial.nombre}
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
                  onClick={handleEliminarEspecial}
                  mb={{ base: "65"}}
                >
                  ELIMINAR BOC. ESPECIAL
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  export const getServerSideProps = async (context) => {
    const { data: especiales } = await axios.get(
      "https://amapola-carampi-gmailcom.vercel.app/api/bocadillosespeciales"
    );
    return {
      props: {
        especiales,
      },
    };
  };
  export default AdminEspeciales;
  