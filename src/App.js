import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./page/Main";
import { GlobalStyle } from "./styles/styles";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;
