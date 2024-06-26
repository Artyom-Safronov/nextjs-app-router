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
  position?: Position;
};

export const Slider = ({ slides, position = "left" }: SliderPorps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const onSelectSlide = (src: string) => {
    if (imgRef.current) {
      imgRef.current.srcset = src;
    }
  };

  return (
    <Box className={styles.cardImage}>
      <Stack
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
          <Thumbnails slides={slides} onSelect={onSelectSlide} />
        </Stack>
        <Image
          src={slides[0].fullImageSrc}
          alt={"Next Image"}
          width={640}
          height={480}
          ref={imgRef}
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

// const directionMap: Record<
//   Position,
//   {
//     slider: "row" | "row-reverse" | "column" | "column-reverse",
//     thumbs: "row" | "row-reverse" | "column" | "column-reverse",
//   }
// > = {
//   top: {
//     slider: "column",
//     thumbs: "row",
//   },
//   right: {
//     slider: "row-reverse",
//     thumbs: "column",
//   },
//   bottom: {
//     slider: "column-reverse",
//     thumbs: "row",
//   },
//   left: {
//     slider: "row",
//     thumbs: "column",
//   },
// };
