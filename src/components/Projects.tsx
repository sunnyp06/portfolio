"use client";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import AltruistLogo from "../../public/altruist.svg";
import BamLogo from "../../public/bam.png";
import {
  Info,
  InfoEyebrow,
  InfoSubtitle,
  InfoTitle,
} from "../mui-treasury/info-basic";
import { getInfoN03Styles } from "../mui-treasury/info-n03";
import AnimatedCard, { ModalCardProps } from "./AnimatedCard";
import { cardConfig } from "./cardConfig";
import PreviewCard from "./PreviewCard";

const AltruistModalCard: React.FC<ModalCardProps> = ({ onClose }) => (
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
            src={AltruistLogo}
            alt="Altruist logo"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
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
        <InfoEyebrow>Altruist Corp</InfoEyebrow>
        <InfoTitle>React</InfoTitle>
        <InfoSubtitle>
          A JavaScript library for building user interfaces. Build encapsulated
          components that manage their own state, then compose them to make
          complex UIs.
        </InfoSubtitle>
      </Info>
    </CardContent>
  </Card>
);

const BamModalCard: React.FC<ModalCardProps> = ({ onClose }) => (
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
            src={BamLogo}
            alt="Balyasny Asset Management logo"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
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
        <InfoEyebrow>Balyasny Asset Management</InfoEyebrow>
        <InfoTitle>React</InfoTitle>
        <InfoSubtitle>
          A JavaScript library for building user interfaces. Build encapsulated
          components that manage their own state, then compose them to make
          complex UIs.
        </InfoSubtitle>
      </Info>
    </CardContent>
  </Card>
);

const modalCardMap = {
  "portfolio-analytics": AltruistModalCard,
  "altruist-2": AltruistModalCard,
  "bam-1": BamModalCard,
};

function Projects() {
  return (
    <Container maxWidth="xl" sx={{ mt: 6 }}>
      <Typography variant="h3" align="center">
        Select Projects
      </Typography>
      <Grid2 container spacing={4} sx={{ mt: 6 }}>
        {Object.values(cardConfig).map((config) => (
          <Grid2 key={config.id} xs={12} sm={6} md={4}>
            <AnimatedCard
              id={config.id}
              PreviewCard={() => <PreviewCard {...config.previewCard} />}
              ModalCard={modalCardMap[config.id]}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Projects;
