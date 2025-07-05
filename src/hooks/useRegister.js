import { registerUser } from "@/api/authService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const onSubmit = async (data) => {
    setApiError("");
    setLoading(true);

    try {
      const res = await registerUser({
        email: data.email,
        password: data.password,
      });
      console.log("Registration success:", res.data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setApiError("Registration failed. Try a different email.");
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit, loading, apiError };
};

export default useRegister;
