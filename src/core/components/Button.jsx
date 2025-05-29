import { Button } from "@mui/material";

const CustomButton = ({
  id,
  name,
  variant,
  label,
  disabled,
  size,
  style,
  onClick,
}) => {
  return (
    <Button
      id={id}
      name={name}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      size={size}
      style={style}
    >
      {label}
    </Button>
  );
};

export default CustomButton
