import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Card, CardContent } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Info, InfoEyebrow, InfoTitle } from "../../mui-treasury/info-basic";
import { getInfoN03Styles } from "../../mui-treasury/info-n03";

export interface ModalCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  imageHref: string;
  eyebrow: string;
  title: string;
  Content: React.FC;
  onClose: () => void;
}

const ModalCard: React.FC<ModalCardProps> = ({
  imageSrc,
  imageAlt,
  imageHref,
  eyebrow,
  title,
  Content,
  onClose,
}) => (
  <Card
    variant="outlined"
    sx={{
      borderRadius: "20px",
      maxWidth: "md",
      maxHeight: "90vh",
      overflowY: "auto",
      overflowX: "hidden",
    }}
  >
    <Box>
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
            mb: 1,
            mt: 2,
            width: 80,
            height: "auto",
          }}
        >
          <Link href={imageHref} target="_blank">
            <Image
              src={imageSrc}
              alt={imageAlt}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Link>
        </Box>
        <Button
          onClick={onClose}
          sx={{ borderRadius: "20px", p: 0, minWidth: 0 }}
        >
          <CloseIcon sx={{ m: 1 }} />
        </Button>
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
        <Content />
      </Info>
    </CardContent>
  </Card>
);

export default ModalCard;
