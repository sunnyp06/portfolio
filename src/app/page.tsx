import SkillsGrid from "@/components/SkillsGrid";
import { Container, Stack, Typography } from "@mui/material";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  return (
    <main>
      <Container
        maxWidth="xl"
        sx={{
          mt: 20,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h1" align="center">
            <Typewriter words={["Hi, I'm Sunny."]} typeSpeed={70}></Typewriter>
          </Typography>
          <Typography variant="h5" align="center">
            A Product-minded Full Stack Developer.
          </Typography>
        </Stack>
        <SkillsGrid />
      </Container>
      <Container
        sx={{
          bgcolor: "black",
          minWidth: "100%",
          p: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" color="white" align="center" maxWidth="md">
          I&apos;m curious, thrive on challenges, and am passionate about
          creating solutions that are both effective and impactful. As an
          engineer with breadth, I approach problems strategically, keeping
          business objectives in focus, and see ideas through from start to
          finish.
        </Typography>
      </Container>
    </main>
  );
}
