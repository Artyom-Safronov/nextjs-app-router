import { Modal, Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element
}

export const BaseModal = ({open, onClose, children}: BaseModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Box width={400} height={300} bgcolor={"background.default"} className={styles.modalContent}>
        {children}
      </Box>
    </Modal>
  );
};
