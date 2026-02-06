import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// align --> shift + alt + f
function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Add data
  const addData = (data) => {
    axios.post("http://localhost:5000/student", data);
    reset();
    alert("Data Added!!!");
  };

  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Student registration form
                      </h3>

                      <form onSubmit={handleSubmit(addData)}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="First name"
                              {...register("fname", {
                                required: "First name required",
                              })}
                            />
                            {errors.fname && (
                              <small className="text-danger">
                                {errors.fname.message}
                              </small>
                            )}
                          </div>

                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Last name"
                              {...register("lname")}
                            />
                          </div>
                        </div>

                        <input
                          type="text"
                          className="form-control form-control-lg mb-4"
                          placeholder="Mother's name"
                          {...register("mname")}
                        />

                        <input
                          type="text"
                          className="form-control form-control-lg mb-4"
                          placeholder="Father's name"
                          {...register("ftname")}
                        />

                        <input
                          type="text"
                          className="form-control form-control-lg mb-4"
                          placeholder="Address"
                          {...register("address")}
                        />

                        <div className="mb-4">
                          <strong className="me-3">Gender:</strong>
                          <input
                            type="radio"
                            value="Female"
                            {...register("gender")}
                          />{" "}
                          Female
                          <input
                            type="radio"
                            value="Male"
                            className="ms-3"
                            {...register("gender")}
                          />{" "}
                          Male
                          <input
                            type="radio"
                            value="Other"
                            className="ms-3"
                            {...register("gender")}
                          />{" "}
                          Other
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select
                              className="w-100 p-2"
                              {...register("state")}
                            >
                              <option value="">State</option>
                              <option>Maharashtra</option>
                              <option>MP</option>
                              <option>UP</option>
                            </select>
                          </div>

                          <div className="col-md-6 mb-4">
                            <select className="w-100 p-2" {...register("city")}>
                              <option value="">City</option>
                              <option>Pune</option>
                              <option>Indore</option>
                              <option>Patna</option>
                            </select>
                          </div>
                        </div>

                        <input
                          type="date"
                          className="form-control form-control-lg mb-4"
                          {...register("dob")}
                        />

                        <input
                          type="text"
                          className="form-control form-control-lg mb-4"
                          placeholder="Pincode"
                          {...register("pincode")}
                        />

                        <input
                          type="text"
                          className="form-control form-control-lg mb-4"
                          placeholder="Course"
                          {...register("course")}
                        />

                        <input
                          type="email"
                          className="form-control form-control-lg mb-4"
                          placeholder="Email ID"
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                        {errors.email && (
                          <small className="text-danger">
                            {errors.email.message}
                          </small>
                        )}

                        {/* 🔐 PASSWORD FIELD */}
                        <input
                          type="password"
                          className="form-control form-control-lg mb-1"
                          placeholder="Password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Minimum 6 characters",
                            },
                          })}
                        />
                        {errors.password && (
                          <small className="text-danger">
                            {errors.password.message}
                          </small>
                        )}

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="reset"
                            onClick={() => reset()}
                            className="btn btn-light btn-lg"
                          >
                            Reset all
                          </button>

                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit form
                          </button>
                        </div>
                      </form>
                    </div>
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

export default Register;
