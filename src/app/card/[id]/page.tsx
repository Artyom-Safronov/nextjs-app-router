import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Slide, Slider } from "@/components/slider/Slider";
import { GoodFingerprint } from "@/components/good-fingerprint/GoodFingerprint";
import { Price } from "@/components/price/price";
import { TruncatedText } from "@/components/truncated-text/TruncatedText";
import { SizeSelect } from "@/components/size-select/SizeSelect";
import { ProductCard } from "@/components/product-card/ProductCard";
import { fakeGoods } from "@/mock";
import { AdvantageCard } from "@/components/advantage-card/AdvantageCard";
import ThumbUpIcon from "@mui/icons-material/ThumbUpOutlined";

export const fakeGoodImages: Slide[] = Array(4)
  .fill(null)
  .map((element) => {
    // const image = faker.image.urlPicsumPhotos({ blur: 1, grayscale: true });
    const image = "/nike-1.png";
    return {
      thumbnailSrc: image,
      fullImageSrc: image,
    };
  });

const Card = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={8}>
            <Slider slides={fakeGoodImages} position="left" />
          </Grid>
          <Grid xs={4}>
            <Box sx={{ height: "100%" }} className={styles.cardInfo}>
              <Stack
                direction="column"
                spacing={2}
                justifyContent="space-between"
              >
                <GoodFingerprint
                  brand={fakeGoods[0].brand}
                  name={fakeGoods[0].name}
                />
                <Price value={fakeGoods[0].price} oldPrice={"300"} />
                <TruncatedText lines={2} />
                <div>
                  <SizeSelect />
                  <div className={styles.optionsControl}>
                    Available options control
                  </div>
                  <Box textAlign={"center"} py={3}>
                    <Link
                      underline="none"
                      href="javascript:void(0)"
                    >
                      <Typography variant="subtitle2">Read more</Typography>
                    </Link>
                  </Box>
                  <Button color="secondary" variant="contained" fullWidth>
                    Order
                  </Button>
                </div>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.advantages}>
        <Stack direction="row" justifyContent={"space-between"}>
          <AdvantageCard
            icon={<ThumbUpIcon />}
            title="Guarantee"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit."
            }
          />
          <AdvantageCard
            icon={<ThumbUpIcon />}
            title="Fast"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit."
            }
          />
          <AdvantageCard
            icon={<ThumbUpIcon />}
            title="Free exchange"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit."
            }
          />
          <AdvantageCard
            icon={<ThumbUpIcon />}
            title="Professional support"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit."
            }
          />
        </Stack>
      </Box>
      <Box className={styles.suggestions}>
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          You might also like
        </Typography>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"space-between"}
          marginTop={2}
          marginBottom={8}
        >
          {fakeGoods.slice(0, 4).map((good) => {
            return <ProductCard {...good} />;
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;
