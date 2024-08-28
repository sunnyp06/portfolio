import { Box, Card, CardContent, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Info,
  InfoEyebrow,
  InfoSubtitle,
  InfoTitle,
} from "../mui-treasury/info-basic";
import { getInfoN03Styles } from "../mui-treasury/info-n03";

export interface PreviewCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  year: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({
  imageSrc,
  imageAlt,
  year,
  eyebrow,
  title,
  subtitle,
}) => (
  <Card
    variant="outlined"
    sx={{
      borderRadius: "20px",
    }}
  >
    <Box sx={{ minWidth: 256 }}>
      <Box
        sx={{
          px: 3,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            my: 1,
            width: 80,
            height: "auto",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 14,
            color: "grey.500",
            letterSpacing: "1px",
          }}
        >
          {year}
        </Typography>
      </Box>
      <Box
        component="hr"
        sx={{
          mt: 0,
          backgroundColor: "grey.200",
          mb: 1,
        }}
      />
    </Box>
    <CardContent sx={{ p: 3 }}>
      <Info useStyles={getInfoN03Styles}>
        <InfoEyebrow>{eyebrow}</InfoEyebrow>
        <InfoTitle>{title}</InfoTitle>
        <InfoSubtitle>{subtitle}</InfoSubtitle>
      </Info>
    </CardContent>
  </Card>
);

export default PreviewCard;
