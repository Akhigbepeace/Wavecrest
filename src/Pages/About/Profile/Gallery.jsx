import { Link } from "@chakra-ui/react";
import React from "react";
import { Box, useBreakpointValue, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import aboutGallery1 from "assets/Images/aboutgallery1.png";
import aboutGallery2 from "assets/Images/aboutgallery2.png";
import aboutGallery4 from "assets/Images/aboutgallery4.png";
import aboutGallery5 from "assets/Images/aboutgallery5.png";
import gallery1 from "assets/Images/galleryPic 1.jpg";
import gallery2 from "assets/Images/galleryPic 2.jpg";
import gallery3 from "assets/Images/galleryPic3.jpg";

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
    aboutGallery4,
    aboutGallery5,
    gallery1,
    gallery2,
    gallery3,
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
          <Box key={index} w="272px" h="291px">
            <Image
              src={image}
              w="100%"
              h="100%"
              pr="10px"
              alt="companyLogo"
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
