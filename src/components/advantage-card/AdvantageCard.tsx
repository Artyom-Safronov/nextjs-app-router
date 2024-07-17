import { Box, Stack, Typography } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

type AdvantageCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const AdvantageCard = ({
  icon,
  title,
  description,
}: AdvantageCardProps) => {
  return (
    <Stack direction="column" alignItems={"center"} spacing={1} width={240} p={4}>
      <Box color={"grey.600"}>
        {icon}
      </Box>
      <Typography component="strong">{title}</Typography>
      <Typography variant="caption" align="center" color={"grey.600"}>{description}</Typography>
    </Stack>
  );
};
