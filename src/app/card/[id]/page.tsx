import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { faker } from "@faker-js/faker";
import { Slide, Slider } from "@/components/slider/Slider";
import { GoodFingerprint } from "@/components/good-fingerprint/GoodFingerprint";
import { Price } from "@/components/price/price";
import { TruncatedText } from "@/components/truncated-text/TruncatedText";
import { SizeSelect } from "@/components/size-select/SizeSelect";
import { ProductCard } from "@/components/product-card/ProductCard";

export const fakeGoods = Array(20)
  .fill(null)
  .map((element) => {
    const image = faker.image.urlPicsumPhotos({ blur: 1, grayscale: true });
    return {
      imageSrc: image,
      name: faker.commerce.productName(),
      brand: faker.company.name(),
      price: faker.commerce.price({dec: 0})
    };
  });

export const fakeGoodImages: Slide[] = Array(4)
  .fill(null)
  .map((element) => {
    const image = faker.image.urlPicsumPhotos({ blur: 1, grayscale: true });
    return {
      thumbnailSrc: image,
      fullImageSrc: image,
    };
  });

const Card = () => {
  return (
    <Box>
      <Typography variant="h5">Card</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={8}>
            <Slider slides={fakeGoodImages} position="bottom" />
          </Grid>
          <Grid xs={4}>
            <Box sx={{ height: "100%" }} className={styles.cardInfo}>
              <GoodFingerprint brand={fakeGoods[0].brand} name={fakeGoods[0].name} />
              <Price value={fakeGoods[0].price} oldPrice={"300"} />
              <TruncatedText lines={2} />
              <SizeSelect />
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
          {/* <div className={styles.suggestion}>
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
          </div> */}
          {fakeGoods.slice(0, 4).map(good => {
            return (
              <ProductCard {...good} />
            )
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;
