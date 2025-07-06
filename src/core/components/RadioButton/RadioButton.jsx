import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const RadioButton = ({
  row,
  name,
  className,
  label,
  labelPlacement,
  value,
  checked,
  options,
  onChange,
}) => {
  return (
    <>
      <FormLabel id={name}>{label}</FormLabel>
      <RadioGroup
        row={row}
        name={name}
        className={className}
        onChange={onChange}
      >
        {options?.map((option, index) => {
          return (
            <FormControlLabel
              key={option?.key}
              value={option?.value}
              control={<Radio />}
              label={option?.label}
              labelPlacement={labelPlacement}
            />
          );
        })}
      </RadioGroup>
    </>
  );
};

export default RadioButton;
