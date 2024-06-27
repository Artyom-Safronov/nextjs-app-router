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
    <div>
      <Typography variant="h6" component={"span"} fontWeight={500}>
        <span>{currency.usd.short}</span>
        {value}
      </Typography>
      <Typography component={"sup"} color={"grey.500"} className={styles.oldPrice}>{currency.usd.short}{oldPrice}</Typography>
    </div>
  );
};
