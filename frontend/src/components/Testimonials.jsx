import customer1 from "../assets/customers/1.jpg"
import customer2 from "../assets/customers/2.jpg"
import customer3 from "../assets/customers/3.jpg"
import customer4 from "../assets/customers/4.jpg"
import customer5 from "../assets/customers/5.jpg"
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
export default function Testimonials({ id }) {
  const testimonials = [
    {
      heading: "Ефективно!",
      text: "Чудова робота! Мої черевики виглядають як нові.",
      imgSrc: customer1,
      name: "Валерія Ш.",
      title: "Вінниця",
    },
    {
      heading: "Швидко!",
      text: "Швидко і якісно, приємно здивован ціною. Рекомендую!",
 
      imgSrc: customer2,
        name: "Максим К.",
      title: "Львів",
    },
    {
      heading: "Результативно!",
      text: "Здивована результатом, взуття як з магазину.",
      imgSrc: customer3,
      name: "Катерина К.",
      title: "Тернопіль",
    },
    {
      heading: "Неймовірно!",
      text: "Неймовірне перевтілення старих кедів. Дуже вражен!",
      imgSrc: customer4,
      name: "Дмитро П.",
      title: "Львів",
    },
    {
      heading: "Професійно.",
      text: "Професійно та швидко відновили мою улюблену сумку.",
      imgSrc: customer5,
      name: "Олена К.",
      title: "Львів",
    },
  ];

  return (
    <section id={id} style={{ scrollSnapAlign: "start" }}>
      <Box>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading className="text-colors">Відгуки кліентів</Heading>
            <Text>Що про нас кажуть наші кліенти і покупці</Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <TestimonialContent>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={testimonial.imgSrc}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </Testimonial>
            ))}
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
