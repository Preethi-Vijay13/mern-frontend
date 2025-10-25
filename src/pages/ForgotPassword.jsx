import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/images/Background.jpg";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,

} from "@mui/material";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    notRegistered: false
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: !emailRegex.test(email),
      password: !passwordRegex.test(newPassword),
      confirmPassword: newPassword !== confirmPassword,
      notRegistered: false
    };

    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex === -1) {
      newErrors.notRegistered = true;
    }

    setErrors(newErrors);

    const isValid = !Object.values(newErrors).some((val) => val);

    if (isValid) {
      const updatedUsers = [...users];
      updatedUsers[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Password reset successfully!");
      navigate("/signin");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Reset Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email || errors.notRegistered}
              helperText={
                errors.email
                  ? "Please enter a valid email address."
                  : errors.notRegistered
                  ? "This email is not registered."
                  : ""
              }
              required
            />

            <TextField
              fullWidth
              label="New Password"
              type="password"
              margin="normal"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              error={errors.password}
              helperText={
                errors.password &&
                "Password must be 8+ characters, include uppercase, lowercase, number, and special character."
              }
              required
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
              helperText={errors.confirmPassword && "Passwords do not match."}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="warning"
              fullWidth
              sx={{ mt: 2 }}
            >
              Reset Password
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
