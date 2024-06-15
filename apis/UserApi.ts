import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

export interface UserData {
  name: string;
  email: string;
}

export const updateUserApi = async (id: string, userData: UserData) => {
  try {
    const response = await axios.put(`${BASE_URL}/update-user-data/${id}`, userData);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
};
