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
    rel="noopener noreferrer"
    display="flex"
    alignItems="center"
    color="primary.main"
    sx={{
      ml: 1,
      // animation to slightly move the box vertically
      transition: "0.3s",
      "&:hover": {
        transform: "translateY(-3px)",
        color: "secondary.main",
      },
      ...sx,
    }}
  >
    <Icon
      sx={{
        fontSize: fontSize,
      }}
    />
  </Link>
);

export default IconLink;
