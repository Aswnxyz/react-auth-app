// import React, { useState } from "react";
import { Button, Typography, CircularProgress, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../utils/validationSchemas";

import FormWrapper from "../components/FormWrapper";
import useRegister from "@/hooks/useRegister";
import FormInput from "../components/FormInput";

const Register = () => {
  const { onSubmit, loading, apiError } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#fff", fontWeight: 600 }}
        >
          Create Account
        </Typography>

        {apiError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {apiError}
          </Alert>
        )}

        <FormInput
          label="Name"
          name="name"
          register={register}
          errors={errors}
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
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
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Register"
          )}
        </Button>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: "#aaa" }}
        >
          Already have an account?{" "}
          <Link to="/login" className={"text-white hover:underline"}>
            Login
          </Link>
        </Typography>
      </form>
    </FormWrapper>
  );
};

export default Register;
