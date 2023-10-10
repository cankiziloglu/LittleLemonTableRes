import React from "react";
import Header from "../components/Header"; // import the Header component
import Main from "../components/Main"; // import the Main component
import Footer from "../components/Footer"; // import the Footer component

function Home() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
