/* eslint-disable react/prop-types */
import React, { useState } from "react";
import bkimg1 from "../assets/booking1.jpg";
import bkimg2 from "../assets/booking2.jpg";
import bkimg3 from "../assets/booking3.jpg";
import PropTypes from "prop-types";

const BookingForm = ({ availableTimes, dispatch, submit }) => {
  // const [step, setStep] = useState(1);
  const [seating, setSeating] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    submit({
      seating: seating,
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    });

    setSeating("");
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
  };

  return (
    <div className="booking-wrapper">
      <div className="booking">
        <h1 className="book-title">Reservation</h1>
        <form className="book-form" onSubmit={handleSubmit} id="booking-form">
          <section className="reserve">
            <label>
              Indoor Seating{" "}
              <input
                name="seating"
                type="radio"
                onChange={(e) => setSeating(e.target.value)}
                value="Indoor"
              />
            </label>
            <label>
              Outdoor Seating{" "}
              <input
                name="seating"
                type="radio"
                onChange={(e) => setSeating(e.target.value)}
                value="Outdoor"
              />
            </label>

            <label>
              Choose date{" "}
              <input
                type="date"
                required
                onChange={(e) => {
                  dispatch({ date: e.target.value });
                  setDate(e.target.value);
                }}
                value={date}
              ></input>
            </label>

            <label>
              Choose time
              <select
                required
                onChange={(e) => setTime(e.target.value)}
                value={time}
              >
                <option>Choose Time</option>
                {availableTimes.map((avtime) => (
                  <option key={avtime} value={avtime}>
                    {avtime}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Number of guests
              <input
                type="number"
                required
                onChange={(e) => setGuests(e.target.value)}
                value={guests}
              ></input>
            </label>

            <label>
              Occasion
              <select
                required
                onChange={(e) => setOccasion(e.target.value)}
                value={occasion}
              >
                <option>Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
              </select>
            </label>
          </section>
        </form>
        <div className="book-img">
          <img src={bkimg1} alt="inside the restaurant" />
          <img src={bkimg2} alt="chef preparing dish" />
          <img src={bkimg3} alt="prepared dish being served" />
        </div>
        <button className="btn btn-reserve" type="submit" form="booking-form">
          Reserve
        </button>
      </div>
    </div>
  );
};

BookingForm.PropTypes = {
  availableTimes: PropTypes.array.isRequired,
};

export default BookingForm;
