import { Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Variant } from "@mui/material/styles/createTypography";

type PriceProps = {
  value: string;
  variant?: Variant;
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

export const Price = ({ value, oldPrice, short = true, variant = 'h4'}: PriceProps) => {
  return (
    <div className={styles.priceContainer}>
      <Typography variant={variant} component={"span"}>
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
