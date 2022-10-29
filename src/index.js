import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main>
    <section>
      <img
        src="/avatar.jpg"
        id="profile__img"
        alt="Tella Boluwatife"
        className="w-[88px] h-[88px] rounded-full align- object-cover"
      ></img>
      <h1 className="font-bold text-xl">Tella Boluwatife</h1>
    </section>
  </main>
);

reportWebVitals();
