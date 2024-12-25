import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../style/ListUsers.css";
import sigle1 from "../assets/sigle1.png";
import notification from "../assets/notification.png";
import logout from "../assets/logout.png";

const ListUsers = () => {
  const [menuVisible, setMenuVisible] = useState(null);
  const menuRefs = useRef([]);

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      gender: "Male",
      phone: "+216 98765432",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      gender: "Female",
      phone: "+216 12345678",
    },
    {
      id: 3,
      name: "Ahmed Ali",
      email: "ahmedali@gmail.com",
      gender: "Male",
      phone: "+216 55512345",
    },
  ];

  const toggleMenu = (index) => {
    setMenuVisible((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRefs.current.every(
          (menu) => menu && !menu.contains(event.target)
        )
      ) {
        setMenuVisible(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <input type="radio" name="userType" value="doctor" className="me-2" />
            Doctor
          </label>
          <label className="d-block mt-2">
            <input type="radio" name="userType" value="patient" className="me-2" />
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
        <div className="add-user-container p-3">
          <button className="btn btn-primary">Add User</button>
        </div>

        {/* User Table */}
        <div className="user-table-container p-3">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">
                  <input type="checkbox" disabled />
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Telephone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  {/* Make user name clickable */}
                  <td>
                    <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
                      {user.name}
                    </Link>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td>
                    <span
                      className="vertical-dots"
                      onClick={() => toggleMenu(index)}
                      style={{ cursor: "pointer" }}
                    >
                      ⋮
                    </span>
                    {menuVisible === index && (
                      <div
                        className="dropdown-menu show"
                        ref={(el) => (menuRefs.current[index] = el)}
                      >
                        <button className="dropdown-item">Update</button>
                        <button className="dropdown-item">Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
