import { Box, Button, IconButton, Slide, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { useState } from "react";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

type OrderButtonProps = {
  text: string;
};

export const OrderButton = ({}: OrderButtonProps) => {
  const [orderPending, setOrderPending] = useState(false);
  const [countPending, setCountPending] = useState(false);
  const [showOrder, setShowOrder] = useState(true);
  const [count, setCount] = useState(1);

  const onOrderClick = async () => {
    setOrderPending(true);

    const result = await fetch("/success.json").then((res) => res.json());

    setOrderPending(false);

    if (result) {
      setShowOrder(false);
    }
  };

  const onAddItem = () => {
    setCount(count + 1);
  };

  const onRemoveItem = () => {
    if (count - 1 === 0) {
      setShowOrder(true);
    }
    setCount(count - 1);
  };

  return (
    <Box className={styles.orderButtonContainer}>
      <Button
        color="secondary"
        variant="contained"
        fullWidth
        onClick={onOrderClick}
      >
        Order
      </Button>
      <Slide direction="up" in={!showOrder} mountOnEnter unmountOnExit>
        <Box
          sx={{ bgcolor: "secondary.main" }}
          color={"white"}
          className={styles.countContainer}
        >
          <Button color="secondary" variant="contained" onClick={onRemoveItem}>
            <Remove />
          </Button>
          <Typography>{count}</Typography>
          <Button color="secondary" variant="contained" onClick={onAddItem}>
            <Add />
          </Button>
        </Box>
      </Slide>
    </Box>
  );
};
