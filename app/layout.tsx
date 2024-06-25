import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@mui/material";
import styles from "./styles.module.scss";
import { inter } from "@/font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className={styles.wrapper}>
          <Content>
            <Container>{children}</Container>
          </Content>
          <Footer />
        </div>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>Header</Container>
    </header>
  );
};

type ContentProps = {
  children: JSX.Element;
};

const Content = ({ children }: ContentProps) => {
  return <div className={styles.page}>{children}</div>;
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>Footer</Container>
    </footer>
  );
};
