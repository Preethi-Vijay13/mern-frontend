import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from "@mui/material";
import backgroundImg from "../assets/images/Background.jpg";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    const firstNameTrimmed = formData.firstName.trim();
    const lastNameTrimmed = formData.lastName.trim();

    if (!firstNameTrimmed || !nameRegex.test(firstNameTrimmed)) {
      newErrors.firstName = "First name should only contain letters.";
    }
    if (!lastNameTrimmed || !nameRegex.test(lastNameTrimmed)) {
      newErrors.lastName = "Last name should only contain letters.";
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = { ...formData };
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));

      alert("Sign Up Successful!");
      navigate("/signin");
    }
  };

  useEffect(() => {
    const users = localStorage.getItem("users");
    if (users) {
      console.log("Registered Users:", JSON.parse(users));
    }
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: 350,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.4)",
          borderRadius: 2
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>

          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link to="/signin" style={{ textDecoration: "none", color: "#1976d2" }}>
              Sign In
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
