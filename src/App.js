import React from "react";
import "./App.css";
import Header from "./components/Header"; // import the Header component
import Main from "./components/Main"; // import the Main component
import Footer from "./components/Footer"; // import the Footer component

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
