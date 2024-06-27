import styles from "./styles.module.scss";

type PriceProps = {
  value: string;
  oldPrice?: string;
  short?: boolean;
};

const currency = {
  usd: {
    short: "$",
    full: "usd"
  },
  eur: {
    short: "€",
    full: "eur"
  }
}

export const Price = ({ value, oldPrice, short = true }: PriceProps) => {
  return (
    <div>
      <span className={styles.mainPrice}>
        <span>{currency.usd.short}</span>
        <span>{value}</span>
      </span>
      {oldPrice && <sup className={styles.oldPrice}>{currency.usd.short}{oldPrice}</sup>}
    </div>
  );
};

