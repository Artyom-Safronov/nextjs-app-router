import { Typography } from "@mui/material";

type GoodFingerprintProps = {
  brand: string;
  name: string;
};

export const GoodFingerprint = ({ brand, name }: GoodFingerprintProps) => {
  return (
    <>
      <Typography
        variant="caption"
        sx={{color: "grey.600"}}
      >
        {brand}
      </Typography>
      <Typography variant="h4" fontWeight={500} textTransform={"uppercase"} mt={1}>
        {name}
      </Typography>
    </>
  );
};
