import { SvgIconComponent } from "@mui/icons-material";
import { Link, SxProps } from "@mui/material";
import React from "react";

interface IconLinkProps {
  href: string;
  icon: SvgIconComponent;
  fontSize?: number | string;
  sx?: SxProps;
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  icon: Icon,
  fontSize = "inherit",
  sx,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener"
    display="flex"
    alignItems="center"
    color="inherit"
    sx={{ ml: 0.5, ...sx }}
  >
    <Icon sx={{ fontSize: fontSize }} />
  </Link>
);

export default IconLink;
