import {
  Box,
  Center,
  Flex,
  Divider,
  Select,
  Image,
  Text,
  Button,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminCarousel = ({imagenes}) => {
  const [image, setImage] = useState({
    idCarousel:"",
    nombre: "",
    ruta: null,
  });
  const router = useRouter();
  const { data: session, status } = useSession();


  

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  const handleChange = ({ target: { name, value } }) => {
    setImage({ ...image, [name]: value });
  };

  
  const handleNuevaImagen = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const res = await axios.post("/api/carousel", formData);
    Swal.fire({
      titleText: "Nueva Imagen!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
  };


  const handleEliminarImagen = async (e) => {
    e.preventDefault();

    const res =  axios.delete(`/api/carousel?idCarousel=${image.idCarousel}`);
  
    Swal.fire({
      titleText: "Imagen Eliminada!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
  };

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
            EDITAR CARRUSEL
          </Text>
          <Box>
            <Text mb="5">AGREGAR UNA IMAGEN</Text>

            <form
              action="/api/carousel"
              method="POST"
              encType="multipart/form-data"
              name="image"
              onSubmit={handleNuevaImagen}
            >
              <FormControl>
                <Input
                  textAlign={"left"}
                  paddingY={"2.5"}
                  size={"lg"}
                  mb="10"
                  borderColor="#057f54"
                  type="file"
                  name="image"
                  width={{ base: "100%", md: "50%" }}
                  
                />
                <Box>
                  <Button
                    type="submit"
                    padding={"5"}
                    height={"20"}
                    fontSize={"3xl"}
                    bg="#8af0be"
                  >
                    NUEVA IMAGEN
                  </Button>
                </Box>
              </FormControl>
            </form>
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
          <Text>ELIMINAR IMAGEN</Text>
          <Box mb="10" justifyContent="center">
            <form method="PUT" encType="multipart/form-data" name="image">
              <FormControl>
                <FormLabel>
                  <Text fontSize={"3xl"} align="center">
                    Imagenes
                  </Text>
                </FormLabel>
                <Select
                 mb="10"
                  width={"60"}
                  placeholder={"Seleccionar imagen"}
                  onChange={handleChange}
                  fontSize={{base:"2xl",md:"4xl"}}
                  name="idCarousel"
                  borderColor="#057f54"
                >
                  {imagenes.map((img) => (
                    <option key={img.idCarousel} value={img.idCarousel}>
                      {img.nombre} 
                    </option>
                  ))}
                </Select>
              </FormControl>
            </form>
            <Box>
                  <Button
                    type="submit"
                    padding={"5"}
                    height={"20"}
                    fontSize={{base:"2xl",md:"4xl"}}
                    bg="#8af0be"
                    onClick={handleEliminarImagen}
                    mb={{ base: "65"}}
                  >
                    ELIMINAR IMAGEN
                  </Button>
                </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export const getServerSideProps = async (context) => {
  const { data: imagenes } = await axios.get(
    "http://localhost:3000/api/carousel"
  );

  return {
    props: {
      imagenes
    },
  };
};

export default AdminCarousel;
