import { Flex } from "@chakra-ui/react";
import NavLogo from "./NavLogo";
import NavItems from "./NavItems";

const NavigationBar = () => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      bg="#8af0be"
      color="white"
      minHeight={{base: "10vh",md:"15vh"}}
    >
      <NavLogo />
      <NavItems />
    </Flex>
  );
};
  
export default NavigationBar;