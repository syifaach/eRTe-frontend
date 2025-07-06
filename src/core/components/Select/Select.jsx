import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";

const CustomSelect = ({ value, id, name, size, fullWidth, onChange, options, label }) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <FormLabel>{label}</FormLabel>
      <Select
        id={id}
        name={name}
        size={size}
        fullWidth={fullWidth}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options?.map((option, index) => (
          <MenuItem key={index} value={option.value} >{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect
