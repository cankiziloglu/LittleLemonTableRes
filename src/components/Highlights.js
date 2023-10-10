import React from "react";
import { useNavigate } from "react-router-dom";

const Highlights = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Greek salad",
      price: "$ 12.99",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "../assets/salad_s.jpg",
    },
    {
      title: "Bruschetta",
      price: "$ 5.99",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      image: "../assets/bruschetta_s.jpg",
    },
    {
      title: "Lemon Dessert",
      price: "$ 5.00",
      desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "../assets/lemon dessert.jpg",
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
            <article key={card.title}>
              <img src={card.image} alt={card.title} />
              <div className="hi-card-header">
                <h3 className="hi-card-title">{card.title}</h3>
                <p className="hi-card-price">{card.price}</p>
              </div>
              <p className="hi-card-desc">{card.desc}</p>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Highlights;
