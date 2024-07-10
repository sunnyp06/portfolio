import CodeIcon from "@mui/icons-material/Code";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import WebIcon from "@mui/icons-material/Web";
import { Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const cardStyle = { px: 2, py: 2 };
const iconStyle = {
  bgcolor: "primary.main",
  borderRadius: "30px",
  px: 2,
  py: 1,
  boxSizing: "content-box",
};

function SkillsGrid() {
  return (
    <Grid2 container spacing={2} sx={{ mt: 20, mb: 4 }}>
      <Grid2 sm={12} md={4}>
        <Paper sx={cardStyle}>
          <Grid2 container spacing={2}>
            <Grid2 xs={12} display="flex" justifyContent="center">
              <WebIcon fontSize="large" htmlColor="white" sx={iconStyle} />
            </Grid2>
            <Grid2 xs={12} display="flex" justifyContent="center">
              <Typography variant="h6" align="center">
                Frontend
              </Typography>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
      <Grid2 sm={12} md={4}>
        <Paper sx={cardStyle}>
          <Grid2 container spacing={2}>
            <Grid2 xs={12} display="flex" justifyContent="center">
              <CodeIcon fontSize="large" htmlColor="white" sx={iconStyle} />
            </Grid2>
            <Grid2 xs={12} display="flex" justifyContent="center">
              <Typography variant="h6" align="center">
                Backend
              </Typography>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
      <Grid2 sm={12} md={4}>
        <Paper sx={cardStyle}>
          <Grid2 container spacing={2}>
            <Grid2 xs={12} display="flex" justifyContent="center">
              <SsidChartIcon
                fontSize="large"
                htmlColor="white"
                sx={iconStyle}
              />
            </Grid2>
            <Grid2 xs={12} display="flex" justifyContent="center">
              <Typography variant="h6" align="center">
                Quantitative
              </Typography>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
    </Grid2>
  );
}

export default SkillsGrid;
