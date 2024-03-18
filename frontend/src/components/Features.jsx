import image1Before from "../assets/before-after/image1_before.jpg";
import image1After from "../assets/before-after/image1_after.jpg";
import image2Before from "../assets/before-after/image2_before.jpg";
import image2After from "../assets/before-after/image2_after.jpg";
import image3Before from "../assets/before-after/image3_before.jpg";
import image3After from "../assets/before-after/image3_after.jpg";
import image4Before from "../assets/before-after/image4_before.jpg";
import image4After from "../assets/before-after/image4_after.jpg";
import image5Before from "../assets/before-after/image5_before.jpg";
import image5After from "../assets/before-after/image5_after.jpg";
import image6Before from "../assets/before-after/image6_before.jpg";
import image6After from "../assets/before-after/image6_after.jpg";
import image7Before from "../assets/before-after/image7_before.jpg";
import image7After from "../assets/before-after/image7_after.jpg";
import image8Before from "../assets/before-after/image8_before.jpg";
import image8After from "../assets/before-after/image8_after.jpg";
import image9Before from "../assets/before-after/image9_before.jpg";
import image9After from "../assets/before-after/image9_after.jpg";


import ImageCompare from "../utils/sliderBeforeAfter";
import "../assets/text-colors.css"
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

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
  {
    id: 8,
    leftImage: image8Before,
    rightImage: image8After,
  },
  {
    id: 9,
    leftImage: image9Before,
    rightImage: image9After,
  },
  

];
export default function Features({id}) {
  return (
    <section id={id} style={{ scrollSnapAlign: "start" }}>

    <Box p={4}>
      <Stack spacing={2} as={Container} maxW={"4xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"} className="text-colors">
          Продукція і послуги
        </Heading>
        <Text fontSize={{ base: "sm", sm: "lg" }} textAlign={"justify"}>
        Продукція європейского бренду CAMELEON - ваш надійний помічник у відновленні будь-яких речей. Професійна чистка та фарбування шкіри допоможе повернути їх до життя швидко, якісно і недорого. Також ми пропонуємо широкий асортимент нашої продукції  по догляду за шкірою у домашніх умовах. Лінія  фарб CAMELEON для гладкої шкіри дозволяє швидко відновити або кардинально змінити зовнішній вигляд виробів, продовжити термін служби улюблених речей або дати друге життя безнадійно на перший погляд Вашим  зношеним речам. Після фарбування нашою фарбою вони виглядатимуть  як нові, а зношена сумка,черевики,куртка тощо —  стає кардинально оновленою. Структура шкіри глибоко просочується, завдяки чому стає можливим не тільки фарбування вироби в «рідний» колір, але й його перефарбування в будь-який інший колір.
        </Text>
      </Stack>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" justifyContent={"center"} gap={4}>
          {cardsData.map(({ id, leftImage, rightImage }) => (
            <Box
              key={id}
              borderWidth="1px"
              borderRadius="5%"
              overflow="hidden"
              boxShadow={"8px 8px 24px 0px rgba(66, 68, 90, 1);"}
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
