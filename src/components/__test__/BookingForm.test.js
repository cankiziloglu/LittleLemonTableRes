import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

it("renders text", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submit={() => {}}
    />
  );
  const inputElement = screen.getByTestId("guests");
  const occasionsElement = screen.getByTestId("occasion");

  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "10" } });
  expect(inputElement.value).toBe("10");
});
