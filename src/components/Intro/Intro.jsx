import React, { useState } from 'react'
import "./Intro.css";
function Intro() {
  const [titleText, setTitleText] = useState("MARCUS");
  const [fsdText, setFsdText] = useState("FULL STACK DEVELOPER (MERN)");

  // const animateTitle = (text, setText) => {
  //   setText('');
  //   text.split('').forEach((letter, index) => {
  //     setTimeout(() => {
  //       setText(prevText => prevText + letter);
  //     }, index * 500);
  //   })
  // }

  return (
      <section>
        <div>
        <h1>Hi,I'm Marcus Mathuram</h1>
        </div>
        <div>
          <h1>Full Stack Developer(MERN)</h1>
        </div>
        <div>
          <h2>
          I'm very much Interested in creating websites and apps using MERN Stack (MongoDB, Express.js, React, Node.js)</h2>
        </div>
      </section>
  )
}

export default Intro
