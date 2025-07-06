import { TextField } from "@mui/material";

const Input = ({
  id,
  name,
  variant,
  label,
  style,
  size,
  error,
  placeholder,
  value,
  defaultValue,
  inputLabel,
  multiline,
  onChange,
  sx,
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
      {label && <label>{label}</label>}
      <TextField
        sx={sx}
        id={id}
        name={name}
        variant={variant}
        multiline={multiline}
        // label={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        size={size}
        style={style}
        error={error}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
