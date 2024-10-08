import axios from "axios";

const API_URL = "http://localhost:8800/users/";

export const getAllUsers = async () => {
  return axios.get(`${API_URL}/allUsers`);
};

export const createUser = async (userData) => {
  return axios.post(API_URL, userData);
};

export const updateUser = async (id, userData) => {
  return axios.put(`${API_URL}${id}`, userData);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}${id}`);
};
