import { Select } from "@mui/material";

export default Select = ({ value, id, name, onChange, options, label }) => {
  return (
    <Select id={id} name={name} value={value} label={label} onChange={onChange}>
      {options}
    </Select>
  );
};
