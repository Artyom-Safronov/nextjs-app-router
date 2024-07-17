import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { fakeGoods } from "./card/[id]/page";
import Link from "next/link";
import { ProductCard } from "../components/product-card/ProductCard";

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
        return <Grid container spacing={2}>
          {
            group.map((element, index) => {
              return <Grid item xs={3}>
                <Link href={`/card/${index}`}>
                  <ProductCard  {...element}/>
                </Link>
              </Grid>
            })
          }
        </Grid>;
      })}
    </Box>
  );
};

export default Page;

// {groupedGoods.map((group) => {
//   return <Grid container spacing={2}>
//     {
//       group.map(element => {
//         return <Grid item xs={3}></Grid>
//       })
//     }
//   </Grid>;
// })}
