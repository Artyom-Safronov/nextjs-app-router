import { Box, Link, Modal, Typography } from "@mui/material";
import { Select } from "../select/Select";
import { useState } from "react";

export const SizeSelect = () => {
  const onSizeChartLinkClick = () => {};

  return (
    <Select
      label="Size:"
      options={[]}
      link={<SizeChartModal />}
    />
  );
};

type SizeChartLinkProps = {
  onClick: () => void;
};

const SizeChartLink = ({ onClick }: SizeChartLinkProps) => {
  return (
    <Link
      variant="caption"
      underline="none"
      href="javascript:void(0)"
      onClick={onClick}
    >
      Size chart
    </Link>
  );
};

type SizeChartModalProps = {};

const SizeChartModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SizeChartLink onClick={() => setOpen(!open)} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={400}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export const sizes = {
  xs: {
    int: "xs",
    us: 10,
    eu: 11,
  },
  s: {
    int: "s",
    us: 10,
    eu: 11,
  },
  m: {
    int: "m",
    us: 10,
    eu: 11,
  },
  l: {
    int: "l",
    us: 10,
    eu: 11,
  },
  xl: {
    int: "xl",
    us: 10,
    eu: 11,
  },
};
