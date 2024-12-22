
const allowedRoles = ["patient", "admin", "medecin" ];
const express = require("express");
const app = express();

app.use(express.json()); // Add this middleware to parse JSON

const verifyRoles = (...rolesToCheck) => {
    return (req, res, next) => {
        const userRoles = req.user?.role;
        console.log(userRoles)
            if (!userRoles.some(role => rolesToCheck.includes(role))){
                return res.status(403).json({message: "Access denied"});
            }
            next();
    };
};

module.exports = {verifyRoles, allowedRoles};