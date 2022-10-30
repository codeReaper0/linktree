import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main className="max-w-6xl mx-auto py-16">
    <section className="flex flex-col items-center gap-6 mb-14">
      <img
        src="/avatar.jpg"
        id="profile__img"
        alt="Tella Boluwatife"
        className="w-[88px] h-[88px] rounded-full align- object-cover"
      ></img>
      <h1 className="font-bold text-xl">Tella Boluwatife</h1>
    </section>

    <section className="space-y-6">
      <a
        href="https://twitter.com/codeReaper01"
        type="button"
        id="twitter"
        target="_blank"
        className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
      >
        Twitter Link
      </a>

      <a
        href="#"
        type="button"
        id="slack"
        target="_blank"
        className="hidden text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
      >
        Slack username: CodeReaper0
      </a>

      <a
        href="https://training.zuri.team/"
        type="button"
        id="btn_zuri"
        target="_blank"
        className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
      >
        Zuri Team
      </a>

      <a
        href="http://books.zuri.team/"
        type="button"
        id="books"
        target="_blank"
        title="This is where you find books about design and coding"
        className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
      >
        Zuri Books
      </a>
    </section>
  </main>
);

reportWebVitals();
