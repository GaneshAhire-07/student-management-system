import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (mail === "admin" && pwd === "admin@123") {
      alert("Admin Login Successful!");
      navigate("/show"); // go to student records page
    } else {
      alert("Invalid Admin Credentials");
    }

    setMail("");
    setPwd("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f2f5f9" }}
    >
      <div style={{ width: "420px" }}>
        <form>
          <h3 className="text-center mb-4">🛠 Admin Login</h3>

          {/* Email */}
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Admin Username"
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
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
