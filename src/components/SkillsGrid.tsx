"use client";
import CodeIcon from "@mui/icons-material/Code";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import WebIcon from "@mui/icons-material/Web";
import { Paper, SxProps, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const paperStyle: SxProps = {
  px: 2,
  py: 2,
  borderRadius: "20px",
  boxShadow: "0 0 10px 0 rgba(0,0,0,0.06)",
};
const iconStyle: SxProps = {
  bgcolor: "black",
  borderRadius: "30px",
  px: 2,
  py: 1,
  boxSizing: "content-box",
};

function SkillsGrid() {
  return (
    <Grid2 container spacing={2} sx={{ mt: 20, mb: 4 }}>
      <Grid2 xs={12} sm={12} md={4}>
        <FrontEnd />
      </Grid2>
      <Grid2 xs={12} sm={12} md={4}>
        <Backend />
      </Grid2>
      <Grid2 xs={12} sm={12} md={4}>
        <QuantitativeAndProduct />
      </Grid2>
    </Grid2>
  );
}

function FrontEnd() {
  const technologiesAndTools = [
    "React",
    "Redux",
    "Next.js",
    "Node.js",
    "plotly Dash",
    "Bootstrap CSS",
    "Material UI",
    "Figma",
  ];
  return (
    <Paper variant="outlined" sx={paperStyle}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <WebIcon fontSize="large" htmlColor="white" sx={iconStyle} />
        </Grid2>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <Typography variant="h5" align="center">
            Frontend
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="body1" align="center">
            <span style={{ fontWeight: 600 }}>Technologies & Tools:&nbsp;</span>
          </Typography>
          {technologiesAndTools.map((tool, index) => (
            <Typography key={index} variant="body1" align="center">
              {tool}
            </Typography>
          ))}
        </Grid2>
      </Grid2>
    </Paper>
  );
}

function Backend() {
  const technologiesAndTools = [
    "Git",
    "Spring",
    "FastAPI",
    "GraphQL",
    "Airflow",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Helm",
    "Nginx",
    "AWS",
  ];
  return (
    <Paper variant="outlined" sx={paperStyle}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <CodeIcon fontSize="large" htmlColor="white" sx={iconStyle} />
        </Grid2>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <Typography variant="h5">Backend</Typography>
        </Grid2>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <Typography variant="body1">
            <span style={{ fontWeight: 600 }}>Languages:&nbsp;</span>
            Python, Java, SQL, C
          </Typography>
        </Grid2>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <Typography variant="body1" align="center">
            <span style={{ fontWeight: 600 }}>Data:&nbsp;</span>
            RDBMS, OLTP databases, data warehouses, dbt, replication, migration
            frameworks
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="body1" align="center">
            <span style={{ fontWeight: 600 }}>Technologies & Tools:&nbsp;</span>
          </Typography>
          {technologiesAndTools.map((tool, index) => (
            <Typography key={index} variant="body1" align="center">
              {tool}
            </Typography>
          ))}
        </Grid2>
      </Grid2>
    </Paper>
  );
}

function QuantitativeAndProduct() {
  const skills = [
    "Data visualization",
    "Time series analysis",
    "Linear algebra",
    "Statistics",
  ];
  return (
    <Paper variant="outlined" sx={paperStyle}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <SsidChartIcon fontSize="large" htmlColor="white" sx={iconStyle} />
        </Grid2>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <Typography variant="h5" align="center">
            Product & Quantitative
          </Typography>
        </Grid2>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <Typography variant="body1" align="center">
            I&apos;ve worked across diverse domains in technology and finance to
            support investment, research, and cross-functional product teams.
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="body1" align="center">
            <span style={{ fontWeight: 600 }}>Skills:&nbsp;</span>
          </Typography>
          {skills.map((tool, index) => (
            <Typography key={index} variant="body1" align="center">
              {tool}
            </Typography>
          ))}
        </Grid2>
        <Grid2 xs={12} display="flex" justifyContent="center">
          <Typography variant="body1">
            <span style={{ fontWeight: 600 }}>Tools:&nbsp;</span>
            Pandas, SciPy, scikit learn
          </Typography>
        </Grid2>
      </Grid2>
    </Paper>
  );
}

export default SkillsGrid;
