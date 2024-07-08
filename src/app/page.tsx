import CodeIcon from "@mui/icons-material/Code";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import WebIcon from "@mui/icons-material/Web";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const cardStyle = { px: 2, py: 2 };
const iconStyle = {
  bgcolor: "primary.main",
  borderRadius: "30px",
  px: 2,
  py: 1,
  boxSizing: "content-box",
};

export default function Home() {
  return (
    <main>
      <Stack spacing={2}>
        <Typography variant="h1" align="center">
          Hi, I&apos;m Sunny.
        </Typography>
        <Typography variant="h5" align="center">
          A Product-focused Full Stack Developer.
        </Typography>
        <Typography variant="body1" align="center">
          I&apos;m curious, thrive on challenges, and am passionate about
          creating solutions that are both effective and impactful. As an
          engineer with breadth, I approach problems strategically, keeping
          business objectives in focus, and see ideas through from conception to
          long after implementation.
        </Typography>
      </Stack>
      <Grid2 container spacing={2} sx={{ mt: 4, mb: 4 }}>
        <Grid2 xs={12} sm={4}>
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
        <Grid2 xs={12} sm={4}>
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
        <Grid2 xs={12} sm={4}>
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
      <Divider />
    </main>
  );
}
