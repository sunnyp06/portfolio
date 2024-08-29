"use client";
import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AnimatedCard from "./AnimatedCard";
import ModalCard from "./ModalCard";
import PreviewCard from "./PreviewCard";
import { projectCardConfig } from "./projectCardConfig";

function Projects() {
  return (
    <Container maxWidth="xl" sx={{ mt: 6 }}>
      <Typography variant="h3" align="center">
        Select Projects
      </Typography>
      <Grid2 container spacing={4} sx={{ mt: 6 }}>
        {Object.values(projectCardConfig).map((config) => (
          <Grid2 key={config.id} xs={12} sm={6} md={4}>
            <AnimatedCard
              id={config.id}
              PreviewCard={() => <PreviewCard {...config.previewCard} />}
              ModalCard={({ onClose }) => (
                <ModalCard {...config.modalCard} onClose={onClose} />
              )}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Projects;
