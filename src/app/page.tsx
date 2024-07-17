import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { ProductCard } from "../components/product-card/ProductCard";
import { fakeGoods } from "@/mock";

const groupedGoods = fakeGoods.reduce<any[][]>((acc, cur, index) => {
  if (index === 0 || index % 4 === 0) {
    acc.push([]);
  }

  acc[acc.length - 1].push(cur);

  return acc;
}, []);

const Page = () => {
  return (
    <Box>
      <Typography variant="h5">Page</Typography>
      {groupedGoods.map((group) => {
        return (
          <Grid container spacing={2}>
            {group.map((element, index) => {
              return (
                <Grid item xs={3}>
                  <Link href={`/card/${index}`}>
                    <ProductCard key={element.name} {...element} />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Box>
  );
};

export default Page;
