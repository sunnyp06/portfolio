import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import IconLink from "./IconLink";

const Footer: React.FC = () => {
  return (
    <Container sx={{ minHeight: "15vh", py: 4 }} maxWidth="xl">
      {/* TODO keep divider or not */}
      {/* <Divider /> */}
      <Grid2 container spacing={2} sx={{ py: 2 }}>
        <Grid2 sm={12} md="auto" display="flex" alignItems="center">
          <Typography variant="body2" align="left">
            Handcrafted by Sunny Ughareja. Source code
          </Typography>
          <IconLink
            href="https://github.com/sunnyp06/portfolio"
            icon={GitHubIcon}
            fontSize={24}
          />
        </Grid2>
        <Grid2
          sm={12}
          smOffset={0}
          md="auto"
          mdOffset="auto"
          display="flex"
          alignItems="center"
        >
          <Typography variant="body2" align="left">
            sunnyp06@gmail.com
          </Typography>
          <IconLink
            href="mailto:sunnyp06@gmail.com"
            icon={EmailIcon}
            fontSize={24}
          />
          <IconLink
            href="https://www.linkedin.com/in/sunny-ughareja/"
            icon={LinkedInIcon}
            fontSize={24}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Footer;
