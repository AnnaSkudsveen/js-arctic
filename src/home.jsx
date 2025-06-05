import React from "react";

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
  return (
    <>
      <header className="bg-[#115488] p-10 flex flex-col items-center justify-center gap-14">
        <img
          src={jsArcticSailing}
          alt=""
          className="w-[300px] sm:w-[400] md:w-[450px]"
        />
        <h1 className=" text-white font-extrabold text-3xl tracking-wide text-center">
          Velkommen til JS Arctic Sailing
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center mt-10 gap-10">
        <h2 className=" text-[#115488] text-3xl font-extrabold">
          Hva vi tilbyr
        </h2>

        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-10 lg:mx-20 w-full">
          <div className="flex flex-col items-center justify-start gap-8 w-full max-w-[450px] text-center">
            <img
              src={flaggBaat}
              className="h-[320px] md:h-[450px] w-[320px] md:w-[450px] lg:w-[320px] lg:h-[320px] object-cover rounded-full"
              alt=""
            />

            <h3 className="text-2xl font-bold]">Kurs vi tilbyr</h3>

            <div className="flex justify-center">
              <ul className="list-disc pl-5 text-gray-700 flex flex-col gap-1 text-start">
                <li>ICC - Internasjonalt båtsertifikat</li>
                <li>Kjøp og salg av båt</li>
                <li>Transport av båt sjøveien (Maks lengde 24m/75 fot)</li>
                <li>Crew tjenester</li>
                <li>Verdivurdering av båt</li>
                <li>
                  Krankurs (Elektrisk søylekran for båtopptak) I samarbeid med
                  Safe Opplæring
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              Vi har samarbeid med Maritim Facilitator Norway AS
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
                Jeg er født i 1961 og har tilbrakt 40 år som pilot, en karriere
                som har gitt meg stor kunnskap om navigasjon, presisjon og
                tekniske systemer. Jeg har alltid hatt en sterk interesse for
                det maritime. Gjennom årene har jeg eid flere seil- og
                motorbåter, og har lang erfaring med kjøp, restaurering og salg
                av båter.
              </p>

              <p>
                Som både flyinstruktør og maritim instruktør innen navigasjon,
                meteorologi og motorlære har jeg bred kompetanse på tvers av
                luftfart og sjøfart. I tillegg har jeg solid erfaring med
                verdivurdering og tilstandsrapporter av båter, basert på både
                teknisk innsikt og praktisk erfaring.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-8 w-full max-w-[450px] text-center">
            <img
              src={Baat}
              className="h-[320px] md:h-[450px] w-[320px] md:w-[450px] lg:w-[320px] lg:h-[320px] object-cover rounded-full"
              alt=""
            />
            <h2 className="text-2xl font-bold] text-center">Andre tjenester</h2>

            <div className="w-5/6 md:w-[450px]">
              <ul className="list-disc pl-5 text-gray-700 flex flex-col gap-1 text-start">
                <li>Navigasjon</li>
                <li>Meteorologi</li>
                <li>Nattsailas</li>
                <li>Maritime lover og regler</li>
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
            Kontakt oss
          </h2>

          <div className="flex flex-col gap-10 mt-10">
            <h3 className="text-2xl font-bold] ">JS Arctic Sailing</h3>

            <p>Vi i Jan Stalsberg Arctic Sailing selger tjenester og kurs.</p>

            <p>For prisanslag - ta kontakt på telefon eller via mail.</p>

            <div className="flex flex-col justify-center gap-4 text-gray-700">
              <p>Knarbergveien 1a, 3133 Duken, Norway</p>
              <p>Epost: jan.stalsberg@gmail.com</p>
              <p>Telefon: +47 909 11 251</p>
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
