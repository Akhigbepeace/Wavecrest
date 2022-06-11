import React from "react";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

const OurStories = () => {
  return (
    <Box bg="#021D37" marginTop="10rem" p="1rem" position="relative" zIndex="0">
      <Box id="myCarousel" className="carousel slide" data-ride="carousel">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          marginBottom="3rem"
          position="relative"
          zIndex="1"
        >
          <Text
            position="absolute"
            fontFamily="'Dancing Script', cursive"
            opacity="0.1"
            fontSize="150px"
            color="white"
          >
            Wavecrest
          </Text>
          <Text
            position="relative"
            top="1.5rem"
            color="white"
            fontSize="2.5rem"
            fontWeight="600"
          >
            Our Stories
          </Text>
        </Flex>

        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <Box className="carousel-inner">
          <Flex className="item active" flexDirection="column">
            <Box className="student-testimonial">
              <Text
                color="#fff"
                fontSize="4rem"
                fontWeight="700"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
              >
                Sara Smart
              </Text>
              <Text
                margin="3rem 0"
                fontSize="18px"
                lineHeight="25px"
                color="#EBEDEF"
                width="457px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Box>
            <Image
              src="assets/Images/coffee.jpg"
              alt="coffee"
              w="530px"
              h="350px"
              border="7px solid #EBEDEF"
            />
          </Flex>

          {/* <div className="item">
            <div>
              <h1>Jane Wilson</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.</p>
            </div>
            <img src="./Images/img_ny.jpg" alt="img_ny" />
          </div> */}

          {/* <div className="item">
            <div>
              <h1>Mia Jacob</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.</p>
            </div>
            <img src="./Images/workbench.jpg" alt="workbench" />
          </div> */}
        </Box>

        <Link
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </Link>
      </Box>
    </Box>
  );
};

export default OurStories;
