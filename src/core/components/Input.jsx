import { TextField } from "@mui/material";

export default Input = ({ id, name, variant, label, style, size, error }) => {
  return (
    <TextField
      id={id}
      name={name}
      variant={variant}
      label={label}
      size={size}
      style={style}
      error={error}
    />
  );
};
