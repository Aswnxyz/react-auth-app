import { loginUser } from "@/api/authService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setApiError("");
    setLoading(true);
    try {
      const res = await loginUser(formData);
      console.log("Login success:", res);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setApiError("Invalid login credentials.");
    } finally {
      setLoading(false);
    }
  };
  return { onSubmit, apiError, loading };
};

export default useLogin;
