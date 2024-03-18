import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaViber, FaTelegramPlane } from "react-icons/fa";
import { BsPerson,BsFacebook  } from "react-icons/bs";
import { MdWhatsapp, MdOutlineEmail } from "react-icons/md";
import Map from "./Map";
import "../assets/text-colors.css"

const phoneNumber = '%2B380673251237'; // Replace with your phone number
const viberLink = `viber://chat?number=${phoneNumber}`;
const whatsappLink = `https://wa.me/${phoneNumber}`;
const telegramLink = `https://t.me/${phoneNumber}`;


export default function Contacts({ id }) {

  return (
    <section id={id} style={{ scrollSnapAlign: "start" }}>
      <Heading
        fontSize={{
          base: "4xl",
          md: "5xl",
        }}
        align="center"
        className="text-colors"
      >
        Як нас знайти
      </Heading>
      <Map />
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        align="center"
        justify="center"
        id="contact"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip closeOnClick={false} hasArrow>
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsFacebook />}
                      _hover={{
                        bg: "pink.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Tooltip>

                  <Box as="a" href={viberLink} target="_blank" rel="noopener noreferrer">
                    <IconButton
                      aria-label="viber"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FaViber />}
                      _hover={{
                        bg: "pink.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>

                  <Box as="a" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <IconButton
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      icon={<MdWhatsapp size="28px" />}
                      _hover={{
                        bg: "pink.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>

                  <Box as="a" href={telegramLink} target="_blank" rel="noopener noreferrer">
                    <IconButton
                      aria-label="telegram"
                      variant="ghost"
                      size="lg"
                      icon={<FaTelegramPlane size="28px" />}
                      _hover={{
                        bg: "pink.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>
                </Stack>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Ваше ім'я</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Ваше ім'я"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Ваша електронна пошта"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Текст повідомлення</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Текст повідомлення"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      bg="linear-gradient(to right, #00950E 0%, #00FF29 25%, #FF8A08 50%, #FF00F0 65%, #4C02CF 100%);"
                      color="white"
                      _hover={{
                        bg: "pink.500",
                      }}
                      width="full"
                    >
                     Надіслати нам листа!
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </section>
  );
}
