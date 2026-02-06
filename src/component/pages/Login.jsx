import axios from "axios";
import React, { useState } from "react";
import StudentData from "./StudentData";

function Login() {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loggedIn, setLoggedIn] = useState([]);

  const handleLogin = async () => {
    try {
      const res = await axios.get("http://localhost:3000/student");
      const students = res.data;

      const studentData = students.filter(
        (std) => std.email === mail && std.password === pwd,
      );

      if (studentData.length > 0) {
        alert("Login Successful!!!");
        setLoggedIn(studentData);
      } else {
        alert("Invalid Login, Please try again!");
      }

      setMail("");
      setPwd("");
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  const handleLogout = () => {
    setLoggedIn([]);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f2f5f9" }}
    >
      {loggedIn.length > 0 ? (
        <StudentData student={loggedIn} logout={handleLogout} />
      ) : (
        <div style={{ width: "420px" }}>
          <form>
            <h3 className="text-center mb-4">🎓 Student Login</h3>

            {/* Email */}
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="form-outline mb-4">
              <input
                type="password"
                className="form-control"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password"
              />
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-dark w-100 mb-3"
            >
              Login
            </button>

            <div className="text-center">
              <p>
                Not registered? <a href="/register">Create account</a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
