import React, { useState } from 'react';
import { Grid,TextField,Typography,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './Login.css';
export const Login = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: 'name',
    password: 'password',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {

    if (validateForm()) {

    navigate('/Main');
  }
  };

  return (
    <div style={{margin:'12%'}} className='App'>
      <Typography variant='h3' style={{color:"indigo"}}>Login Form</Typography>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12} sm ={12} md={12}>
          <TextField variant='outlined'  label='Username'  name='username'
            value={formData.username}
            onChange={handleChange}
            error={Boolean(errors.username)}
            helperText={errors.username}/>
        </Grid>
        <Grid item xs={12} sm ={12} md={12}>
          <TextField variant='outlined'  label='Password' name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}/>
        </Grid>
        <Grid item xs={12} sm ={12} md={12}>
          <Button variant='contained' color='secondary' onClick={handleLogin}>Login</Button>
        </Grid>
        
      </Grid>

    </div>
  )
}
