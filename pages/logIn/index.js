import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import useUser from "../../lib/useUser";
import { userServiceFactory } from "../../clientServices/userService";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

const userService = userServiceFactory();

const LogIn = ({ usuarios }) => {
  console.log(usuarios.length)
  const { user, mutateUser } = useUser({
    redirectTo: "/admin",
    redirectIfFound: true,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCrearUsuario = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      Swal.fire("No puede quedar vacío el nombre ni el precio.");
      return;
    }
    const res = await axios.post("/api/user/getUsers", {nombre: username, contraseña: password});
    
    Swal.fire({
      titleText: "Nuevo Usuario!",
      icon: "success",
      iconColor: "#8af0be",
      confirmButtonColor: "#8af0be",
    });
    router.push("/admin");
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      mutateUser(await userService(username, password));
      router.push("/admin");
    } catch (error) {
      Swal.fire({
        titleText: "Usuario o contraseña incorrecta",
        icon: "error",
        iconColor: "red",
        confirmButtonColor: "#8af0be",
      });
    }
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box>
      <Box
        bgImg="images/porton.png"
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
          <Text mb="10">ADMINISTRADOR</Text>
          {usuarios.length === 1?
          <form method="POST" onSubmit={handleLogIn}>
          <FormControl>
            <FormLabel>
              <Text align="center" fontSize={"3xl"} mb="10">
                ADMIN
              </Text>
            </FormLabel>
            <Input
              fontSize={"2xl"}
              borderColor={"#057f54"}
              type="nombre"
              value={username}
              onChange={usernameHandler}
              width={{ base: "80%", md: "30%" }}
              mb={"10"}
            />
            <FormLabel>
              <Text align="center" fontSize={"3xl"} mb="10">
                Contraseña
              </Text>
            </FormLabel>
            <Input
              fontSize={"2xl"}
              borderColor={"#057f54"}
              type="password"
              value=""
              onChange={passwordHandler}
              width={{ base: "80%", md: "30%" }}
              mb={"10"}
            />
          </FormControl>

          <Button bg="#8af0be" fontSize={"2xl"} type="submit" mt={4}>
            Iniciar Sesión
          </Button>
        </form>
        :
        <form method="POST" onSubmit={handleCrearUsuario}>
            <FormControl>
              <FormLabel>
                <Text align="center" fontSize={"3xl"} mb="10">
                  CREAR ADMIN
                </Text>
              </FormLabel>
              <Input
                fontSize={"2xl"}
                borderColor={"#057f54"}
                type="nombre"
                value={username}
                onChange={usernameHandler}
                width={{ base: "80%", md: "30%" }}
                mb={"10"}
              />
              <FormLabel>
                <Text align="center" fontSize={"3xl"} mb="10">
                  Contraseña
                </Text>
              </FormLabel>
              <Input
                fontSize={"2xl"}
                borderColor={"#057f54"}
                type="password"
                value=""
                onChange={passwordHandler}
                width={{ base: "80%", md: "30%" }}
                mb={"10"}
              />
            </FormControl>

            <Button bg="#8af0be" fontSize={"2xl"} type="submit" mt={4}>
              Crear Admin
            </Button>
          </form>
        }
          
        </Box>
      </Box>
    </Box>
  );
};

export const getServerSideProps = async (context) => {
  const { data: usuarios } = await axios.get(
    "http://localhost:3000/api/user/getUsers"
  );
  return {
    props: {
      usuarios,
    },
  };
};

export default LogIn;
