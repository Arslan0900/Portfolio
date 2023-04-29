import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import React from "react";
import WebDesignerImage from "../Assets/Web-designer-1024x821.webp";
// import IMGE from "../Assets/1490.gif";
import WebDesignerImage2 from "../Assets/web-removebg-preview.png";
import Text from "./Text";
import "./Style.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const HomePage = () => {
  return (
    <div className="Home_Page1">
      {/* <img width={30} height={30} src={IMGE}/> */}
      <Grid
        container
        spacing={1}
        sx={{ alignItems: "center", justifyContent: "center", mt: 8 }}
        className="Home_Page2"
      >
        <Grid item xs={6}>
          <Typography
            variant="h4"
            align="center"
            className="Home_page3"
            sx={{ display: { xs: "none", md: "grid" } }}
          >
            My name is Arslan
            <div style={{ display: "block" }}>And I'm a</div>
          </Typography>
          <Typography variant="h4" align="center">
            <Text />
          </Typography>
          <Grid align="center" sx={{ mt: 2 }}>
            <Button
              variant="inherite"
              onClick={() => {
                window.open("https://github.com/");
              }}
            >
             <GitHubIcon />
            </Button>
            <Button
              variant="inherite"
              onClick={() => {
                window.open("https://www.linkedin.com/feed/");
              }}
            >
              <LinkedInIcon />
            </Button>
            <Button
              variant="inherite"
              onClick={() => {
                window.open("https://twitter.com/");
              }}
            >
              <TwitterIcon />
            </Button>
            <Button
              variant="inherite"
              onClick={() => {
                window.open("https://www.instagram.com/");
              }}
            >
              <InstagramIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={5} sx={{ display: { xs: "none", md: "grid" } }}>
          <img
            width="450px"
            height="400px"
            src={WebDesignerImage}
            alt="exampleImage"
          />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent:"center",display: { xs: "grid", md: "none" } }}>
          <img
            width="370px"
            height="300px"
            src={WebDesignerImage2}
            alt="exampleImage"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
