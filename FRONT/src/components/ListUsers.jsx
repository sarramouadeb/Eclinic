import React from "react";
import "../style/ListUsers.css"; // Your custom styling
import sigle1 from '../assets/sigle1.png';

const ListUsers = () => {
  return (
    <div className="list-users-container d-flex">
      {/* Sidebar */}
      <div className="sidebar  p-3 border-end">
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
            <img
              src="sigle1.png"
              alt="Eclinic Logo"
              className="logo-img"
            />
          </div>
          <div className="header-right d-flex align-items-center">
            <input
              type="text"
              className="form-control me-3"
              placeholder="Search..."
            />
            <img
              src="notification-icon.png"
              alt="Notifications"
              className="icon me-3"
            />
            <img src="leave-icon.png" alt="Leave Page" className="icon" />
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
                  <input type="checkbox" />
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Telephone</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="d-flex align-items-center">
                  <img
                    src="user1.jpg"
                    alt="User"
                    className="user-img rounded-circle me-2"
                  />
                  John Doe
                </td>
                <td>johndoe@gmail.com</td>
                <td>Male</td>
                <td>+216 98765432</td>
                <td>
                  <span className="vertical-dots">⋮</span>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="d-flex align-items-center">
                  <img
                    src="user2.jpg"
                    alt="User"
                    className="user-img rounded-circle me-2"
                  />
                  Jane Smith
                </td>
                <td>janesmith@gmail.com</td>
                <td>Female</td>
                <td>+216 12345678</td>
                <td>
                  <span className="vertical-dots">⋮</span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="d-flex align-items-center">
                  <img
                    src="user3.jpg"
                    alt="User"
                    className="user-img rounded-circle me-2"
                  />
                  Ahmed Ali
                </td>
                <td>ahmedali@gmail.com</td>
                <td>Male</td>
                <td>+216 55512345</td>
                <td>
                  <span className="vertical-dots">⋮</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
