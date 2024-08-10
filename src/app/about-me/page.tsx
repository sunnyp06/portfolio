import { Container, Divider, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";

export default function AboutMe() {
  return (
    <main>
      <Container
        maxWidth="xl"
        sx={{ mt: 10, display: "flex", justifyContent: "center" }}
      >
        <Grid2 container spacing={4} maxWidth="lg">
          <Grid2
            xs={12}
            sm={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/profile-photo.png"
              width={1398}
              height={1398}
              // TODO investigate performance impact
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              alt="profile photo"
              style={{
                width: "75%",
                height: "auto",
                borderRadius: "999px",
              }}
            />
          </Grid2>
          <Grid2 xs={12} sm={6} display="flex" alignItems="center">
            <Stack spacing={2}>
              <Typography variant="h3">
                I&apos;m a software engineer based in NYC.
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </Typography>
              <Typography variant="body1">
                Outside work, you can find me running, climbing, or listening to
                or making music.
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth="xl">
        <Divider sx={{ mt: 6 }} />
      </Container>
    </main>
  );
}
