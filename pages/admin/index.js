import { Box, Flex, Text, Button, Stack, Center } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import withSession from "../../lib/session";

const Admin = () => {
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
        height={{ base: "100vh" }}
      >
        <Box
          width={["90%", "55%"]}
          margin={["0 auto", "0 auto"]}
          minHeight={{ base: "95vh", md: "85vh" }}
          padding={4}
          border="8px"
          borderColor="#e1f1e9"
          borderRadius={{ base: "none", md: "5" }}
          boxShadow="dark-lg"
          bg="#ebeeed"
          paddingBottom={{ base: "0px", md: "100px" }}
        >
          <Flex flexDir={"row-reverse"}>
           <Button
              
              bg="#e8bcce"
              w={{ base: "fit-content", md:"5xs"}}
              fontSize={{ base: "xl" }}
            >
              <Link href="/api/logOut">Cerrar Sesión</Link>
            </Button>
            </Flex>
            <Text align={"center"}  mb="10" fontSize={{ base: "4xl", md: "5xl" }}>
              ADMINISTRADOR
            </Text>
          
        
          <Flex
            pt={{ base: "30" }}
            justifyContent={"center"}
            flexDir={"column"}
          >
            <Box mb="10">
              <Button fontSize={{ base: "2xl", md: "3xl" }} bg="#8af0be">
                <Link href="/admin/carousel" mb="10">
                  EDITAR CAROUSEL
                </Link>
              </Button>
            </Box>
            <Box mb="10">
              <Button fontSize={{ base: "2xl", md: "3xl" }} bg="#8af0be">
                <Link href="/admin/carta" mb="10">
                  EDITAR CARTA
                </Link>
              </Button>
            </Box>
            <Box mb="10">
              <Button fontSize={{ base: "2xl", md: "3xl" }} bg="#8af0be">
                <Link href="/admin/horarios" mb="10">
                  EDITAR HORARIOS
                </Link>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (user === undefined) {
    res.setHeader("location", "/logIn");
    res.statusCode = 302;
    res.end();
    return {};
  }
  return {
    props: { user: req.session.get("user") },
  };
});
export default Admin;
