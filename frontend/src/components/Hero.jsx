import React from "react";
import chameleonBlack from "../assets/chameleon_black.jpg";
import chameleonWhite from "../assets/chameleon.jpg";
import "../assets/text-colors.css"
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  Box,
} from "@chakra-ui/react";

export default function MainHero({ id }) {
  const { colorMode } = useColorMode();
  const chameleonImage = colorMode === "dark" ? chameleonBlack : chameleonWhite;

  // Responsive styles for image container
  const imageContainerSize = useBreakpointValue({ base: "80%", md: "80%" });
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <section id={id} style={{ scrollSnapAlign: "start" }}>
      <Stack minH={"100vh"} direction={stackDirection} spacing={3}>
        {/* Image Container */}
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
          order={{ base: 1, xlg: 1 }} // Image goes on top on base, stays in order on md and above
        >
          <Box
            width={imageContainerSize}
            maxWidth={"100%"}
            pt={imageContainerSize} // Padding Top to maintain aspect ratio (square)
            position="relative"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            m={2}
          >
            <Image
              alt={"Chameleon Image"}
              src={chameleonImage}
              objectFit="cover"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>
        <Flex
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
          direction="column"
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              textAlign={"center"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Cameleon
              </Text>
              <br />
              <Text className="text-colors" as={"span"} fontSize={{base: "2xl", md: "3xl", lg: "4.5xl"}}>
                Майстерня з відновлення шкіри.
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.500"}
              textAlign={"center"}
            >
              Краса твоїх речей у нашіх руках
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </section>
  );
}
