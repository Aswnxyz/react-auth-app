import { TextField } from "@mui/material";

const FormInput = ({ label, name, type = "text", register, errors }) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...register(name)}
      margin="normal"
      error={!!errors[name]}
      helperText={errors[name]?.message}
      InputLabelProps={{ style: { color: "#ccc" } }}
      InputProps={{ style: { color: "#fff" } }}
    />
  );
};

export default FormInput;
