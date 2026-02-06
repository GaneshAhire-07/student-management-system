import React from "react";
import reactLogo from "../../assets/react.svg"; // optional if you want to use local asset

function Course() {
  const courses = [
    {
      title: "Java",
      img: "cards/c1.jpg",
      desc: "Learn core and advanced Java concepts with real-world projects.",
    },
    {
      title: "Practical Digital Marketing & SEO",
      img: "cards/c2.jpg",
      desc: "Master SEO, social media marketing, and online growth strategies.",
    },
    {
      title: "Python",
      img: "cards/c3.jpg",
      desc: "Become a Python developer with hands-on coding and projects.",
    },
    {
      title: "SpringBoot & React JS Training",
      img: "cards/c4.jpg",
      desc: "Full-stack development using SpringBoot backend and React frontend.",
    },
    {
      title: "SAP",
      img: "cards/c5.jpg",
      desc: "Professional SAP training for enterprise-level career growth.",
    },
    {
      title: "Data Science",
      img: "cards/c6.jpg",
      desc: "Learn data analysis, machine learning, and AI fundamentals.",
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="bg-dark text-light text-center py-3 mb-4">
        <h3 className="mb-0">Our Popular Courses</h3>
      </div>

      {/* Course Cards */}
      <div className="container">
        <div className="row g-4">
          {courses.map((course, index) => (
            <div key={index} className="col-sm-6 col-md-4 d-flex justify-content-center">
              <div className="card shadow-sm h-100" style={{ width: "18rem" }}>
                <img
                  src={course.img}
                  className="card-img-top"
                  alt={course.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.desc}</p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Bottom Spacing */}
      <div className="my-5"></div>
    </div>
  );
}

export default Course;
