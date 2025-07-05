import React from "react";
import { Box } from "@mui/material";

const FormWrapper = ({ children, maxWidth = 420 }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #000)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        "@keyframes gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth,
          p: 4,
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 0 15px rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FormWrapper;
