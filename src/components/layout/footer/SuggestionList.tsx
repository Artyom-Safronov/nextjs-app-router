import { Stack, Typography } from "@mui/material";
import Link from "next/link";

type SuggestionListProps = {
  title: string;
  suggestions: string[];
};

export const SuggestionList = ({ title, suggestions }: SuggestionListProps) => {
  return (
      <Stack spacing={1} alignItems={"baseline"}>
      <Typography variant="h6">{title}</Typography>
        {(suggestions || []).map((suggestion) => (
          <Link href={"/card/0"} key={suggestion}>
            <Typography textTransform={"capitalize"} color={"grey.600"} component={"span"}>{suggestion}</Typography>
          </Link>
        ))}
      </Stack>
  );
};
