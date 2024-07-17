import { Container, Grid, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import { SuggestionList } from "./SuggestionList";
import { bestSelleres } from "@/mock";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={2}>
            <SuggestionList title="Best Sellers" suggestions={bestSelleres} />
          </Grid>
          <Grid xs={2}>
            <SuggestionList title="Best Sellers" suggestions={bestSelleres} />
          </Grid>
          <Grid xs={2}>
            <SuggestionList title="Best Sellers" suggestions={bestSelleres} />
          </Grid>
          <Grid xs={2}>
            <SuggestionList title="Best Sellers" suggestions={bestSelleres} />
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </footer>
  );
};
