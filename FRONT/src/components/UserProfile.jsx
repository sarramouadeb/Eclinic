import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/ListUsers.css";
import sigle1 from "../assets/sigle1.png";
import notification from "../assets/notification.png";
import logout from "../assets/logout.png";
import printer from "../assets/printer.png";
 // Replace with the actual path to the user photo

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on the ID (replace with actual fetch logic)
    const fetchedUser = {
      id: id,
      name: "John Doe", // Use dynamic data based on user ID
      email: "johndoe@gmail.com",
      gender: "Male",
      phone: "+216 98765432",
      role: "doctor", // "doctor" or "normal"
      specialization: "Cardiology", // If the user is a doctor
    };
    setUser(fetchedUser);
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="list-users-container d-flex">
      {/* Sidebar */}
      <div className="sidebar p-3 border-end">
        <div className="header-left mb-5">
          <h1 className="logo-text">Eclinic</h1>
        </div>
        <h5>Administrator</h5>
        <div className="radio-buttons mt-3">
          <label className="d-block">
            <input
              type="radio"
              name="userType"
              value="doctor"
              className="me-2"
            />
            Doctor
          </label>
          <label className="d-block mt-2">
            <input
              type="radio"
              name="userType"
              value="patient"
              className="me-2"
            />
            Patient
          </label>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        {/* Header */}
        <div className="header d-flex align-items-center justify-content-between p-3 bg-light border-bottom">
          <div className="logo">
            <img src={sigle1} alt="Eclinic Logo" className="logo-img" />
          </div>
          <div className="header-right d-flex align-items-center">
            <input
              type="text"
              className="form-control me-3"
              placeholder="Search..."
              style={{ marginTop: "25px" }}
            />
            <img
              src={notification}
              alt="Notifications"
              className="icon me-3"
              style={{ width: "20px", height: "20px" }}
            />
            <img
              src={logout}
              alt="Logout"
              className="icon"
              style={{ width: "21px", height: "21px" }}
            />
          </div>
        </div>

        {/* Add User Button */}
        <div className="add-user-container p-3 ">
          <button className="btn btn-delete">Delete User</button>
          <button className="btn b1">Edit User</button>
          <button className="btn btn-print">
            <img
              src={printer}
              alt="Print"
              className="icon me-3"
              style={{ width: "20px", height: "20px" }}
            />
            Print
          </button>
        </div>

         {/* User Profile Content */}
         <div className="user-profile-content d-flex mt-4">
          {/* Left Part: User Photo and Info */}
          <div className="user-info text-center p-3 border-end flex-grow-1" style={{ flex: "2" }}>
            <img
              src=""
              alt="User"
              className="user-photo mb-3"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
            <h3 style={{ fontSize: "1.5rem" }}>{user.name}</h3>
            {user.role === "doctor" && <p style={{ fontStyle: "italic" }}>{user.specialization}</p>}
          </div>

          {/* Right Part: User Coordinates */}
          <div className="user-coordinates p-3 flex-grow-1" style={{ flex: "1" }}>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            {user.role === "doctor" && (
              <p>
                <strong>Specialization:</strong> {user.specialization}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
