import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import axios from "axios";

const Menu = ({ tostadas, bocadillos, tapas, focaccias, especiales }) => {
  return (
    <div>
      <NavigationBar />
      <Box
        bgImg="images/porton.png"
        bgSize="contain"
        paddingTop={{ base: "5", md: "10" }}
        paddingBottom={{ base: "5", md: "100px" }}
        align="center"
      >
        <Box
          width={["90%", "85%"]}
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
          <Text
            align="center"
            fontWeight="bold"
            fontSize={{ md: "6xl" }}
            mb="20"
          >
            Nuestra Carta
          </Text>
          {/* Sección 1 */}

          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            mb={{ base: "3", md: "20" }}
            align="center"
            fontWeight={1000}
          >
            PROMOCIONES
          </Text>
          <Flex
            mt={8}
            direction={["column", "row"]}
            justifyContent="space-between"
          >
            <Box width={["100%", "47%"]}>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                mb={{ base: "3", md: "5" }}
                align="center"
                justifyContent="center"
              >
                PROMO DESAYUNO
              </Text>
              <Box align="center">
                <Text fontSize={{ base: "2xl", md: "3xl" }} align="center">
                  Con cualquiera de nuestras tostadas, podes aprovechar la
                  cafetería por sólo € 1 (café, cortado, café con leche o
                  infusión)
                  <br />ó<br />
                  jugo de naranja exprimido por € 2.
                </Text>
                <Text fontSize={{ base: "2xl", md: "2xl" }} align="center">
                  * Promo válida hasta las 12.00.
                </Text>
                <br />
                <Text
                  mb={5}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  align="center"
                >
                  ELEGÍ TU TOSTADA
                </Text>
                <Box>
                  {tostadas.map((tostada, i) => (
                    <Box key={i}>
                      <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        align="center"
                      >
                        {i + 1}. {tostada.nombre}
                      </Text>
                      <Text fontSize={{ base: "4xl", md: "5xl" }}>
                        € {tostada.precio}
                      </Text>
                    </Box>
                  ))}
                  <br />
                  <Text fontSize={{ base: "2xl", md: "2xl" }} align="center">
                    * Pan sin gluten + € 1
                  </Text>
                </Box>
              </Box>
            </Box>

            <Divider
              orientation="vertical"
              height="auto"
              marginTop={85}
              marginBottom={85}
              border="1px"
              borderColor="#057f54"
              mt={{ base: "65", md: "85" }}
              mb={{ base: "65", md: "85" }}
            />

            <Box width={["100%", "47%"]}>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                mb={{ base: "3", md: "5" }}
                align="center"
                justifyContent="center"
              >
                PROMO ALMUERZO
              </Text>
              <Box align="center">
                <Text fontSize={{ base: "2xl", md: "3xl" }} align="center">
                  Bocadillo + Bebida (caña, agua o refresco) + Cafeteria (cafe,
                  cortado, cafe con leche o infusión)
                </Text>
                <Text fontSize={{ base: "2xl", md: "7xl" }} align="center">
                  € 6,50
                </Text>
                <Text fontSize={{ base: "2xl", md: "2xl" }} align="center">
                  * Promo válida hasta las 12.30.
                </Text>
                <br />
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={5}
                  align="center"
                >
                  ELEGÍ TU BOCADILLO
                </Text>
                <Box>
                  {bocadillos.map((bocadillo, i) => (
                    <Box key={i}>
                      <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        align="center"
                      >
                        {i + 1}. {bocadillo.nombre}
                      </Text>
                      <Text fontSize={{ base: "4xl", md: "5xl" }}>
                        € {bocadillo.precio}
                      </Text>
                    </Box>
                  ))}

                  <br />
                  <Text fontSize={{ base: "2xl", md: "2xl" }} align="center">
                    * Pan sin gluten + € 1
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
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

          <Box align="center" width={["100%", "60%"]}>
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={{ base: "3", md: "20" }}
              align="center"
              fontWeight={1000}
            >
              TAPAS
            </Text>
            {tapas.map((tapa, i) => (
              <Box key={i}>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={{ base: "3", md: "5" }}
                  align="center"
                  justifyContent="center"
                >
                  {i + 1}. {tapa.nombre} {tapa.descripcion}
                </Text>
                <Text fontSize={{ base: "4xl", md: "5xl" }}>
                  € {tapa.precio}
                </Text>
              </Box>
            ))}
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

          {/* Sección 3 */}
          <Box align="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={{ base: "3", md: "20" }}
              align="center"
              fontWeight={1000}
            >
              FOCACCIAS RELLENAS
            </Text>
            {focaccias.map((focaccia, i) => (
              <Box key={i} align="center" width={["100%", "60%"]}>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={{ base: "3", md: "5" }}
                  align="center"
                  justifyContent="center"
                >
                  {i + 1}. {focaccia.nombre} {focaccia.descripcion}
                </Text>
                <Text fontSize={{ base: "4xl", md: "5xl" }}>
                  € {focaccia.precio}
                </Text>
              </Box>
            ))}
            <Box>
              <br />
              <Text fontSize={{ base: "2xl", md: "2xl" }} align="center">
                * Queso vegano + € 2
              </Text>
            </Box>
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
          {/* Sección 4 */}
          <Box align="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={5}
              align="center"
              justifyContent="center"
            >
              BOCADILLOS ESPECIALES
            </Text>
            {especiales.map((especial, i) => (
              <Box key={i} align="center" width={["100%", "60%"]}>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={{ base: "3", md: "5" }}
                  align="center"
                  justifyContent="center"
                >
                  {i + 1}. {especial.nombre}
                </Text>
                <Text fontSize={{ base: "4xl", md: "5xl" }}>
                  € {especial.precio}
                </Text>
              </Box>
            ))}
            <Box>
              <br />
              <Text fontSize={{ base: "2xl", md: "2xl" }} align="center">
                * Pan sin gluten + € 1
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { data: tostadas } = await axios.get(
    "https://amapola-carampi-gmailcom.vercel.app/api/tostadas"
  );
  const { data: bocadillos } = await axios.get(
    "https://amapola-carampi-gmailcom.vercel.app/api/bocadillos"
  );
  const { data: tapas } = await axios.get(
    "https://amapola-carampi-gmailcom.vercel.app/api/tapas"
  );
  const { data: focaccias } = await axios.get(
    "https://amapola-carampi-gmailcom.vercel.app/api/focaccias"
  );
  const { data: especiales } = await axios.get(
    "https://amapola-carampi-gmailcom.vercel.app/api/bocadillosespeciales"
  );
  return {
    props: {
      tostadas,
      bocadillos,
      tapas,
      focaccias,
      especiales,
    },
  };
};

export default Menu;
