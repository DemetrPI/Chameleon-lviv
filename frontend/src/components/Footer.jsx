import React from 'react';
import {
  Box,
  Container,
  Text,
  useColorModeValue,
  Image,
  Link,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import chameleonBlack from "../assets/chameleon_black.jpg";
import chameleonWhite from "../assets/chameleon.jpg";
export default function Footer() {
  const { colorMode } = useColorMode();
  const logo = colorMode === "dark" ? chameleonBlack : chameleonWhite;
  const designerURL = "https://www.dmytro.biz.pl/";
  const phoneNumber = "+38 (067) 325-12-37";
  const address = "790005, Україна, м.Львів, вул. Зелена, 5"; 
    return (
      <Box
      p={2}
      sx={{
        background: "linear-gradient(to right, rgba(0, 149, 14, 0.1) 0%, rgba(0, 255, 41, 0.1) 25%, rgba(255, 138, 8, 0.1) 50%, rgba(255, 0, 240, 0.1) 65%, rgba(76, 2, 207, 0.1) 100%)"
      }}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex flexDirection="column" alignItems={{ base: "center", md: "flex-start" }} mb={{ base: 4, md: 0 }}>      
          <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          <Text>{address}</Text>
          <Link href={designerURL} isExternal >
            Designed by Dmytro
          </Link>
        </Flex>
        <Text textAlign="center" mb={{ base: 4, md: 0 }}>© 2024 Cameleon-Lviv.</Text>
        <Image src={logo} boxSize="50px" alt="Logo" alignSelf={{ base: "center", md: "flex-end" }} />
      </Container>
    </Box>
  );
}
