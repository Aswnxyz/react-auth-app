import axiosInstance from "./axiosInstance";

export const loginUser = (data) => {
  return axiosInstance.post("/login", data);
};

export const registerUser = (data) => {
  return axiosInstance.post("/register", data);
};
