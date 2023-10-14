import React from "react";
import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

it("should include nav menu", () => {
  render(<MockFooter />);
  const hometext = screen.getByText(/Home/);
  expect(hometext).toBeInTheDocument();
  
  expect(screen.getByText(/Menu/)).toBeInTheDocument();
  expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
  expect(screen.getByText(/follow us/i)).toBeInTheDocument();
});
