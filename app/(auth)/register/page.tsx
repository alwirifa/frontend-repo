"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/store/actions";
import { RootState } from "@/store/reducers";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const registerState = useSelector((state: RootState) => state.register);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password) as any);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Register Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
        {registerState.error && (
          <Typography style={{ color: "red" }}>
            {registerState.error}
          </Typography>
        )}
        {registerState.success && (
          <Typography style={{ color: "green" }}>
            Registration successful!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default RegisterPage;
