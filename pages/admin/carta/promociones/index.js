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
} from "@chakra-ui/react";
import React from "react";
import Promociones from "../../../../Components/Admin/Promociones/Promociones";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";


const AdminPromociones = ({ tostadas, bocadillos }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [tostada, setTostada] = useState({ nombre: "", precio: "" });
  const [bocadillo, setBocadillo] = useState({ nombre: "", precio: "" });
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


 

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
          width={["90%", "80%"]}
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
            EDITAR PROMOCIONES
          </Text>
          <Flex flexDir={{base:"column", md: "row"}}>
            <Promociones productos={tostadas} />

            { !isMobile? (<Divider
              orientation="vertical"
              height="auto"
              
              border="1px"
              borderColor="#057f54"
              mt={{ base: "65", md: "85" }}
              mb={{ base: "65", md: "85" }}
            /> )
            :
            (
              <Divider
              orientation="horizontal"
              height="auto"
              border="4px"
              borderColor="#057f54"
              mt={{ base: "65", md: "85" }}
              mb={{ base: "65", md: "85" }}
            /> 
            )
            }

            <Promociones productos={bocadillos}/>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export const getServerSideProps = async (context) => {
  const { data: tostadas } = await axios.get(
    "http://localhost:3000/api/tostadas"
  );
  const { data: bocadillos } = await axios.get(
    "http://localhost:3000/api/bocadillos"
  );
  return {
    props: {
      tostadas,
      bocadillos,
    },
  };
};
export default AdminPromociones;