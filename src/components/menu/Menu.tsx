import { Button, ButtonBase, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

type MenuItem = {
  label: string;
  link: string;
};

type MenuProps = {
  items: MenuItem[];
};

export const Menu = ({ items }: MenuProps) => {
  const router = useRouter();

  return (
    <div>
      <Stack
        direction="row"
        // spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {items?.map((item) => {
          return (
            <ButtonBase
              className={styles.link}
              onClick={() => router.push(item.link)}
            >
              <Typography py={1} px={2}>{item.label}</Typography>
            </ButtonBase>
          );
        })}
      </Stack>
    </div>
  );
};
