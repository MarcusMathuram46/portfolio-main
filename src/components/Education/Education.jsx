import React from 'react'
import "./Education.css"

const education = [
  {
    "school": "Jeppiaar Engineering College",
    "level": "BE (EIE)",
    "img": "",
    "title": "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
    "percentage": 79,
    "description": "Completed Bachelor of Engineering in Electronics and Instrumentation Engineering (EIE) with a remarkable 79% from Jeppiaar Engineering College(Chennai)."
  },
  {
    "school": "Mahatma Matriculation Higher Secondary School",
    "level": "HSC (XII)",
    "img": "",
    "title":"HIGHER SECONDARY",
    "percentage": 70,
    "description": "Completed HSC with a remarkable 70% from Mahatma Matriculation Higher Secondary School(Madurai)."
  },
  {
    "school": "Mahatma Matriculation Higher Secondary School",
    "level": "SSLC (X)",
    "img": "",
    "title":"SECONDARY SCHOOL",
    "percentage": 89,
    "description": "Completed SSLX with a remarkable 89% from Mahatma Matriculation Higher Secondary School(Madurai)."
  }
]
function Education() {
  return (
    <section id='education' className='edu-container'>
      <h2 id='contitle'>STUDIES</h2>
      <div className='edu-card-container'>
        {education.map((data, i) => (
          <div className='edu-card' key={i}>
            <div className='edu-card-image'>
              <img src={data.img} alt={data.title} />
              <h1 className='educ-title'>{data.level}</h1>
            </div>
            <div className='edu-card-content'>
              <p className='edu-card-title'>{data.title}</p>
              <p className='edu-card-description'>{data.description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Education
