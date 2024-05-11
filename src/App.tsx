// import React from "react";
import Header from "./components/Header";
import Anouncement from "./components/Anouncement";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";
import Claim from "./components/Claim";
import Listing from "./components/Listing";

const App = () => {
  return (
    <div>
      <Header />
      <Anouncement />
      <Claim />
      <Instructions />
      <Listing />
      <Footer />
    </div>
  );
};

export default App;
