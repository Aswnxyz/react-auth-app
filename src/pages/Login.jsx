// import React, { useState } from "react";
import { Button, Typography, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validationSchemas";

import FormWrapper from "../components/FormWrapper";
import useLogin from "@/hooks/useLogin";
import FormInput from "../components/FormInput";

const Login = () => {
  const { onSubmit, apiError, loading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormWrapper maxWidth={400}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#fff", fontWeight: 600 }}
        >
          Welcome Back
        </Typography>

        {apiError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {apiError}
          </Alert>
        )}

        <FormInput
          label="Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          register={register}
          errors={errors}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            fontWeight: "bold",
            backgroundColor: "#1976d2",
            ":hover": {
              backgroundColor: "#1565c0",
            },
          }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: "#aaa" }}
        >
          Don’t have an account?{" "}
          {/* <Link href="/register" underline="hover" color="#fff">
            Register
          </Link> */}
          <Link to="/register" className={"text-white hover:underline"}>
            Register
          </Link>
        </Typography>
      </form>
    </FormWrapper>
  );
};

export default Login;
