import styles from "./styles.module.scss";
import ProfileIcon from "@mui/icons-material/PersonOutlined";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeliveryIcon from "@mui/icons-material/DeliveryDiningOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import { Container, Typography } from "@mui/material";
import { Stack, Paper } from "@mui/material";
import Image from "next/image";
import { menuItems } from "@/mock";
import { BadgedButton } from "@/components/badged-button/BadgedButton";
import { Menu } from "@/components/menu/Menu";
import { Search } from "@/components/search/Search";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerTop}>
          <Search />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-around"
            alignItems="center"
          >
            <Typography>Delivery</Typography>
            <Typography>Tarde-in</Typography>
            <Image src={"/logo.png"} alt="Logo" width={250} height={70} className={styles.logo} />
            <Typography>Pickup</Typography>
            <Typography>Stock</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-around"
            alignItems="center"
          >
            <BadgedButton icon={<DeliveryIcon />} />
            <BadgedButton icon={<NotificationsIcon />} />
            <BadgedButton icon={<CartIcon />} />
            <BadgedButton icon={<ProfileIcon />} />
          </Stack>
        </div>
        <div className={styles.headerBottom}>
          <Menu items={menuItems} />
        </div>
      </Container>
    </header>
  );
};
