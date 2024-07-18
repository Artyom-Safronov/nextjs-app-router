import { Badge, IconButton } from "@mui/material";

type BadgedButtonProps = {
  icon: JSX.Element;
  badgeContent?: number;
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
  badgeContent = 0,
  onClick,
  badgeColor = "primary",
}: BadgedButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      <Badge badgeContent={badgeContent} color={badgeColor}>
        {icon}
      </Badge>
    </IconButton>
  );
};
