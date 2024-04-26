import React from 'react'
import "./Education.css"

const education = [
  {
    school: "Jeppiaar Engineering College",
    level: "BE (EIE)",
    img: "https://i.postimg.cc/hG9SqNRJ/clg.jpg",
    title: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
    percentage: 79,
    description:
      "Completed Bachelor of Engineering in Electronics and Instrumentation Engineering (EIE) with a remarkable 79% from Jeppiaar Engineering College(Chennai).",
  },
  {
    school: "Mahatma Matriculation Higher Secondary School",
    level: "HSC (XII)",
    img: "https://i.postimg.cc/QC0TXH5y/school.jpg",
    title: "HIGHER SECONDARY",
    percentage: 70,
    description:
      "Completed HSC with a remarkable 70% from Mahatma Matriculation Higher Secondary School(Madurai).",
  },
  {
    school: "Mahatma Matriculation Higher Secondary School",
    level: "SSLC (X)",
    img: "https://i.postimg.cc/25Q3k1N7/tenth.jpg",
    title: "SECONDARY SCHOOL",
    percentage: 89,
    description:
      "Completed SSLX with a remarkable 89% from Mahatma Matriculation Higher Secondary School(Madurai).",
  },
];
function Education() {
  return (
    <section id='education' className='edu-container'>
      <h2 id='conttitle'>STUDIES</h2>
      <div className='edu-card-container'>
        {education.map((data, i) => (
          <div className='edu-card' key={i}>
            <div className='edu-card__image'>
              <img src={data.img} alt={data.title} />
              <h1 className='educ-title'>{data.level}</h1>
            </div>
            <div className='edu-card__content'>
              <p className='edu-card__title'>{data.title}</p>
              <p className='edu-card__description'>{data.description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Education
