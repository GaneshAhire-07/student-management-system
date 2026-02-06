import React from "react";

function StudentData({ student, logout }) {
  const user = student[0]; // logged-in student

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">🎓 Student Dashboard</h3>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>First Name</th>
                <td>{user.fname}</td>
                <th>Last Name</th>
                <td>{user.lname}</td>
              </tr>

              <tr>
                <th>Mother's Name</th>
                <td>{user.mname}</td>
                <th>Father's Name</th>
                <td>{user.ftname}</td>
              </tr>

              <tr>
                <th>Gender</th>
                <td>{user.gender}</td>
                <th>Date of Birth</th>
                <td>{user.dob}</td>
              </tr>

              <tr>
                <th>Address</th>
                <td colSpan="3">{user.address}</td>
              </tr>

              <tr>
                <th>State</th>
                <td>{user.state}</td>
                <th>City</th>
                <td>{user.city}</td>
              </tr>

              <tr>
                <th>Pincode</th>
                <td>{user.pincode}</td>
                <th>Course</th>
                <td>{user.course}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{user.email}</td>
                <th>Password</th>
                <td>{user.password}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button onClick={logout} className="btn btn-danger w-100 mt-3">
          Logout
        </button>
      </div>
    </div>
  );
}

export default StudentData;
