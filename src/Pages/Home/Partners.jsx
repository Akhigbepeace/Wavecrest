import React from "react";
import {
  Box,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import Nestle from "assets/Images/Nestle.png";
import Pau from "assets/Images/pau.png";
import bihc from "assets/Images/bihc.png";
import raddison from "assets/Images/raddison.png";
import maggi from "assets/Images/Maggi.png";
import womenBoard from "assets/Images/women's board.jpg";
import sheraton from "assets/Images/sheraton.png";
import intercontinental from "assets/Images/intercontinental.png";
import crowneplaza from "assets/Images/crowneplaza.png";
import starwood from "assets/Images/starwood.png";
import bomahotel from "assets/Images/bomahotel.png";

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 0,
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: "linear",
};
export default function Carousel() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    Nestle,
    Pau,
    bihc,
    raddison,
    maggi,
    womenBoard,
    sheraton,
    intercontinental,
    crowneplaza,
    starwood,
    bomahotel,
  ];

  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Link
        position="absolute"
        left={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      ></Link>

      <Link
        position="absolute"
        right={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      ></Link>

      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "flex",
          "2xl": "flex",
        }}
        px={{
          sm: "20px",
          md: "20px",
          lg: "20px",
        }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading
          fontFamily="Visual Hollow Script"
          fontWeight="400"
          fontSize="150px"
          color="rgba(3, 29, 56, 0.06)"
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          Work with us
        </Heading>
        <Box
          bg="#021D37"
          h="3px"
          w="88px"
          mt="20px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Text
          position="absolute"
          color="#021D37"
          fontFamily="Playfair Display"
          fontSize={{
            sm: "20px",
            md: "20px",
            lg: "20px",
            xl: "40px",
            "2xl": "40px",
          }}
          fontWeight="700"
          mb="25px"
        >
          Partners and Sponsors
        </Text>
      </Box>
      <Box
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        <Slider {...settings} ref={(slider) => setSlider(slider)} pauseOnFocus>
          {cards.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt="companyLogo"
              h="75px"
              mb="50px"
              objectFit="contain"
            />
          ))}
        </Slider>
      </Box>

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
          lg: "1fr 1fr 1fr",
        }}
        px={{
          sm: "20px",
          md: "40px",
          lg: "40px",
          xl: "none",
          "2xl": "none",
        }}
        mt={{
          sm: "60px",
          md: "60px",
          lg: "60px",
        }}
        alignItems="center"
      >
        {cards.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt="companyLogo"
            alignItems="center"
            objectFit="contain"
            mb={{
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "50px",
              "2xl": "50px",
            }}
            pr={{
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "50px",
              "2xl": "50px",
            }}
          />
        ))}
      </Grid>
    </Box>
  );
}
