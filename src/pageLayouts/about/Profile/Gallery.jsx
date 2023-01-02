import { Link } from "@chakra-ui/react";
import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";

import NextImage from "next/legacy/image";

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
    "/assets/imgs/aboutGallery1.jpg",
    "/assets/imgs/aboutGallery2.jpg",
    "/assets/imgs/aboutGallery3.jpg",
    "/assets/imgs/news.png",
    "/assets/imgs/testimonial.png",
    "/assets/imgs/programmes.png",
    "/assets/imgs/aboutDesktopBanner.jpg",
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
          <Box key={index} mr="10px">
            <Box
              key={index}
              w="272px"
              h={{
                sm: "150px",
                md: "211px",
                lg: "211px",
                xl: "272px",
                "2xl": "272px",
              }}
              position="relative"
            >
              <NextImage
                src={image}
                layout="fill"
                alt="gallery"
                objectFit="cover"
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
