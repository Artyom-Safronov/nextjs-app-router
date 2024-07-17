import { Modal, Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { fakeGoods } from "@/app/card/[id]/page";
import { Price } from "../price/price";

type ProductCardProps = {
  imageSrc: string;
  name: string;
  brand: string;
  price: string;
};

export const ProductCard = ({
  imageSrc,
  name,
  price,
  brand,
}: ProductCardProps) => {
  return (
    <Box>
      <Box height={300} bgcolor={"grey.300"} className={styles.productCard}>
        <Image
          src={imageSrc}
          alt={"Next Image"}
          width={240}
          height={192}
        />
      </Box>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="caption" component={"div"} mb={.5} color={"grey.700"}>{brand}</Typography>
      <Price value={price} />
    </Box>
  );
};
