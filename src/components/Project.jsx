import React from "react";
import Cards from "./Cards";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import "./Style.css";
import myportfolio from "../Assets/Portfolo.png"
import profile from "../Assets/profile.png";
import todo from "../Assets/todolist.png";
import AdminPanal from "../Assets/Admin-Panel-Dashboard.png";
import pizza from "../Assets/Charlestown-Pizza.png";
import reactApp from "../Assets/React-App-netflix-clone.png";
import olx from "../Assets/olx-clone image.png";
import homeDecurations from "../Assets/Gridlinesbuilders.png";
const Project = (props) => {
  return (
    <Grid mt={1}
    className="ProjectPageBG"
      lg={12}
      container
      direction="row"
      justifyContent="center"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Box sx={{ m:4 }}>
        <Cards
          title="netflix clone"
          description="This is the react project and the netflix clone application. "
          bg="rgb(215, 163, 18)"
          image = {reactApp}
          alt="green iguana"
          sharelink="https://www.netflix.com/pk/"
        />
      </Box>
      <Box sx={{ m:4 }}>
        <Cards
          title="Portfolio"
          description="This is the portfolio project that display my all achievements. "
          bg="rgb(215, 163, 18)"
          image = {myportfolio}
          alt="green iguana"
          sharelink="https://www.google.com/"
        />
      </Box>
      <Box sx={{ m:4 }}>
        <Cards
          title="Admin Panel Dashboard"
          description="This is the dashboard that is used to display all the changes in GUI."
          bg="rgb(215, 163, 18)"
          image = {AdminPanal}
          alt="green iguana"
          sharelink="https://eduadmin-template.multipurposethemes.com/bs4/main/index.html"
        />
      </Box>
      <Box sx={{ m:4 }}>
        <Cards
          title="Profile"
          description="This is the react project of instagram profile clone."
          bg="rgb(215, 163, 18)"
          image = {profile}
          alt="green iguana"
          sharelink="https://preview.enableds.com/product/?theme=theprofile"
        />
      </Box>
      <Box sx={{ m:4 }}>
        <Cards
          title="pizza app"
          description="This is react based project that for the fast food processing. "
          bg="rgb(215, 163, 18)"
          image = {pizza}
          alt="green iguana"
          sharelink="http://preview.themeforest.net/item/slices-pizza-restaurant-html-template/full_screen_preview/25760641?_ga=2.248605767.1567199449.1682789154-1391911485.1668962734&_gac=1.90510056.1682789154.Cj0KCQjwgLOiBhC7ARIsAIeetVBdudSk-SWBR2jIkp2XGeZAcrG0bHFG5pSYVHKYuuwVEwz3AAnpiOsaAtU1EALw_wcB"
        />
      </Box>
      <Box sx={{ m:4 }}>
        <Cards
          title="Todo app"
          description="This is the react based project todo list app."
          bg="rgb(215, 163, 18)"
          image = {todo}
          alt="green iguana"
          sharelink="https://www.google.com/"
        />
      </Box>
      <Box sx={{ m:4 }}>
        <Cards
          title="Olx clone"
          description="This is the react based project application for olx clone. "
          bg="rgb(215, 163, 18)"
          image = {olx}
          alt="green iguana"
          sharelink="https://www.olx.com/"
        />
      </Box>
      <Box sx={{ m:4 }}>
        <Cards
          title="Home decuration app"
          description="This is the home decuration application that will help you to decure your home"
          bg="rgb(215, 163, 18)"
          image = {homeDecurations}
          alt="green iguana"
          sharelink="https://homedecor-workdo.myshopify.com/"
        />
      </Box>
      
    </Grid>
  );
};

export default Project;
