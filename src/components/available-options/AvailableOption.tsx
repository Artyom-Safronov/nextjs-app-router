import { Card, CardContent, Typography } from "@mui/material";
import Inventory2 from "@mui/icons-material/Inventory2TwoTone";
import Storefront from "@mui/icons-material/StorefrontTwoTone";
import styles from "./styles.module.scss";
import { Price } from "../price/price";

type AvailableOptionProps = {
  type: "stock" | "order";
  price: number;
  checked?: boolean;
  onClick?: (checked: boolean) => void;
};

const optionContent = {
  stock: {
    title: "In stock",
    icon: <Inventory2 />,
  },
  order: {
    title: "To order",
    icon: <Storefront />,
  },
};

export const AvailableOption = ({
  checked,
  type,
  price,
}: AvailableOptionProps) => {
  return (
    <label>
      <Card
        variant="outlined"
        className={styles.availableOption}
        sx={{
          borderColor: checked ? "text.primary" : "",
          bgcolor: type === "stock" ? "#fcfcfc" : "",
        }}
      >
        <CardContent>
          {optionContent[type].icon}
          <Typography fontSize={14} my={1} color="text.secondary">
            {optionContent[type].title}
          </Typography>
          <Price value={`${price}`} variant="h6" />
        </CardContent>
      </Card>
      <input
        type="radio"
        name={"available-option"}
        value={type}
        id={type}
        checked={checked}
      />
    </label>
  );
};
