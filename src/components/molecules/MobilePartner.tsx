import { Grid, Image } from "@chakra-ui/react";
import { cards } from "components/organisms/Blog/constant";
import React from "react";

const MobilePartner = () => {
  return (
    <Grid
      display={{
        sm: "grid",
        md: "grid",
        lg: "grid",
        xl: "none",
        "2xl": "none",
      }}
      gridTemplateColumns={{
        sm: "auto auto",
        md: "auto auto",
        lg: "1fr 1fr",
      }}
      px={{
        sm: "20px",
        md: "40px",
        lg: "40px",
      }}
      mt={{
        sm: "80px",
        md: "80px",
        lg: "80px",
      }}
      alignItems="center"
    >
      {cards.map((image, index) => (
        <Image
          key={index}
          src={image.flier}
          alt="companyLogo"
          alignItems="center"
          objectFit="contain"
          mb={{
            sm: "40px",
            md: "40px",
            lg: "40px",
            xl: "50px",
            "2xl": "50px",
          }}
          mx="auto"
          px="30px"
        />
      ))}
    </Grid>
  );
};

export default MobilePartner;
