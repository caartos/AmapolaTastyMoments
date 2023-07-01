import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Descripcion from "./Descripcion";
import Carousel from "./Carousel";
import Reservas from "./Reservas";
import Contacto from "./Contacto";
import { Divider } from "@chakra-ui/react";


const Home = ({imagenes, horarios}) => {
  
  return (
    <Box
      bgImg="images/porton.png"
      bgSize="contain"
      paddingTop={{ base: "5", md: "10" }}
      paddingBottom={{ base: "5", md: "100px" }}
    >
      <Box
        width={["90%", "70%"]}
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
        <Text mt={{base:"auto", md:"5"}} align="center" fontWeight="bold" fontSize={{ md: "5xl" }}>
          Amapola Tasty Moments
        </Text>
        {/* Sección 1 */}
        <Descripcion/>
        
        <Center>
          <Divider
            width="600px"
            marginTop={85}
            marginBottom={85}
            border="1px"
            borderColor="#057f54"
            mt={{ base: "65", md: "85" }}
            mb={{ base: "65", md: "85" }}
          />
        </Center>

        {/* Sección 2 */}

        <Text
          align="center"
          fontSize="4xl"
          textdecor="underline"
          marginBottom={{ base: "-28", md: "14" }}
          id="gallery"
        >
          GALERIA
        </Text>
        <Carousel imagenes={imagenes}/>

        <Center>
          <Divider
            width="600px"
            mt={{ base: "0", md: "85" }}
            mb={{ base: "65", md: "85" }}
            border="1px"
            borderColor="#057f54"
          />
        </Center>

        {/* Sección 3 */}
        <Reservas horarios={horarios}/>
        <Center>
          <Divider
            width="600px"
            mt={{ base: "65", md: "85" }}
            mb={{ base: "65", md: "85" }}
            border="1px"
            borderColor="#057f54"
          />
        </Center>
        {/* Sección 4 */}
        <Contacto />
      </Box>
    </Box>
  );
};

export default Home;
