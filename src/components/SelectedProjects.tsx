import { Container, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function SelectedProjects() {
  return (
    <Container maxWidth="lg">
      <Divider sx={{ mb: 2 }} />
      <Typography variant="h4">Selected Projects</Typography>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} sm={12} md={4}></Grid2>
      </Grid2>
    </Container>
  );
}

export default SelectedProjects;
