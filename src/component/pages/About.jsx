import React from "react";

function About() {
  return (
    <div>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center text-warning bg-black">
                About Us
              </h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                We are dedicated to empowering individuals with expert-led
                training, real-world experience, and career development
                opportunities for lasting success.
              </p>
              <hr className="w-50 mx-auto mb-3 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gy-3 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded border border-dark"
                loading="lazy"
                src="about.webp"
                alt="About Us"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-11">
                  <div className="about-wrapper">
                    <p className="lead mb-4 mb-md-5">
                      We are a team of industry professionals passionate about
                      education and career development. With years of experience
                      in IT training, we provide expert-led training programs
                      that blend theory with practical application. Our courses
                      are designed to meet the needs of learners at every stage,
                      from beginners to seasoned professionals.
                    </p>
                    <div className="row gy-4 mb-4 mb-md-5">
                      <div className="col-12 col-md-6">
                        <div className="card border border-dark">
                          <div className="card-body p-4">
                            <h3 className="display-5 fw-bold text-primary text-center mb-2">
                              370+
                            </h3>
                            <p className="fw-bold text-center m-0">
                              Qualified Experts
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border border-dark">
                          <div className="card-body p-4">
                            <h3 className="display-5 fw-bold text-primary text-center mb-2">
                              18k+
                            </h3>
                            <p className="fw-bold text-center m-0">
                              Satisfied Clients
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#!" className="btn btn-primary bsb-btn-2xl">
                      Explore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
