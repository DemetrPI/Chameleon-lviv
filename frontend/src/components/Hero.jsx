import chameleonBlack from "../assets/chameleon_black.jpg";
import chameleonWhite from "../assets/chameleon.jpg";
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

export default function MainHero({id}) {
  // Use the useColorMode hook to get the current color mode
  const { colorMode } = useColorMode();

  // Determine which image to use based on the current color mode
  const chameleonImage = colorMode === "dark" ? chameleonBlack : chameleonWhite;

  return (
    <section id={id} style={{ scrollSnapAlign: "start" }}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Майстерня з відновлення взуття
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Краса твоїх речей у нашіх руках
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Chameleon"}
            objectFit={"cover"}
            src={chameleonImage} // Use the determined image based on the color mode
          />
        </Flex>
      </Stack>
    </section>
  );
}
