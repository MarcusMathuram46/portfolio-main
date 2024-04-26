import React, { useEffect, useState } from 'react'
import "./Intro.css";
function Intro() {
  const [titleText, setTitleText] = useState("MARCUS");
  const [fsdText, setFsdText] = useState("FULL STACK DEVELOPER (MERN)");

  const animateTitle = (text, setText) => {
    setText('');
    text.split('').forEach((letter, index) => {
      setTimeout(() => {
        setText(prevText => prevText + letter);
      }, index * 500);
    });
  };

  useEffect(() => {
    animateTitle("MARCUS", setTitleText);
    // animateTitle('FULL STACK DEVELOPER (MERN)', setFsdText);

    const intervalId = setInterval(() => {
      animateTitle("MARCUS", setTitleText);
      // animateTitle('FULL STACK DEVELOPER (MERN)', setFsdText);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const handleResumeClick = (event) => {
    const resumeUrl = 'https://drive.google.com/file/d/1awZo4H7LHvnMw7TG-h47xeuzoLabwOmn/view?usp=drivesdk ';

    window.open(resumeUrl, '_blank');
  }

  return (
    <section id="intro">
      <div id="left-content">
        <h1 id="title">Hello, I'm {titleText}</h1>
        <br />
        <h1 id="fsd">{fsdText}</h1>
        <p id="para">
          I'm very much interested in creating websites and apps using
          technology stack called MERN (MongoDB, Express.js, React, Node.js)
        </p>
        <div style={{display:'flex'}}>
          <button className="resume glow-on-hover" onClick={handleResumeClick}>
            View / Download Resume
          </button>
        </div>
      </div>
      {/* <div id='right-content'>
          <div id='end'>
            <img src='' alt='' className='rounded-image' />
          </div>
        </div> */}
    </section>
  );
}

export default Intro
