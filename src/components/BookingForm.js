/* eslint-disable react/prop-types */
import React, { useState } from "react";
import bkimg1 from "../assets/booking1.jpg";
import bkimg2 from "../assets/booking2.jpg";
import bkimg3 from "../assets/booking3.jpg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const yesterday = new Date(Date.now() - 86400000);

const BookingForm = ({ availableTimes, dispatch, submit }) => {
  // yup Schema
  const book1Schema = yup.object().shape({
    seating: yup.string().required("Please select a seating option"),
    date: yup
      .date()
      .min(yesterday, "Date cannot be in the past")
      .required("Please select a date"),
    time: yup
      .string()
      .required("Please select a time")
      .notOneOf(["Choose Time"], "Please select a time"),
    guests: yup
      .number()
      .integer()
      .positive("Please select a number of guests")
      .min(1, "You should input at lease 1 guest")
      .max(8, "We can accomodate a maximum of 8 guests per table"),
    occasion: yup
      .string()
      .required("Please select an occasion")
      .notOneOf(["Occasion"], "Please select an occasion"),
  });

  const book2Schema = yup.object().shape({
    firstname: yup
      .string()
      .required("Please enter your first name")
      .min(2, "Name should be at least 2 characters")
      .max(30, "Name should be less than 30 characters"),
    lastname: yup
      .string()
      .required("Please enter your last name")
      .min(2, "Name should be at least 2 characters")
      .max(30, "Name should be less than 30 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Please enter your email address"),
    requests: yup
      .string()
      .max(200, "Requests should be less than 200 characters"),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  });

  const bookSchema = book1Schema.concat(book2Schema);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
    mode: "onTouched",
    defaultValues: {
      seating: "Indoor",
      date: new Date(),
      time: "",
      guests: 2,
      occasion: "",
      firstname: "",
      lastname: "",
      email: "",
      requests: "",
      terms: false,
    },
  });

  const [step, setStep] = useState(1);

  const bookSubmit = (data) => {
    submit(data);
    reset();
  };

  return (
    <div className="booking-wrapper">
      <div className="booking">
        <h1 className="book-title">Reservation</h1>
        <form
          className="book-form"
          onSubmit={handleSubmit(bookSubmit)}
          id="booking-form"
          role="form"
        >
          {step === 1 && (
            <section className="reserve">
              <label>
                Indoor Seating{" "}
                <input {...register("seating")} type="radio" value="Indoor" />
              </label>
              <label>
                Outdoor Seating{" "}
                <input {...register("seating")} type="radio" value="Outdoor" />
              </label>
              {errors.seating && (
                <p className="error">{errors.seating.message}</p>
              )}

              <label>
                Choose date{" "}
                <input
                  {...register("date")}
                  type="date"
                  aria-required="true"
                  onChange={(e) => {
                    dispatch({ date: e.target.value });
                  }}
                ></input>
                {errors.date && <p className="error">{errors.date.message}</p>}
              </label>

              <label>
                Choose time
                <select {...register("time")} aria-required="true">
                  <option>Choose Time</option>
                  {availableTimes.map((avtime) => (
                    <option key={avtime} value={avtime}>
                      {avtime}
                    </option>
                  ))}
                </select>
                {errors.time && <p className="error">{errors.time.message}</p>}
              </label>

              <label>
                Number of guests
                <input
                  {...register("guests")}
                  type="number"
                  aria-required="true"
                ></input>
                {errors.guests && (
                  <p className="error">{errors.guests.message}</p>
                )}
              </label>

              <label>
                Occasion
                <select {...register("occasion")} aria-required="true">
                  <option>Occasion</option>
                  <option value="No occasion">No Special Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
                {errors.occasion && (
                  <p className="error">{errors.occasion.message}</p>
                )}
              </label>
            </section>
          )}
          {step === 2 && (
            <section className="confirm">
              <button className="back-btn" onClick={() => setStep(1)}>
                <i className="fa-solid fa-backward-step fa-xl"></i>
                Back to Reservation Details
              </button>

              <p className="confirm-text">
                Please provide your information to confirm your reservation. Go
                back to change reservation details.
              </p>

              <label>
                First Name
                <input
                  {...register("firstname")}
                  type="text"
                  aria-required="true"
                  autoComplete="given-name"
                ></input>
                {errors.firstname && (
                  <p className="error">{errors.firstname.message}</p>
                )}
              </label>

              <label>
                Last Name
                <input
                  {...register("lastname")}
                  type="text"
                  aria-required="true"
                  autoComplete="family-name"
                ></input>
                {errors.lastname && (
                  <p className="error">{errors.lastname.message}</p>
                )}
              </label>

              <div className="res-details">
                <h3>Reservation Details</h3>
                <p>
                  <b>Date:</b> <br />
                  {getValues("date")}
                </p>
                <p>
                  <b>Time:</b> <br />
                  {getValues("time")}{" "}
                </p>
                <p>
                  <b>Guests:</b> <br />
                  {getValues("guests")}
                </p>
                <p>
                  <b>Occasion:</b> <br />
                  {getValues("occasion")}
                </p>
                <p>
                  <b>Seating:</b> {getValues("seating")}
                </p>
              </div>

              <label>
                Email
                <input
                  {...register("email")}
                  type="email"
                  aria-required="true"
                  autoComplete="email"
                ></input>
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </label>

              <label className="requests">
                Special Requests
                <textarea
                  rows={5}
                  {...register("requests")}
                  type="text"
                  placeholder="Please enter any special requests here"
                ></textarea>
                {errors.requests && (
                  <p className="error">{errors.requests.message}</p>
                )}
              </label>

              <label className="terms">
                <input
                  {...register("terms")}
                  type="checkbox"
                  aria-required="true"
                ></input>
                I agree to the terms and conditions
                {errors.terms && (
                  <p className="error">{errors.terms.message}</p>
                )}
              </label>
            </section>
          )}
        </form>
        <div className="book-img">
          <img src={bkimg1} alt="inside the restaurant" />
          <img src={bkimg2} alt="chef preparing dish" />
          <img src={bkimg3} alt="prepared dish being served" />
        </div>

        {step === 1 && (
          <button
            className="btn btn-reserve"
            onClick={() => {
              const valid = book1Schema.isValidSync({
                seating: getValues("seating"),
                date: getValues("date"),
                time: getValues("time"),
                guests: getValues("guests"),
                occasion: getValues("occasion"),
              });
              if (valid) setStep(2);
            }}
          >
            Reserve
          </button>
        )}
        {step === 2 && (
          <button
            className="btn btn-reserve"
            type="submit"
            form="booking-form"
            disabled={isSubmitting || !isValid}
          >
            Confirm Reservation
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
