import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Show() {
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const showData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/student");
      setStudent(response.data);
      setError("");
    } catch (error) {
      setError("Unable to fetch data. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const searchData = useMemo(() => {
    return student.filter((stu) => {
      const course = stu.course?.toLowerCase() || "";
      const city = stu.city?.toLowerCase() || "";
      const term = search.toLowerCase();
      return course.includes(term) || city.includes(term);
    });
  }, [student, search]);

  return (
    <div className="container py-4">
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">🎓 Student Records</h2>
          </div>

          {/* Search */}
          <div className="row mb-3">
            <div className="col-md-6 mx-auto">
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                placeholder="🔍 Search by course or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-3">Loading students...</p>
            </div>
          )}

          {/* Error */}
          {error && <p className="text-danger text-center">{error}</p>}

          {/* Table */}
          {!loading && !error && (
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>State</th>
                    <th>DOB</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Password</th> {/* NEW COLUMN */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchData.length > 0 ? (
                    searchData.map((stu) => (
                      <tr key={stu.id}>
                        <td>{stu.id}</td>
                        <td>
                          {stu.fname} {stu.lname}
                        </td>
                        <td>{stu.gender}</td>
                        <td>{stu.city}</td>
                        <td>{stu.state}</td>
                        <td>{stu.dob}</td>
                        <td>
                          <span className="badge bg-info text-dark px-3 py-2">
                            {stu.course}
                          </span>
                        </td>
                        <td>{stu.email}</td>
                        <td>
                          <span className="text-muted">{stu.password}</span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <NavLink to={`/update/${stu.id}`}>
                              <button className="btn btn-sm btn-outline-success">
                                ✏ Edit
                              </button>
                            </NavLink>
                            <NavLink to={`/delete/${stu.id}`}>
                              <button className="btn btn-sm btn-outline-danger">
                                🗑 Delete
                              </button>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="py-4 text-muted">
                        No students found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Show;
