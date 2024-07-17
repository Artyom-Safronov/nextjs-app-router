import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { IconButton, Input } from "@mui/material";

export const Search = () => {
  return (
    <div>
      <IconButton>
        <SearchRoundedIcon />
      </IconButton>
      <Input />
    </div>
  );
};
