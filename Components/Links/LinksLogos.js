import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const LinksLogos = ({ href, src, boxSize }) => {

  return (
    <Link href={href}>
      <Image src={src} alt={src} boxSize={boxSize} objectFit="cover" mr={2} />
    </Link>
  );
};

export default LinksLogos;
