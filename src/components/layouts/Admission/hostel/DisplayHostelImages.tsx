import { Grid, Image } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";

const DisplayHostelImages = () => {
  const hostel1 = "/assets/imgs/hostel1.jpg";
  const hostel2 = "/assets/imgs/hostel2.jpg";
  const hostel3 = "/assets/imgs/hostel3.jpg";
  const hostel4 = "/assets/imgs/hostel4.jpg";
  const images = [hostel1, hostel2, hostel3, hostel4];

  return (
    <Grid
      gridTemplateColumns={{
        sm: "1fr 1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr  ",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(4, 1fr)",
      }}
      gridGap="10px"
      justifyContent="center"
      mt=" 60px"
    >
      {images.map((image, index) => {
        return (
          <PeaceImage
            key={index}
            src={image}
            alt="hostel-images"
            w={{
              sm: "150px",
              md: "309px",
              lg: "309px",
              xl: "309px",
              "2xl": "309px",
            }}
            h={{
              sm: "150px",
              md: "309px",
              lg: "309px",
              xl: "309px",
              "2xl": "309px",
            }}
            borderRadius="5px"
          />
        );
      })}
    </Grid>
  );
};

export default DisplayHostelImages;
