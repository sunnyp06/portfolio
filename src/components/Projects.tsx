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

const AltruistPreviewCard: React.FC = () => (
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
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 14,
            color: "grey.500",
            letterSpacing: "1px",
          }}
        >
          7 minutes
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

const BamPreviewCard: React.FC = () => (
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
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 14,
            color: "grey.500",
            letterSpacing: "1px",
          }}
        >
          7 minutes
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

const projectsToCards = [
  {
    id: "altruist-1",
    PreviewCard: AltruistPreviewCard,
    ModalCard: AltruistModalCard,
  },
  {
    id: "altruist-2",
    PreviewCard: AltruistPreviewCard,
    ModalCard: AltruistModalCard,
  },
  { id: "bam-1", PreviewCard: BamPreviewCard, ModalCard: BamModalCard },
];

function Projects() {
  return (
    <Container maxWidth="xl" sx={{ mt: 6 }}>
      <Typography variant="h3" align="center">
        Select Projects
      </Typography>
      <Grid2 container spacing={4} sx={{ mt: 6 }}>
        {projectsToCards.map((project) => (
          <Grid2 key={project.id} xs={12} sm={6} md={4}>
            <AnimatedCard
              id={project.id}
              PreviewCard={project.PreviewCard}
              ModalCard={project.ModalCard}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Projects;
