import { Link } from "@chakra-ui/react";
import React from "react";
import { Box, useBreakpointValue, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import aboutGallery1 from "assets/Images/aboutgallery1.png";
import aboutGallery2 from "assets/Images/aboutgallery2.png";
import aboutGallery3 from "assets/Images/aboutgallery3.png";
import aboutGallery4 from "assets/Images/aboutgallery4.png";
import aboutGallery5 from "assets/Images/aboutgallery5.png";

export default function Carousel() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const slideNo = useBreakpointValue({
    base: 2,
    md: 2,
    lg: 3,
    xl: 4,
    "2xl": 5,
  });

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    slidesToShow: slideNo,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const cards = [
    aboutGallery1,
    aboutGallery2,
    aboutGallery3,
    aboutGallery4,
    aboutGallery5,
    aboutGallery4,
    aboutGallery3,
    aboutGallery2,
    aboutGallery1,
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

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((image, index) => (
          <Box key={index}>
            <Image
              src={image}
              pr="10px"
              alt="companyLogo"
              objectFit="contain"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
