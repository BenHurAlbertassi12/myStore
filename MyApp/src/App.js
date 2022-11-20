import React from "react";
// import { Route } from 'react-router-dom';
import StoreProvider from "./context/StoreProvider";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <StoreProvider>
        <Home />
      </StoreProvider>
    </div>
  );
}
export default App;