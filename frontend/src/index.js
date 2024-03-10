import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Contacts from "./components/Contacts";
import MainHero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Sidebar>
        <MainHero />
        <Features />
        <Testimonials />
        <Contacts />
      </Sidebar>
    </ChakraProvider>
  </React.StrictMode>
);
