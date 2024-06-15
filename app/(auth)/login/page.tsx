"use client"

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/store/actions';
import { RootState } from '@/store/reducers';
import { useRouter } from 'next/navigation';
import { Container, Typography, TextField, Button, Box, CircularProgress } from '@mui/material';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.login);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      
      const response = await dispatch(loginUser(email, password) as any);
      const userToken = response.data.token;
      localStorage.setItem('token', userToken);

      const userId = response.data.userId;
      router.push(`/dashboard/${userId}`);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
        }}
      >
        <Typography component="h1" variant="h5">
          Login Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </Box>
      </Box>
      {loginState.error && (
        <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
          {loginState.error}
        </Typography>
      )}
      {loginState.success && (
        <Typography variant="body2" color="primary" align="center" sx={{ mt: 2 }}>
          Login successful!
        </Typography>
      )}
    </Container>
  );
};

export default LoginPage;
