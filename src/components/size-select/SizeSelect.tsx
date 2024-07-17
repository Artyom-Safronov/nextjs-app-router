"use client";

import {
  Box,
  Link,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Select } from "../select/Select";
import { useState } from "react";
import { BaseModal } from "../base-modal/BaseModal";

export const SizeSelect = () => {
  const onSizeChartLinkClick = () => {};

  return (
    <Select
      label="Size:"
      options={Object.values(sizes).map((size) => ({
        id: size.int,
        label: size.int,
      }))}
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
      <BaseModal open={open} onClose={handleClose}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Integer</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>US</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>EU</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(sizes).map((size) => (
              <TableRow
                key={size.int}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {size.int}
                </TableCell>
                <TableCell align="right">{size.us}</TableCell>
                <TableCell align="right">{size.eu}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </BaseModal>
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
