import { Box, Button, Container, } from "@mui/material";
import React from "react";

const Contect = () => {
  return (
    <Container sx={{ mt: 12, fontFamily: "Segoe UI", color: "black" }}>
        <Box sx={{ fontSize: 44, textAlign: "center" }}>Get In Touch</Box>
        <Box sx={{ fontSize: 18, textAlign: "center", mt: 3 }}>
          I’m currently searching for opportunities for a front-end developer
          role. <br /> If there is any vacancy my inbox is always open. Whether{" "}
          <br /> you have any further questions or just want to say hi, <br />{" "}
          I’ll try my best to get back to you!
        </Box>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button sx={{}}
          color="secondary"
          size="large"
            variant="outlined"
            onClick={() => {
              window.open("https://wa.me/+923224388580");
            }}
          >
            Say hello
          </Button>
        </Box>
    </Container>
  );
};

export default Contect;
