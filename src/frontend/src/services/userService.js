import axios from "axios";

const API_URL = "http://localhost:8800/users/";

export const createUser = async (userData) => {
  return axios.post(API_URL, userData);
};

export const updateUser = async (id, userData) => {
  return axios.put(`${API_URL}${id}`, userData);
};
