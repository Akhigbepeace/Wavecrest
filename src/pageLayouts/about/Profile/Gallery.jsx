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
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667231285/aboutgallery1_yvd8m2.png",
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667231286/aboutgallery2_vjwyrh.png",
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667231291/aboutgallery4_adl08b.png",
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667231286/aboutgallery5_bfkzxu.png",
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667231343/galleryPic_1_qrkdiy.jpg",
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667231308/galleryPic_2_twbbbw.jpg",
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667290097/wavecrest/galleryPic3_t1krbe.png",
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
            mr="10px"
            position="relative"
          >
            <NextImage
              src={image}
              layout="fill"
              alt="gallery"
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
