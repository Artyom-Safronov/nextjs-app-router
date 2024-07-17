import { Badge, IconButton } from "@mui/material";

type BadgedButtonProps = {
  icon: JSX.Element;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  onClick?: () => void;
};

export const BadgedButton = ({
  icon,
  onClick,
  badgeColor = "primary",
}: BadgedButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      <Badge badgeContent={2} color={badgeColor}>
        {icon}
      </Badge>
    </IconButton>
  );
};
