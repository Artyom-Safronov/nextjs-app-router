import { Typography } from "@mui/material";
import styles from "./styles.module.scss";

type TruncatedTextProps = {
  lines: number;
}

export const TruncatedText = ({lines}: TruncatedTextProps) => {
  return <Typography className={styles.trucatedText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ea voluptas voluptate velit aut expedita officiis sed hic adipisci earum consectetur corrupti sint aspernatur quos, excepturi a sit iure asperiores.</Typography>
}