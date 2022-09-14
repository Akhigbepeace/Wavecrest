import React from "react";
import { Box, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import showcase1 from "assets/Images/Showcase1.png";
import showcase2 from "assets/Images/Showcase2.png";
import showcase3 from "assets/Images/Showcase3.png";
import showcase4 from "assets/Images/Showcase4.png";
import styled from "@emotion/styled";

const settings = {
  dots: true,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [showcase1, showcase2, showcase3, showcase4];

  return (
    <CaptionCarousel.Wrapper>
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

        <Box>
          <Slider
            {...settings}
            ref={(slider) => setSlider(slider)}
            pauseOnHover
          >
            {cards.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="companyLogo"
                h="280px"
                objectFit="cover"
                pr="5px"
              />
            ))}
          </Slider>
        </Box>
      </Box>
    </CaptionCarousel.Wrapper>
  );
}

CaptionCarousel.Wrapper = styled.div`
  .slick-dots {
    position: static;
    margin-top: -30px;
  }

  .slick-slide div {
    margin-right: 5px;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button::before {
    position: absolute;
    color: black;
    font-size: 10px;
  }
`;
