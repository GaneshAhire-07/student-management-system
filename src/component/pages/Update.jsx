import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const { register, handleSubmit, setValue } = useForm();
  const { stuId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 📌 Fetch existing student data
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/student/${stuId}`);
      const data = res.data;

      Object.keys(data).forEach((key) => {
        setValue(key, data[key]);
      });

      setError("");
    } catch (err) {
      setError("Failed to load student data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [stuId, setValue]);

  // 📌 Update data
  const updateData = async (data) => {
    try {
      await axios.put(`http://localhost:5000/student/${stuId}`, data);
      alert("Data updated successfully!");
      navigate("/show");
    } catch (err) {
      alert("Update failed. Try again.");
    }
  };

  // 🔄 Loading UI
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
        <div className="text-center">
          <div className="spinner-border text-warning mb-3" role="status"></div>
          <h4>Loading student details...</h4>
        </div>
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
        <h4 className="text-danger">{error}</h4>
      </div>
    );
  }

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4 shadow">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample"
                    className="img-fluid h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase text-center">
                      Update Student Form
                    </h3>

                    <form onSubmit={handleSubmit(updateData)}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input
                            className="form-control form-control-lg"
                            {...register("fname")}
                          />
                          <label className="form-label">First name</label>
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            className="form-control form-control-lg"
                            {...register("lname")}
                          />
                          <label className="form-label">Last name</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input
                            className="form-control form-control-lg"
                            {...register("mname")}
                          />
                          <label className="form-label">Mother's name</label>
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            className="form-control form-control-lg"
                            {...register("ftname")}
                          />
                          <label className="form-label">Father's name</label>
                        </div>
                      </div>

                      <div className="mb-4">
                        <input
                          className="form-control form-control-lg"
                          {...register("address")}
                        />
                        <label className="form-label">Address</label>
                      </div>

                      {/* Gender */}
                      <div className="mb-4">
                        <h6 className="mb-2">Gender:</h6>
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

                      {/* State & City */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <select className="w-100 p-2" {...register("state")}>
                            <option value="">State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="MP">MP</option>
                            <option value="UP">UP</option>
                          </select>
                        </div>

                        <div className="col-md-6 mb-4">
                          <select className="w-100 p-2" {...register("city")}>
                            <option value="">City</option>
                            <option value="Pune">Pune</option>
                            <option value="Indore">Indore</option>
                            <option value="Patna">Patna</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-4">
                        <input
                          className="form-control form-control-lg"
                          {...register("dob")}
                        />
                        <label className="form-label">DOB</label>
                      </div>

                      <div className="mb-4">
                        <input
                          className="form-control form-control-lg"
                          {...register("pincode")}
                        />
                        <label className="form-label">Pincode</label>
                      </div>

                      <div className="mb-4">
                        <input
                          className="form-control form-control-lg"
                          {...register("course")}
                        />
                        <label className="form-label">Course</label>
                      </div>

                      <div className="mb-4">
                        <input
                          className="form-control form-control-lg"
                          {...register("email")}
                        />
                        <label className="form-label">Email</label>
                      </div>

                      <div className="text-end">
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg"
                        >
                          Update
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
  );
}

export default Update;
