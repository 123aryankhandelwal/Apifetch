import React from "react";

export default function Home() {
  return (
    <div classname="hero">
      <div ClassName="card bg-dark text-white border-0">   
        <div ClassName="card-img-overlay">
        <img
          src="/Assets/background.jpeg"
          ClassName="card-img"
          alt="Background"
          height="550px"
        />
          <div className="container">
            <h5 ClassName="card-title display-3 fw-bolder nb-0">Card title</h5>
            <p ClassName="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
