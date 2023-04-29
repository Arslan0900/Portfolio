import { Container, Typography } from "@mui/material";
import React from "react";
import "./Style.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <>
      <Container className="aboutPage" sx={{ mt: 8, width: "100vw" }}>
        <Grid
          container
          direction="row"
          // justifyContent="center"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Typography>
            <h1>AboutMe</h1>
          </Typography>
          <Box>
            I'm a self-taught Front End developer from Pakistan. I build
            websites with a focus on providing the experience for everyone using
            them and responsiveness. Curious to learn more about developing
            scalable distribution systems, love problem solving, and care about
            writing and maintainable code. A responsive design makes your
            website accessible to all users, regardless of their devices.
          </Box>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Box sx={{ fontSize: "28px", textTransform: "uppercase", mt: 7 }}>
              Skills
            </Box>
            <Box component="ul" sx={{ pl: 2 }}>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
            </Box>
          </Grid>
          <Grid xs={6} md={6} lg={3}>
            <Box component="ul" sx={{ pl: 2, mt: 14 }}>
              <li>React js</li>
              <li>Material ui</li>
              <li>Git Hub</li>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
