import {
  Box,
  FormControl,
  MenuItem,
  Select as MuiSelect,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

type Option = {
  id: string;
  label: string;
}

type SelectProps = {
  label: string;
  options: Option[];
  link?: JSX.Element;
};

export const Select = ({ label, link, options }: SelectProps) => {
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="caption">{label}</Typography>
        {link && link}
      </Stack>
      <FormControl sx={{ width: "100%" }}>
        <MuiSelect
          labelId="size-select-label"
          defaultValue={options[0]?.id}
          label="Age"
          input={<OutlinedInput />}
        >
          {options.map((option) => {
            return (
              <MenuItem value={option.label} key={option.label}>{option.label}</MenuItem>
            )
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};
