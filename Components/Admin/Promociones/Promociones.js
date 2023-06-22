import { Box, Center, Divider, Flex, FormControl, FormLabel, Input, Select, Text, Button } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'

const Promociones = ({productos}) => {
    const [producto, setProducto] = useState({ nombre: "", precio: "" });

    const oa = function() {
        const palabra = productos[0].tipoDeProducto.split(" ")[0]
        const ultimaLetra = productos[0].tipoDeProducto.split(" ")[0].split("").length-1
        if(palabra[ultimaLetra]=== "o"){
            return "o"
        } else{
            return "a"
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setProducto({ ...producto, [name]: value });
      };
    
      const handleCrear = async (e) => {
        e.preventDefault();
        if (!producto.nombre || !producto.precio) {
          Swal.fire("No puede quedar vacío ningún campo.");
          return;
        }
        const res = await axios.post(`/api/${productos[0].apiNombre}`, producto);
        Swal.fire({
          titleText: `Nuev${oa()} ${productos[0].tipoDeProducto.toLowerCase()}!`,
          icon: "success",
          iconColor: "#8af0be",
          confirmButtonColor: "#8af0be",
        });
      };
    
      const handleEditar = async (e) => {
        e.preventDefault();
        if (!producto.nombre || !producto.precio) {
          Swal.fire("No puede quedar vacío ningún campo.");
          return;
        }
        const res = await axios.put(`/api/${productos[0].apiNombre}`, producto);
        Swal.fire({
          titleText: `${productos[0].tipoDeProducto} modificad${oa()}!`,
          icon: "success",
          iconColor: "#8af0be",
          confirmButtonColor: "#8af0be",
        });
      };
    
      const handleEliminar = (e) => {
        e.preventDefault();
        if (!producto.nombre) {
          Swal.fire({
            titleText: `Debe seleccionar un${oa()} ${productos[0].tipoDeProducto.toLowerCase()}.`,
            confirmButtonColor: "#8af0be",
          });
          return;
        }
        const res = axios.delete(`/api/${productos[0].apiNombre}?nombre=${producto.nombre}`);
        Swal.fire({
          titleText: `${productos[0].tipoDeProducto} Eliminad${oa()}!`,
          icon: "success",
          iconColor: "#8af0be",
          confirmButtonColor: "#8af0be",
        });
      };
  return (
    <Box w={{base:"100%",md:"50%"}}>
              <Text>NUEV{oa().toUpperCase()} {productos[0].tipoDeProducto.toUpperCase()}</Text>
              <Text fontSize={"3xl"} align="center">
                Nombre
              </Text>
              <Box mb="10">
                <FormControl>
                  <Input
                    borderColor="#057f54"
                    defaultValue={`Nombre de ${productos[0].tipoDeProducto.toLowerCase()}`}
                    fontSize={"2xl"}
                    width={280}
                    onChange={handleChange}
                    type="text"
                    name="nombre"
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
                  onClick={handleCrear}
                >
                  NUEV{oa().toUpperCase()} {productos[0].tipoDeProducto.toUpperCase()}
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

              <Text>CAMBIAR {productos[0].tipoDeProducto.toUpperCase()}</Text>
              <Flex mb="10" justifyContent="center">
                <form method="PUT" encType="multipart/form-data" name="image">
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"3xl"} align="center">
                      {productos[0].tipoDeProducto}s
                      </Text>
                    </FormLabel>
                    <Select
                      width={"60"}
                      placeholder={`Seleccionar ${productos[0].tipoDeProducto.toLowerCase()}`}
                      onChange={handleChange}
                      fontSize={"2xl"}
                      name="nombre"
                      borderColor="#057f54"
                    >
                      {productos.map((prod) => (
                        
                        <option key={prod.id} value={prod.nombre}>
                          {prod.nombre}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </form>
              </Flex>
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
                  onClick={handleEditar}
                >
                  EDITAR {productos[0].tipoDeProducto.toUpperCase()}
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
              <Text>ELIMINAR {productos[0].tipoDeProducto.toUpperCase()}</Text>
              <Box mb="10" justifyContent="center">
                <form method="PUT" encType="multipart/form-data" name="image">
                  <FormControl>
                    <FormLabel>
                      <Text fontSize={"3xl"} align="center">
                      {productos[0].tipoDeProducto}s
                      </Text>
                    </FormLabel>
                    <Select
                      width={"60"}
                      placeholder={`Seleccionar ${productos[0].tipoDeProducto.toLowerCase()}`}
                      onChange={handleChange}
                      fontSize={"2xl"}
                      name="nombre"
                      borderColor="#057f54"
                    >
                       {productos.map((prod) => (
                        <option key={prod.id} value={prod.nombre}>
                          {prod.nombre}
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
                  onClick={handleEliminar}
                  mb={{base:"10", md:"0"}}
                >
                  ELIMINAR {productos[0].tipoDeProducto.toUpperCase()}
                </Button>
              </Box>
            </Box>
  )
}

export default Promociones;