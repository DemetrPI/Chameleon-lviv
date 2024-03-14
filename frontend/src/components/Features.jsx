import image1Before from "../assets/image1_before.jpg";
import image1After from "../assets/image1_after.jpg";
import image2Before from "../assets/image2_before.jpg";
import image2After from "../assets/image2_after.jpg";
import image3Before from "../assets/image3_before.jpg";
import image3After from "../assets/image3_after.jpg";
import image4Before from "../assets/image4_before.jpg";
import image4After from "../assets/image4_after.jpg";
import image5Before from "../assets/image5_before.jpg";
import image5After from "../assets/image5_after.jpg";
import image6Before from "../assets/image6_before.jpg";
import image6After from "../assets/image6_after.jpg";
import image7Before from "../assets/image7_before.jpg";
import image7After from "../assets/image7_after.jpg";

import ImageCompare from "../utils/sliderBeforeAfter";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

const cardsData = [
  {
    id: 1,
    leftImage: image1Before,
    rightImage: image1After,
  },
  {
    id: 2,
    leftImage: image2Before,
    rightImage: image2After,
  },
  {
    id: 3,
    leftImage: image3Before,
    rightImage: image3After,
  },

  {
    id: 4,
    leftImage: image4Before,
    rightImage: image4After,
  },
  {
    id: 5,
    leftImage: image5Before,
    rightImage: image5After,
  },
  {
    id: 6,
    leftImage: image6Before,
    rightImage: image6After,
  },
  {
    id: 7,
    leftImage: image7Before,
    rightImage: image7After,
  },
];
export default function Features({id}) {
  return (
    <section id={id} style={{ scrollSnapAlign: "start" }}>

    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Наші послуги
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" justifyContent={"center"} gap={6}>
          {cardsData.map(({ id, leftImage, rightImage }) => (
            <Box
              key={id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m={2} // Adjust margin as necessary for spacing
              p={4} // Padding inside the box, adjust as necessary
              maxW={{ base: "full", md: "275px" }} // Adjust max width as necessary
              w={"full"} // This makes the box try to fit its content by default, adjust as necessary
              h="auto" // Adjust height to 'auto' to allow the content to define the box's height
            >
              <ImageCompare leftImage={leftImage} rightImage={rightImage} />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
</section>
  );
}
