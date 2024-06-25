import styles from "./styles.module.scss";

type ContentProps = {
  children: JSX.Element;
};

export const Content = ({ children }: ContentProps) => {
  return <div className={styles.page}>{children}</div>;
};
