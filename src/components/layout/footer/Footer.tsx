import { Container, Grid, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import { SuggestionList } from "./SuggestionList";
import { bestSelleres, newReleases } from "@/mock";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={2}>
            <SuggestionList title="Best Sellers" suggestions={newReleases} />
          </Grid>
          <Grid xs={2}>
            <SuggestionList title="New Releases" suggestions={newReleases} />
          </Grid>
          <Grid xs={2}>
            <SuggestionList title="About Us" suggestions={bestSelleres} />
          </Grid>
          <Grid xs={2}>
            <SuggestionList title="Support" suggestions={bestSelleres} />
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </footer>
  );
};
