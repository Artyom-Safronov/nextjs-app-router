import { Box, Chip, Fade, IconButton, Zoom } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import styles from "./styles.module.scss";
import { useState } from "react";

type AdvantageChipProps = {
  title: string;
  coords: {
    x: number;
    y: number;
  }
};

export const AdvantageChip = ({ title, coords }: AdvantageChipProps) => {
  const [show, setShow] = useState(false);

  return (
    <Box className={styles.advantageChip} top={coords.y} left={coords.x}>
      <Box className={styles.buttonContainer}>
        <Zoom in={show}>
          <IconButton
            color="primary"
            size="large"
            onClick={() => setShow(false)}
            className={styles.iconButton}
          >
            <AddCircleRoundedIcon fontSize="inherit" />
          </IconButton>
        </Zoom>
        <Zoom in={!show}>
          <IconButton
            color="primary"
            size="small"
            onClick={() => setShow(true)}
            className={styles.iconButton}
          >
            <RemoveCircleRoundedIcon fontSize="inherit" />
          </IconButton>
        </Zoom>
      </Box>
      <Fade in={!show}>
        <Chip variant="filled" size="medium" color="primary" label={title} />
      </Fade>
    </Box>
  );
};
