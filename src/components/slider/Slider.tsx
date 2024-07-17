"use client";

import { Box, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";

export type Slide = {
  thumbnailSrc: string;
  fullImageSrc: string;
};

type Position = "top" | "right" | "bottom" | "left";

export type SliderPorps = {
  slides: Slide[];
  position: Position;
};

export const Slider = ({ slides, position }: SliderPorps) => {
  const [imgSrc, setImgSrc] = useState<string>(slides[0].fullImageSrc);

  return (
    <Box className={styles.cardImage}>
      <Stack
        direction={directionMap[position].slider}
        spacing={2}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Stack
          className={styles.previewBlock}
          direction={directionMap[position].thumbs}
          spacing={2}
          justifyContent={"space-around"}
        >
          <Thumbnails slides={slides} onSelect={setImgSrc} />
        </Stack>
        <Image
          src={imgSrc}
          alt={"Next Image"}
          width={640}
          height={480}
        />
      </Stack>
    </Box>
  );
};

const Thumbnails = ({
  slides,
  onSelect,
}: {
  slides: Slide[];
  onSelect: (src: string) => void;
}) => {
  const [selected, setSelected] = useState(slides[0].thumbnailSrc);

  const handleClick = (src: string) => {
    setSelected(src);
    onSelect(src);
  };

  return slides.map((slide) => {
    return (
      <div
        className={styles.previewItem}
        key={slide.thumbnailSrc}
        data-selected={slide.thumbnailSrc === selected}
        onClick={() => handleClick(slide.thumbnailSrc)}
      >
        <Image
          src={slide.thumbnailSrc}
          alt={"Next Image"}
          width={128}
          height={96}
        />
      </div>
    );
  });
};

const directionMap: Record<
  Position,
  {
    slider: "row" | "row-reverse" | "column" | "column-reverse",
    thumbs: "row" | "row-reverse" | "column" | "column-reverse",
  }
> = {
  top: {
    slider: "column",
    thumbs: "row",
  },
  right: {
    slider: "row-reverse",
    thumbs: "column",
  },
  bottom: {
    slider: "column-reverse",
    thumbs: "row",
  },
  left: {
    slider: "row",
    thumbs: "column",
  },
};
