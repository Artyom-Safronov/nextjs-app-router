import { ButtonBase, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import Link from "next/link";

type MenuItem = {
  label: string;
  link: string;
};

type MenuProps = {
  items: MenuItem[];
};

export const Menu = ({ items }: MenuProps) => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {items?.map((item) => {
          return (
            <Link href={item.link} className={styles.link}>
              <ButtonBase>
                <Typography py={1} px={2}>
                  {item.label}
                </Typography>
              </ButtonBase>
            </Link>
          );
        })}
      </Stack>
    </div>
  );
};
