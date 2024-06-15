"use client"

import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";
import UpdateButton from "@/component/UpdateButton";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const Page: React.FC<Props> = ({ params }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Box p={3} boxShadow={3} borderRadius={5} bgcolor="white">
          <Typography variant="h5" gutterBottom>
            Update User Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Box mt={2}>
              <UpdateButton userId={params.id} userData={userData} />
            </Box>
          </form>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginClick}
              fullWidth
            >
              Go to Login
            </Button>
          </Box>
          <Box mt={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRegisterClick}
              fullWidth
            >
              Go to Register
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Page;
