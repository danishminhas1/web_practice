import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const AddApp = () => {
    const [formData, setFormData] = useState({
        ip: '',
        port: '',
        username: '',
        password: '',
        database: '',
        connectionName: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can add your form submission logic here
      };
    
      return (
        <Container maxWidth="sm">
          <Box mt={5}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create Connection
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="IP Address"
                name="ip"
                value={formData.ip}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Port"
                name="port"
                value={formData.port}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Database"
                name="database"
                value={formData.database}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Connection Name"
                name="connectionName"
                value={formData.connectionName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      );
}

export default AddApp;