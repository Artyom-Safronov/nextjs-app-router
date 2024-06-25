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
      <div className={styles.mainPrice}>
        <span>{currency.usd.short}</span>
        <span>{value}</span>
      </div>
      {oldPrice && <sup className={styles.oldPrice}>{oldPrice}</sup>}
    </div>
  );
};

