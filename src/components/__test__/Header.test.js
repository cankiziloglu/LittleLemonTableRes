import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

it("should render Nav menu items", () => {
  render(<MockHeader />);

  const reslink = screen.getByRole("link", { name: "Reservations" });
  expect(reslink).toBeInTheDocument();

  const orderlink = screen.getByRole("link", { name: "Order Online" });
  expect(orderlink).toBeInTheDocument();
});

it("should render logo image", () => {
  render(<MockHeader />);
  const logo = screen.getByAltText(/little lemon restaurant logo/i);
  expect(logo).toBeInTheDocument();
});
