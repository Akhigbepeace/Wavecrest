import React, { useState } from "react";
import { Box, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import PeaceImage from "components/atoms/PeaceImage";

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

type ShowcaseSliderProps = {
  cards: string[];
};
export default function ShowcaseSlider(props: ShowcaseSliderProps) {
  const { cards } = props;
  const [slider, setSlider] = useState<Slider>();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <ShowcaseSlider.Wrapper>
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
            ref={(slider) => setSlider(slider as Slider)}
            pauseOnHover
          >
            {cards.map((image, index) => (
              <PeaceImage
                key={index}
                src={image}
                alt="showcase-image"
                h="280px"
                px="1px"
              />
            ))}
          </Slider>
        </Box>
      </Box>
    </ShowcaseSlider.Wrapper>
  );
}

ShowcaseSlider.Wrapper = styled.div`
  .slick-dots {
    position: static;
    margin-top: -30px;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button::before {
    position: absolute;
    color: white;
    font-size: 10px;
  }
`;
