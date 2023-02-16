import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://media.timeout.com/images/105124791/750/422/image.jpg"
        alt="vegas"
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque ex purus, non congue ligula luctus ac. Aliquam tincidunt
        gravida sodales. Praesent maximus pharetra leo. Nam ut libero non arcu
        interdum placerat. Nunc diam ex, congue id lectus vitae, facilisis
        egestas ipsum. Vestibulum vel enim ac nisl tristique dignissim. Morbi
        gravida consequat mi, a mattis arcu hendrerit vitae. Cras eleifend,
        metus vehicula lacinia congue, justo risus sollicitudin erat, eu finibus
        nisl nisi ut massa. Donec pellentesque enim a consequat porttitor.
        Aenean id eleifend lorem. Integer non ultrices justo.
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Questions
      </Typography>
      <CustomizedAccordions />
    </Box>
  </Container>
);

export default Tour;
