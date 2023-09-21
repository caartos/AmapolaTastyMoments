import { Box } from "@chakra-ui/react";
import Descripcion from "./Descripcion";
import Carousel from "./Carousel";
import Reservas from "./Reservas";
import Contacto from "./Contacto";
import DividerSections from "../Divider/DividerSections";
import Title from "../Text/Title";

const Home = ({ imagenes, horarios }) => {
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
        <Title title={"Amapola Tasty Moments"} />
        {/* Sección 1 */}
        <Descripcion />
        <DividerSections />
        {/* Sección 2 */}
        <Carousel imagenes={imagenes} />
        <DividerSections />
        {/* Sección 3 */}
        <Reservas horarios={horarios} />
        <DividerSections />
        {/* Sección 4 */}
        <Contacto />
      </Box>
    </Box>
  );
};

export default Home;
