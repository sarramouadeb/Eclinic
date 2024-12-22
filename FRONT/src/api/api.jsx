import axios from 'axios';


const API_BASE_URL = 'http://localhost:5000';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});



export const fetchData = async () => {
  try {
    const response = await instance.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    // Handle errors here or throw them to be handled where the function is called
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await instance.post('/auth/login', {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    console.error('Login API error:', error.response?.data || error.message);
    throw error;
  }
};


export const registerUser = async (formData) => {
  try {
    const { data } = await instance.post('/auth/register', formData);
    console.log('Registration successful:', data);
    return data;
  } catch (error) {
    console.error('Registration API error:', error.response?.data || error.message);
    throw error;
  }
};