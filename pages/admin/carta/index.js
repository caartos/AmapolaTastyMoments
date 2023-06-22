import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
  } from "@chakra-ui/react";
  import React from "react";
  import { useEffect } from "react";
  import { useRouter } from "next/router";
  import { useSession } from "next-auth/react";
  import Link from "next/link";
  
  const AdminCarta = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
  
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
          height={{base:"100vh"}}
          
        >
          <Box
            width={["90%", "55%"]}
            margin={["0 auto", "0 auto"]}
            minHeight={{base:"95vh", md:"85vh"}}
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
              <Link href="/admin">Atras</Link>
            </Button>
            <Text mb="10" fontSize={"5xl"}>
              EDITAR CARTA
            </Text>
          </Stack>
            <Flex justifyContent={"center"} flexDir={"column"} >
            <Box mb="10">
              <Button fontSize={{ base: "2xl",md: '3xl'}} bg="#8af0be">
                <Link href="/admin/carta/promociones" mb="10">
                  PROMOCIONES
                </Link>
              </Button>
            </Box>
            <Box mb="10">
              <Button fontSize={{ base: "2xl",md: '3xl'}} bg="#8af0be">
                <Link href="/admin/carta/tapas" mb="10">
                  TAPAS
                </Link>
              </Button>
            </Box>
            <Box mb="10">
              <Button fontSize={{ base: "2xl",md: '3xl'}} bg="#8af0be">
                <Link href="/admin/carta/focaccias" mb="10">
                  FOCACCIAS
                </Link>
              </Button>
            </Box>
            <Box mb="10">
              <Button fontSize={{ base: "2xl",md: '3xl'}} bg="#8af0be">
                <Link href="/admin/carta/especiales" mb="10">
                  BOCADILLOS ESPECIALES
                </Link>
              </Button>
            </Box>
          </Flex>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default AdminCarta;
  