import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

test("renders text", () => {
  render(<MockApp />);
  const textElement = screen.getByText(/this weeks specials/i);
  expect(textElement).toBeInTheDocument();
});
