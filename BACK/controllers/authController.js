const { User, Medecin, Patient } = require('../models/user');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {allowedRoles} = require("../middelwares/verifyRoles")


// Utility function to hash passwords
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}


async function registerMedecin(req, res) {
    try {
      const {
        email,
        password,
        role,
        first_name,
        last_name,
        phone_number,
        CIN,
        medical_diploma,
        proof_of_practice,
        MCRN
      } = req.body;
  
      // Check if any field is missing
      if (!email || !password || !role || !first_name || !last_name || !phone_number || !CIN || !medical_diploma || !proof_of_practice || !MCRN) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Check for duplicate email
      const existingMedecin = await Medecin.findOne({ email });
      if (existingMedecin) {
        return res.status(400).json({ message: "Email already in use" });
      }
  
      const hashedPassword = await hashPassword(password);
  
      // Create and save a new doctor record
      const medecin = new Medecin({
        email,
        password: hashedPassword,
        role: "doctor",
        first_name,
        last_name,
        phone_number,
        CIN,
        medical_diploma,
        proof_of_practice,
        MCRN
      });
  
      await medecin.save();
  
      res.status(201).json({ message: "Doctor registered successfully", medecin });
    } catch (error) {
      console.error("Doctor registration error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  
  
  
  // Register Patient
  async function registerPatient(req, res) {
    try {
      const { email, password, first_name, last_name, phone_number } = req.body;
  
      // Validate required fields for Patient registration
      if (!email || !password || !first_name || !last_name || !phone_number) {
        return res.status(400).json({ message: "All fields are required for Patient registration" });
      }
  
      const existingPatient = await Patient.findOne({ email });
      if (existingPatient) {
        return res.status(400).json({ message: "Email already in use" });
      }
  
      const hashedPassword = await hashPassword(password);
  
      const patient = new Patient({
        email,
        password: hashedPassword,
        role: "patient",
        first_name,
        last_name,
        phone_number,
      });
  
      await patient.save();
  
      res.status(201).json({ message: "Patient registered successfully", patient });
    } catch (error) {
      console.error("Error during Patient registration:", error);
      res.status(500).json({ message: "An error occurred during registration" });
    }
  }
  
// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid login password" });

    const token = jwt.sign(user._id, process.env.JWT_SECRET);
    res.status(200).json({
      _id: user.id,
      name: user.name,
      token
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

  
  
    module.exports = { registerMedecin, registerPatient , login}