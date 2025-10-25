import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImg from '../assets/images/Background.jpg'; // Import your background image

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/appointments/book`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});


      const result = await response.json();

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          message: '',
          service: '',
        });
      } else {
        alert(result.error || 'Failed to book appointment');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      className="appointment-page"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '50px 0',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} style={{ padding: '2rem', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Book An Appointment
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                fullWidth
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                fullWidth
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </div>
            <div className="mb-3">
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={3}
              />
            </div>

            {/* Service Selection Dropdown */}
            <div className="mb-3">
              <FormControl fullWidth>
                <InputLabel>Service</InputLabel>
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  label="Service"
                  required
                >
                  <MenuItem value="Teeth Cleaning">Teeth Cleaning</MenuItem>
                  <MenuItem value="Cosmetic Dentistry">Cosmetic Dentistry</MenuItem>
                  <MenuItem value="Root Canal Treatment">Root Canal Treatment</MenuItem>
                  <MenuItem value="Braces and Aligners">Braces and Aligners</MenuItem>
                  <MenuItem value="Tooth Extraction">Tooth Extraction</MenuItem>
                  <MenuItem value="Dental Implants">Dental Implants</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Button variant="contained" color="primary" fullWidth type="submit">
              Book Now
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default BookAppointment;
