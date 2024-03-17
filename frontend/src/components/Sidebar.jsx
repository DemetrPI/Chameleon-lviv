import { Link as ScrollLink } from "react-scroll";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { FiHome, FiMenu } from "react-icons/fi";
import { BsEmojiSunglasses, BsMoonStars } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { FaMailBulk } from "react-icons/fa";
import { GiSteeltoeBoots } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

const getLinkItems = (colorMode, toggleColorMode) => [
  { name: "Головна", icon: FiHome, path: "home" },
  { name: "Продукція і послуги", icon: GiSteeltoeBoots, path: "features" },
  { name: "Галерея", icon: GrGallery, path: "gallery" },
  { name: "Відгуки", icon: VscFeedback, path: "testimonials" },
  { name: "Зв'язок", icon: FaMailBulk, path: "contacts" },
  {
    name: "Тема", // Theme
    action: toggleColorMode, // Use an action for theme toggle
    icon: colorMode === "dark" ? BsEmojiSunglasses : BsMoonStars, // Dynamically set the icon
  },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const LinkItems = getLinkItems(colorMode, toggleColorMode);
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          action={link.name === "Тема" ? link.action : undefined}
          onClose={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
const NavItem = ({ icon, children, action, path, onClose, ...rest }) => {
  // For theme toggle or other actions
  const handleClick = () => {
    if (action) {
      action(); // Execute action, e.g., toggle theme
    }
    if (onClose) {
      onClose(); // Close the mobile nav
    }
  };

  if (action) {
    return (
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        onClick={handleClick}
        cursor="pointer"
        _hover={{
          bg: "pink.500",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  } else {
    return (
      <ScrollLink
        to={path} // path is the id of the section to scroll to
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{ textDecoration: "none" }}
        onSetActive={onClose} // Use onSetActive prop of ScrollLink to close the nav when item is clicked
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "pink.500",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </ScrollLink>
    );
  }
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <>
     <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height={{ base: 20, lg: 0 }}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>
      {/* user login block will be here TBD */}
    </Flex>
    </>
  );
};

const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;

// {/* <HStack spacing={{ base: '0', md: '6' }}>
//   <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
//   <Flex alignItems={'center'}>
//     <Menu>
//       <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
//         <HStack>
//           <Avatar
//             size={'sm'}
//             src={
//               'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//             }
//           />
//           <VStack
//             display={{ base: 'none', md: 'flex' }}
//             alignItems="flex-start"
//             spacing="1px"
//             ml="2">
//             <Text fontSize="sm">Justina Clark</Text>
//             <Text fontSize="xs" color="gray.600">
//               Admin
//             </Text>
//           </VStack>
//           <Box display={{ base: 'none', md: 'flex' }}>
//             <FiChevronDown />
//           </Box>
//         </HStack>
//       </MenuButton>
//       <MenuList
//         bg={useColorModeValue('white', 'gray.900')}
//         borderColor={useColorModeValue('gray.200', 'gray.700')}>
//         <MenuItem>Profile</MenuItem>
//         <MenuItem>Settings</MenuItem>
//         <MenuItem>Billing</MenuItem>
//         <MenuDivider />
//         <MenuItem>Sign out</MenuItem>
//         <All/>
//       </MenuList>
//     </Menu>
//   </Flex>
// </HStack> */}
