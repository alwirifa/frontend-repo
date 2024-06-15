"use client"

import React from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/actions";
import { RootState } from "@/store/reducers";

interface UpdateButtonProps {
  userId: string;
  userData: { name: string; email: string; password: string };
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ userId, userData }) => {
  const dispatch = useDispatch();
  const updateState = useSelector((state: RootState) => state.updateUser);

  const handleClick = () => {
    const token = localStorage.getItem('token'); 
    console.log('Token:', token); 
  
    if (!token) {

      console.error('Token is null or empty');
      return; 
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };

    dispatch(updateUser(userId, userData, config) as any);
  };
  
  return (
    <div>
      <Button variant="contained" color="primary" fullWidth onClick={handleClick}>
        Update User
      </Button>

      {!updateState.success && (
        <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
          {updateState.error ? updateState.error : "Token is null or empty, please login"}
        </Typography>
      )}
      {updateState.success && (
        <Typography
          variant="body2"
          color="primary"
          align="center"
          sx={{ mt: 2 }}
        >
          Update successful!
        </Typography>
      )}
    </div>
  );
};

export default UpdateButton;
