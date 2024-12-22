import React, { useState, useRef } from "react";
import "../style/register.css"; // Link to updated CSS
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeIcon from "../assets/sigle1.png";
import Navbar from "./navbar";
import { registerUser } from "../api/api";
import { Link } from "react-router-dom"; //  navigation between components without reloading

const Register = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    userType: "Doctor", // Default selected user type
    cin: "",
    diploma: null,
    practiceProof: null,
    registrationNumber: ""
  });
  const [selectedUserType, setSelectedUserType] = useState("Doctor"); // Default selected user type
  // determins which step of the registration form is active
  // Step 1: Personal Info, Step 2: Document Submission
  const [step, setStep] = useState(1); 
  const fileInputRef = useRef(null); //for file selection

 
// Switch between "Doctor" and "Patient"
  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType); 
    setStep(1); // Reset to Step 1 for the new user type
  };

  //btn submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      if (selectedUserType === "Patient") {
        
        
        window.location.href = "/login";
      } else if (selectedUserType === "Doctor") {
       
        setStep(2);
      }
    } catch (error) {
     
      alert(`Registration failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
        console.log(formData);  // Check if form data is collected
        window.location.href = "/login";  // Redirect to login
    } catch (error) {
        console.error("Failed to submit documents:", error);
    }
};

  

  //Updates the text input with the selected file name for document uploads
  const handleFileSelect = (e) => {
    const fileName = e.target.files[0]?.name || "";
    document.getElementById(e.target.name).value = fileName;
  };

  //open the file picker.
  const triggerFileSelect = () => {
    fileInputRef.current.click(); // Trigger the hidden file input click
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        {/* Left Section */}
        <div className="welcome-section">
          <div className="welcome-icon">
            <img src={WelcomeIcon} alt="Welcome Icon" />
          </div>
          <h3 className="welcome-text">WELCOME</h3>
        </div>

        {/* Right Section */}
        <div className="form-section position-relative">
          {/* Registration Form */}

          {/* step 1: register Patient/doctor */}
          {step === 1 ? (
            <form className="mt-5" onSubmit={handleFormSubmit}>
              {/* Button Group */}
              <div className="button-group-container position-absolute top-0 start-50 translate-middle-x">
                <div
                  className="button-cell"
                  onClick={() => handleUserTypeChange("Doctor")}
                  style={{
                    borderRadius: "25px 0 0 25px",
                    backgroundColor: selectedUserType === "Doctor" ? "rgb(79, 4, 150)" : "white",
                    color: selectedUserType === "Doctor" ? "white" : "rgb(79, 4, 150)",
                  }}
                >
                  Doctor
                </div>
                <div
                  className="button-cell"
                  onClick={() => handleUserTypeChange("Patient")}
                  style={{
                    borderRadius: "0 25px 25px 0",
                    backgroundColor: selectedUserType === "Patient" ? "rgb(79, 4, 150)" : "white",
                    color: selectedUserType === "Patient" ? "white" : "rgb(79, 4, 150)",
                  }}
                >
                  Patient
                </div>
              </div>
              <h3 className="text-center">Register as a {selectedUserType}</h3>

              {/* First Name and Last Name */}
              <div className="row align-items-center">
                <div className="col-md-5 me-auto">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First name*"
                    required
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="col-md-5 ms-auto">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last name*"
                    required
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="row align-items-center mt-3">
                <div className="col-md-5 me-auto">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email*"
                    required
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="col-md-5 ms-auto">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Phone number*"
                    required
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Password and Confirm Password */}
              <div className="row align-items-center mt-3">
                <div className="col-md-5 me-auto">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password*"
                    required
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <div className="col-md-5 ms-auto">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm password*"
                    required
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="row align-items-center mt-4">
                <div className="col-md-12 mb-3">
                  <div className="custom-radio-group d-flex align-items-center">
                    <div className="me-3">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        id="male"
                        required
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      />
                      <label htmlFor="male" className="ms-1">
                        Male
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        id="female"
                        required
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      />
                      <label htmlFor="female" className="ms-1">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <div className="row align-items-center mt-4">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                  <p className="mb-2 login">
                    <Link to="/login" className="login">
                      Already have an account?
                    </Link>
                  </p>

                  {/* selon user type : redirect->{login si patient, submit docs si doctor} */} 
                  {/*redirect->{login} */} 
                  {selectedUserType === "Patient" ? (
                  
                      <button
                        type="submit"
                        className="btn btn-mauve btn-lg register"
                      >
                        Register
                      </button>
                 

                  ) :
                  //redirect-> submit docs
                   (
                    <button
                      type="submit"
                      className="btn btn-mauve btn-lg register"
                    >
                      Register
                    </button>
                  )}


                </div>
              </div>
            </form>
          ) 
          //step 2: submit docs 
          : (
            <form
              className="mt-4 position-relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-center mb-3">Submit Documents</h3>

              {/* CIN */}
              <div className="row align-items-center mb-2">
                <div className="col-md-11">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="CIN *"
                  />
                </div>
              </div>

              {/* Medical Diploma */}
              <div className="row align-items-center mb-2">
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <input
                      id="diplomaInput"
                      name="diplomaInput"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Medical Diploma *"
                      readOnly
                    />
                    <span
                      className="ms-0 file-emoji"
                      style={{ cursor: "pointer", fontSize: "1.5rem" }}
                      onClick={triggerFileSelect}
                    >
                      📄
                    </span>
                    <input
                      ref={fileInputRef}
                      name="diplomaInput"
                      type="file"
                      className="d-none"
                      onChange={handleFileSelect}
                    />
                  </div>
                </div>
              </div>

              {/* Proof of Practice */}
              <div className="row align-items-center mb-2">
                <div className="col-md-12">
                  <div className="d-flex align-items-center">
                    <input
                      id="practiceInput"
                      name="practiceInput"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Proof of Practice *"
                      readOnly
                    />
                    <span
                      className="ms-0 file-emoji"
                      style={{ cursor: "pointer", fontSize: "1.5rem" }}
                      onClick={triggerFileSelect}
                    >
                      📄
                    </span>
                    <input
                      ref={fileInputRef}
                      name="practiceInput"
                      type="file"
                      className="d-none"
                      onChange={handleFileSelect}
                    />
                  </div>
                </div>
              </div>

              {/* Medical Council Registration Number */}
              <div className="row align-items-center mb-5">
                <div className="col-md-11">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Registration number *"
                    value="" 
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="row align-items-center mt-3">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
               
                      <button
                        type="submit"
                        className="btn btn-mauve btn-lg register" onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    

                  {/* Return Button : return to register page(step1) */}

                  <button
                    type="return"
                    className="btn btn-gris btn-lg return"
                    onClick={() => setStep(1)} // Set step back to 1
                  >
                    Return
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
