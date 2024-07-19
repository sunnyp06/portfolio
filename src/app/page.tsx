import SkillsGrid from "@/components/SkillsGrid";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Stack spacing={2}>
        <Typography variant="h1" align="center">
          Hi, I&apos;m Sunny.
        </Typography>
        <Typography variant="h5" align="center">
          A Product-minded Full Stack Developer.
        </Typography>
        {/* <Typography variant="body1" align="center">
          I&apos;m curious, thrive on challenges, and am passionate about
          creating solutions that are both effective and impactful. As an
          engineer with breadth, I approach problems strategically, keeping
          business objectives in focus, and see ideas through from start to
          finish.
        </Typography> */}
      </Stack>
      <SkillsGrid />
      {/* <SelectedProjects /> */}
    </main>
  );
}
