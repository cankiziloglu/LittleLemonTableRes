import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../components/fakeAPI";

function Booking() {
  const navigate = useNavigate();

  const initializeTimes = () => {
    const initial = fetchAPI(new Date());
    return initial;
  };

  const updateTimes = (availableTimes, dispatch) => {
    const times = fetchAPI(new Date(dispatch.date));
    console.log(dispatch.date);
    return times;
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    submitAPI(formData) === true
      ? navigate("/confirm")
      : alert("An error occured. Please try again");
  };

  return (
    <div className="container">
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submit={submitForm}
      />
      <Footer />
    </div>
  );
}

export default Booking;
