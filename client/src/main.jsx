import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId="77bc890ba8d36e6ff1bc81f3703ecc87"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
