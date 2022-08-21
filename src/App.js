import React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import { Header } from "./components";
import theme from "./utils/_theme";

const App = () => {
  return (
    <div>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />
      Hello World
    </div>
  );
};

export default App;
