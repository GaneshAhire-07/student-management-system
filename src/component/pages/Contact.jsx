import React from "react";

function Contact() {
  return (
    <div>
      {/* Header */}
      <div className="bg-dark text-light text-center py-4">
        <h2 className="mb-0">📞 Contact Us</h2>
        <p className="mb-0">We'd love to hear from you!</p>
      </div>

      {/* Contact Section */}
      <section className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-md-5">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h4 className="mb-4 text-primary">Get in Touch</h4>

                  <p>
                    <strong>🏢 Address:</strong>
                    <br /> 2nd Floor, IT Park, Pune, India
                  </p>
                  <p>
                    <strong>📧 Email:</strong>
                    <br /> support@yourinstitute.com
                  </p>
                  <p>
                    <strong>📱 Phone:</strong>
                    <br /> +91 98765 43210
                  </p>
                  <p>
                    <strong>🕒 Working Hours:</strong>
                    <br /> Mon – Sat : 9:00 AM – 6:00 PM
                  </p>
    
                  <hr />

                  <p className="text-muted">
                    Our team will respond to your query within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h4 className="mb-4 text-primary">Send a Message</h4>

                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <button className="btn btn-primary px-4 py-2">
                      Send Message 🚀
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
