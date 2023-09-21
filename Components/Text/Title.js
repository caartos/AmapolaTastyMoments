import { Text } from "@chakra-ui/react";
import React from "react";

const Title = ({title}) => {
  return (
    <Text
      mt={{ base: "auto", md: "5" }}
      align="center"
      fontWeight="bold"
      fontSize={{ md: "5xl" }}
      mb={10}
    >
      {title}
    </Text>
  );
};

export default Title;
