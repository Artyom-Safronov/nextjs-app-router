import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <Box>
      <Typography variant="h5">Card</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container height={500}>
          <Grid xs={8}>
            <Box sx={{ height: "100%" }} className={styles.cardImage}>
              <Stack
                sx={{ height: "100%" }}
                direction={"row"}
                spacing={2}
                justifyContent={"space-around"}
                alignItems={"center"}
              >
                <Stack
                  className={styles.previewBlock}
                  direction={"column"}
                  spacing={2}
                  justifyContent={"space-around"}
                >
                  <div className={styles.previewItem}>thumb</div>
                  <div className={styles.previewItem}>thumb</div>
                  <div className={styles.previewItem}>thumb</div>
                  <div className={styles.previewItem}>thumb</div>
                </Stack>
                <img src="/sneacker-2.png" alt="sneacker" />
              </Stack>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ height: "100%" }} className={styles.cardInfo}>
              <Typography>Brand</Typography>
              <Typography>Good name</Typography>
              <Typography>Price $</Typography>
              <Typography>Max two string truncated description</Typography>
              <div className={styles.sizeControl}>Size Control</div>
              <div className={styles.optionsControl}>
                Available options control
              </div>
              <div>Read more</div>
              <Button variant="contained">Order</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.advantages}>
        <Stack direction={"row"} spacing={2} justifyContent={"space-around"}>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>icon</div>
            <Typography variant="h6">Advantage title</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Typography>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>icon</div>
            <Typography variant="h6">Advantage title</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Typography>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>icon</div>
            <Typography variant="h6">Advantage title</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Typography>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantageIcon}>icon</div>
            <Typography variant="h6">Advantage title</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Typography>
          </div>
        </Stack>
      </Box>
      <Box className={styles.suggestions}>
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          You might also like
        </Typography>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"space-around"}
          sx={{ marginTop: 2 }}
        >
          <div className={styles.suggestion}>
            <div className={styles.suggestionPreview}></div>
            <div className={styles.suggestionInfo}>
              <Typography className={styles.suggestionInfo}>
                suggestion title
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion color
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion price
              </Typography>
            </div>
          </div>
          <div className={styles.suggestion}>
            <div className={styles.suggestionPreview}></div>
            <div className={styles.suggestionInfo}>
              <Typography className={styles.suggestionInfo}>
                suggestion title
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion color
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion price
              </Typography>
            </div>
          </div>
          <div className={styles.suggestion}>
            <div className={styles.suggestionPreview}></div>
            <div className={styles.suggestionInfo}>
              <Typography className={styles.suggestionInfo}>
                suggestion title
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion color
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion price
              </Typography>
            </div>
          </div>
          <div className={styles.suggestion}>
            <div className={styles.suggestionPreview}></div>
            <div className={styles.suggestionInfo}>
              <Typography className={styles.suggestionInfo}>
                suggestion title
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion color
              </Typography>
              <Typography className={styles.suggestionInfo}>
                suggestion price
              </Typography>
            </div>
          </div>
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;