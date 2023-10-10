import React from "react";
import { useNavigate } from "react-router-dom";
import salad from "../assets/salad_s.jpg";
import bruschetta from "../assets/bruschetta_s.jpg";
import dessert from "../assets/lemon dessert.jpg";
import cycle from "../assets/cycle.jpg";
import { Link } from "react-router-dom";

const Highlights = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Greek salad",
      price: "$ 12.99",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: salad,
    },
    {
      title: "Bruschetta",
      price: "$ 5.99",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      image: bruschetta,
    },
    {
      title: "Lemon Dessert",
      price: "$ 5.00",
      desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: dessert,
    },
  ];

  return (
    <section className="highlights">
      <div className="hi-heading">
        <h2 className="hi-title">This Weeks Specials!</h2>
        <button
          className="btn hi-btn"
          onClick={() => {
            return navigate("/menu");
          }}
        >
          Online Menu
        </button>
      </div>
      <div className="hi-cards">
        {cards.map((card) => (
          <article className="hi-card" key={card.title}>
            <img src={card.image} alt={card.title} />
            <div className="hi-card-header">
              <h3 className="hi-card-title">{card.title}</h3>
              <p className="hi-card-price">{card.price}</p>
            </div>
            <p className="hi-card-desc">{card.desc}</p>
            <div className="hi-card-bottom">
              <Link to="/order" className="hi-card-order">Order a Delivery</Link>
              <img src={cycle} alt="bicycle delivery icon" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
