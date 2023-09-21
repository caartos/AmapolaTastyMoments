import { Center, Divider } from "@chakra-ui/react";
import React from "react";

const DividerSections = () => {
  return (
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
  );
};

export default DividerSections;
