import React from "react";
import ChessGame from "./components/ChessGame";
import { ConfigProvider } from "./context/configContext";

const App = () => {
  return (
    <ConfigProvider>
      <ChessGame/>
    </ConfigProvider>
  );
};

export default App;

