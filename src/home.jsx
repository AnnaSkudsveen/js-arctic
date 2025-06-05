import React, { useState } from "react";

import baatkos from "../images/Båtkos.jpeg";
import flaggBaat from "../images/flagg-båt.jpeg";
import gerdPaaBaat from "../images/GerdPåBåt.jpeg";
import JanStalsberg from "../images/JanStalsberg.jpeg";
import JanStalsberg2 from "../images/JanStalsberg2.jpeg";
import jsArcticSailing from "../images/js-arctic-sailing-logo.png";
import solnedgangPaaBaat from "../images/SolnedgangPåBåt.jpeg";
import Baat from "../images/ac829dde-4a6b-46da-a757-7d606e39c7e7.jpeg";
import video from "../images/235b7704-0543-4fa3-bdda-760510b5ae20.mp4";

function Homepage() {
  const [language, setLanguage] = useState("no");

  const toggleLanguage = () => {
    setLanguage(language === "NO" ? "EN" : "NO");
  };

  return (
    <>
      <header className="bg-[#115488] p-10 flex flex-col items-center justify-center gap-14 w-full mx-0">
        <div className="w-full flex justify-end">
          <button
            onClick={toggleLanguage}
            className="bg-[#115488] text-white py-2 px-4 rounded-lg border border-white"
          >
            {language === "NO" ? "English" : "Norwegian"}
          </button>
        </div>
        <img
          src={jsArcticSailing}
          alt=""
          className="w-[300px] sm:w-[400] md:w-[450px]"
        />
        <h1 className=" text-white font-extrabold text-3xl tracking-wide text-center">
          {language === "NO"
            ? "Velkommen til JS Arctic Sailing"
            : "Welcome to JS Arctic Sailing"}
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center mt-10 gap-10">
        <h2 className=" text-[#115488] text-3xl font-extrabold">
          {language === "NO" ? "Hva vi tilbyr" : "What we offer"}
        </h2>

        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-10 lg:mx-20 w-full">
          <div className="flex flex-col items-center justify-start gap-8 w-full max-w-[450px] text-center">
            <img
              src={flaggBaat}
              className="h-[320px] md:h-[450px] w-[320px] md:w-[450px] lg:w-[320px] lg:h-[320px] object-cover rounded-full"
              alt=""
            />

            <h3 className="text-2xl font-bold]">
              {language === "NO" ? "Kurs vi tilbyr" : "Courses we offer"}
            </h3>

            <div className="flex justify-center">
              <ul className="list-disc pl-5 text-gray-700 flex flex-col gap-1 text-start">
                <li>
                  {language === "NO"
                    ? "ICC - Internasjonalt båtsertifikat"
                    : "ICC - International Boat Certificate"}
                </li>
                <li>
                  {language === "NO"
                    ? "Kjøp og salg av båt"
                    : "Boat purchase and sale"}
                </li>
                <li>
                  {language === "NO"
                    ? "Transport av båt sjøveien (Maks lengde 24m/75 fot)"
                    : "Boat transport by sea (Max length 24m/75 feet)"}
                </li>
                <li>
                  {language === "NO" ? "Crew tjenester" : "Crew services"}
                </li>
                <li>
                  {language === "NO"
                    ? "Verdivurdering av båt"
                    : "Boat valuation"}
                </li>
                <li>
                  {language === "NO"
                    ? "Krankurs (Elektrisk søylekran for båtopptak) I samarbeid med Safe Opplæring"
                    : "Crane course (Electric pillar crane for boat lifting) In collaboration with Safe Opplæring"}
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              {language === "NO"
                ? "Vi har samarbeid med Maritim Facilitator Norway AS"
                : "We collaborate with Maritime Facilitator Norway AS"}
            </p>
          </div>

          <div className="flex flex-col items-center justify-start gap-8 w-full max-w-[450px] text-center">
            <img
              src={JanStalsberg}
              className="h-[320px] md:h-[450px] w-[320px] md:w-[450px] lg:w-[320px] lg:h-[320px] object-cover rounded-full"
              alt=""
            />

            <h2 className="text-2xl font-bold]">Jan Stalsberg</h2>

            <div className="text-gray-700 flex flex-col items-center justify-center gap-5 text-start">
              <p>
                {language === "NO"
                  ? "Jeg er født i 1961 og har tilbrakt 40 år som pilot, en karriere som har gitt meg stor kunnskap om navigasjon, presisjon og tekniske systemer. Jeg har alltid hatt en sterk interesse for det maritime. Gjennom årene har jeg eid flere seil- og motorbåter, og har lang erfaring med kjøp, restaurering og salg av båter."
                  : "I was born in 1961 and have spent 40 years as a pilot, a career that has given me extensive knowledge of navigation, precision, and technical systems. I have always had a strong interest in maritime matters. Over the years, I have owned several sailboats and motorboats, and have extensive experience with buying, restoring, and selling boats."}
              </p>

              <p>
                {language === "NO"
                  ? "Som både flyinstruktør og maritim instruktør innen navigasjon, meteorologi og motorlære har jeg bred kompetanse på tvers av luftfart og sjøfart. I tillegg har jeg solid erfaring med verdivurdering og tilstandsrapporter av båter, basert på både teknisk innsikt og praktisk erfaring."
                  : "As both a flight instructor and maritime instructor in navigation, meteorology, and engine theory, I have broad expertise across both aviation and maritime fields. Additionally, I have solid experience with boat valuations and condition reports, based on both technical insight and practical experience."}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-8 w-full max-w-[450px] text-center">
            <img
              src={Baat}
              className="h-[320px] md:h-[450px] w-[320px] md:w-[450px] lg:w-[320px] lg:h-[320px] object-cover rounded-full"
              alt=""
            />
            <h2 className="text-2xl font-bold] text-center">
              {" "}
              {language === "NO" ? "Andre tjenester" : "Other services"}
            </h2>

            <div className="w-5/6 md:w-[450px]">
              <ul className="list-disc pl-5 text-gray-700 flex flex-col gap-1 text-start">
                <li> {language === "NO" ? "Navigasjon" : "Navigation"}</li>
                <li>{language === "NO" ? "Meteorologi" : "Meteorology"}</li>
                <li>{language === "NO" ? "Nattsailas" : "Night Sailing"}</li>
                <li>
                  {language === "NO"
                    ? "Maritime lover og regler"
                    : "Maritime laws and regulations"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-[#115488] px-10 w-full flex justify-center video-section">
          <video
            width="320"
            src={video}
            type="video/mp4"
            autoPlay
            muted
          ></video>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8169.689705731973!2d10.44117450714112!3d59.208953606733694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646ba3ea72b26b9%3A0x478b706c8be0d116!2sKnarbergveien%2015C%2C%203133%20Duken!5e0!3m2!1sno!2sno!4v1743713491087!5m2!1sno!2sno"
          height="400"
          className="w-full lg:w-[1024px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div>
          <h2 className=" text-[#115488] text-3xl font-extrabold text-center">
            {language === "NO" ? "Kontakt oss" : "Contact Us"}
          </h2>

          <div className="flex flex-col gap-10 mt-10">
            <h3 className="text-2xl font-bold] ">JS Arctic Sailing</h3>

            <p>
              {" "}
              {language === "NO"
                ? "Vi i Jan Stalsberg Arctic Sailing selger tjenester og kurs."
                : "We at Jan Stalsberg Arctic Sailing offer services and courses."}
            </p>

            <p>
              {language === "NO"
                ? "For prisanslag - ta kontakt på telefon eller via mail."
                : "For price quotes - contact us by phone or email."}
            </p>

            <div className="flex flex-col justify-center gap-4 text-gray-700">
              <p>Knarbergveien 1a, 3133 Duken, Norway</p>
              <p>
                {language === "NO"
                  ? "Epost: jan.stalsberg@gmail.com"
                  : "Email: jan.stalsberg@gmail.com"}
              </p>
              <p>
                {language === "NO"
                  ? "Telefon: +47 909 11 251"
                  : "Phone: +47 909 11 251"}
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-center text-sm">
          @2025 JS Arctic Sailing. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Homepage;
