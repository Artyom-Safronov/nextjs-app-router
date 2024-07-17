import { Typography } from "@mui/material";
import styles from "./styles.module.scss";

type PriceProps = {
  value: string;
  oldPrice?: string;
  short?: boolean;
};

const currency = {
  usd: {
    short: "$",
    full: "usd",
  },
  eur: {
    short: "€",
    full: "eur",
  },
};

export const Price = ({ value, oldPrice, short = true }: PriceProps) => {
  return (
    <div className={styles.priceContainer}>
      <Typography variant="h4" component={"span"}>
        {currency.usd.short}
        {value}
      </Typography>
      {oldPrice && (
        <Typography
          className={styles.oldPrice}
          variant="caption"
          component={"sup"}
          sx={{
            color: "grey.600",
          }}
        >
          {currency.usd.short}
          {oldPrice}
        </Typography>
      )}
    </div>
  );
};
