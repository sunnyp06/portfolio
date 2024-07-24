"use client";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SxProps, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItemStyle: SxProps = {
  py: "8px",
  px: "32px",
  borderRadius: "25px",
  minHeight: { xs: 0 },
  "&:hover": { bgcolor: "transparent" },
};

const links = [
  { href: "/", label: "Work" },
  { href: "/about-me", label: "About" },
];

function NavBar() {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <AppBar
      // TODO change back to "fixed" position and fix animation bug
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
        top: 8,
      }}
    >
      <Container disableGutters sx={{ width: "fit-content" }}>
        <Toolbar
          disableGutters
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            minHeight: { xs: 0 },
            flexShrink: 0,
            borderRadius: "25px",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            border: "1px solid",
            borderColor: "divider",
          })}
        >
          {links.map((link) => (
            <MenuItem
              key={link.href}
              sx={menuItemStyle}
              component={Link}
              href={link.href}
              id={link.href}
            >
              <Typography variant="body1" color="text.primary">
                {link.label}
              </Typography>
              {pathname === link.href && (
                <motion.div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    backgroundColor: theme.palette.action.selected,
                    borderRadius: "25px",
                  }}
                  id="motion-span"
                  layoutId="currentPage"
                />
              )}
            </MenuItem>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
