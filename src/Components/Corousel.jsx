import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import Product from "./Products";

export default function Corousel() {
  const [current, setCurrent] = useState(0);
  const length = CarouselData.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      <div className="carousel">
        {CarouselData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} key={slide.id} alt={slide.text} />
              )}
              {index === current && <h1 className="text">{slide.text}</h1>}
            </div>
          );
        })}
        <span>
          <button id="button1" className="left-button" onClick={prev}>
            &lt;
          </button>
          <button id="button2" className="right-button" onClick={next}>
            &gt;
          </button>
        </span>
      </div>
      <Product />
    </>
  );
}
