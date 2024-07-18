import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Fade } from "@mui/material";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Like = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Box className={styles.likeContainer}>
      <Fade in={!liked}>
        <FavoriteBorderIcon onClick={() => setLiked(true)} className={styles.icon} />
      </Fade>
      <Fade in={liked}>
        <FavoriteIcon onClick={() => setLiked(false)} className={styles.icon} />
      </Fade>
    </Box>
  )
}