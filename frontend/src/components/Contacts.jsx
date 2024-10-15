import { useRef, useState } from "react";
import { validateEmail } from "../utils/validateEmail";
import emailjs from "@emailjs/browser";
import {
  EmailJSPublicKey,
  EmailJSServiceID,
  EmailJSTemplateID,
} from "../utils/APIKey";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useToast,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaViber, FaTelegramPlane } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdWhatsapp, MdOutlineEmail } from "react-icons/md";
import Map from "./Map";
import "../assets/text-colors.css";

const phoneNumber = "%2B380673251237"; // Replace with your phone number
const viberLink = `viber://chat?number=${phoneNumber}`;
const whatsappLink = `https://wa.me/${phoneNumber}`;
const telegramLink = `https://t.me/${phoneNumber}`;

export default function Contacts({ id }) {
  const form = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [emailText, setEmailText] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const getIsFormValid = () => {
    return firstName && emailText && validateEmail(email);
  };

  const clearForm = () => {
    setFirstName("");
    setEmail("");
    setEmailText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getIsFormValid()) {
      toast({
        title: "Помилка!",
        description: "Будь ласка, перевірте.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    emailjs
      .sendForm(EmailJSServiceID, EmailJSTemplateID, form.current, {
        publicKey: EmailJSPublicKey,
      })
      .then(
        () => {
          setAlertMessage("Ваш лист було відправлено! 😀");
          setIsError(false);
          onOpen();
        },
        (error) => {
          setAlertMessage("Щось пішло не так! Ваш лист не відправлено.😌");
          setIsError(true);
          onOpen();
        }
      );
    clearForm();
  };

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
                  {/* TBD
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
                  </Tooltip> */}

                  <Box
                    as="a"
                    href={viberLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      aria-label="viber"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FaViber />}
                      _hover={{
                        bg: "linear-gradient(to right, #00950E 0%, #00FF29 25%, #FF8A08 50%, #FF00F0 65%, #4C02CF 100%);",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>

                  <Box
                    as="a"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      icon={<MdWhatsapp size="28px" />}
                      _hover={{
                        bg: "linear-gradient(to right, #00950E 0%, #00FF29 25%, #FF8A08 50%, #FF00F0 65%, #4C02CF 100%);",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>

                  <Box
                    as="a"
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      aria-label="telegram"
                      variant="ghost"
                      size="lg"
                      icon={<FaTelegramPlane size="28px" />}
                      _hover={{
                        bg: "linear-gradient(to right, #00950E 0%, #00FF29 25%, #FF8A08 50%, #FF00F0 65%, #4C02CF 100%);",
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
                  <form ref={form} onSubmit={handleSubmit}>
                    <VStack spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Ваше ім'я</FormLabel>

                        <InputGroup>
                          <InputLeftElement>
                            <BsPerson />
                          </InputLeftElement>
                          <Input
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="Ваше ім'я"
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl
                        isRequired
                        isInvalid={!validateEmail(email) && email !== ""}
                      >
                        <FormLabel>Email</FormLabel>

                        <InputGroup>
                          <InputLeftElement>
                            <MdOutlineEmail />
                          </InputLeftElement>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Ваша електронна пошта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                        {!validateEmail(email) && email !== "" && (
                          <FormErrorMessage>
                            Email містить помилки!
                          </FormErrorMessage>
                        )}
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Текст повідомлення</FormLabel>

                        <Textarea
                          name="emailText"
                          placeholder="Текст повідомлення"
                          rows={6}
                          resize="none"
                          value={emailText}
                          onChange={(e) => setEmailText(e.target.value)}
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        bg="linear-gradient(to right, #00950E 0%, #00FF29 25%, #FF8A08 50%, #FF00F0 65%, #4C02CF 100%)"
                        color="white"
                        _hover={{
                          bg: !getIsFormValid()
                            ? "linear-gradient(to right, #00950E 0%, #00FF29 25%, #FF8A08 50%, #FF00F0 65%, #4C02CF 100%)"
                            : "linear-gradient(to left, #00950E 0%, #00FF29 25%, #FF8A08 50%, #FF00F0 65%, #4C02CF 100%)",
                          cursor: !getIsFormValid() ? "not-allowed" : "pointer",
                          opacity:!getIsFormValid() ? 0.3:1
                        }}
                        width="full"
                        disabled={!getIsFormValid()}
                      >
                        Надіслати нам листа!
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isError ? "Error" : "Success"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{alertMessage}</ModalBody>
          <ModalFooter>
            <Button
              colorScheme={isError ? "red" : "blue"}
              mr={3}
              onClick={onClose}
            >
              Закрити.
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}
