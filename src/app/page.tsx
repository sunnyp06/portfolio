import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Stack spacing={2}>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Hi. I&apos;m Sunny.
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Product-focused Full Stack Developer
        </Typography>
      </Stack>
    </main>
  );
}
