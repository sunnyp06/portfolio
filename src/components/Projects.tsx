import AnimatedCard from "@/mui-treasury/card-project/AnimatedCard";
import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Projects() {
  return (
    <Container maxWidth="xl" sx={{ mt: 6 }}>
      <Typography variant="h3" align="center">
        Select Projects
      </Typography>
      <Grid2 container spacing={4} sx={{ mt: 6 }}>
        <Grid2 xs={12} sm={6} md={4}>
          <AnimatedCard id="1" />
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <AnimatedCard id="2" />
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <AnimatedCard id="3" />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Projects;
