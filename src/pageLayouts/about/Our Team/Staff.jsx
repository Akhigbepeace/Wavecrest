import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";

const deputyProvost = "/assets/imgs/felicitas.jpg";
const Sayo = "/assets/imgs/academicstaff/Sayo.jpg";
const Lilian = "/assets/imgs/academicstaff/Lilian.jpg";
const Odinaka = "/assets/imgs/academicstaff/Odinaka.jpg";
const imageAvatar = "/assets/imgs/image-avatar.png";

const Staff = () => {
  const staffs = [
    {
      title: "Academic Staff",
      others: [
        {
          image: imageAvatar,
          name: "Osuagwu Juliet",
          post: "Lecturer",
        },
        {
          image: imageAvatar,
          name: "Eboigbe Helen",
          post: "Ethics Lecturer",
        },
        {
          image: imageAvatar,
          name: "Obasi Chizurumoke",
          post: "Lecturer / Workshop Co-ordinator",
        },
        {
          image: imageAvatar,
          name: "Eboagwu Helen",
          post: "Facility Lecturer",
        },
        {
          image: imageAvatar,
          name: "Adeyemo Dorcas",
          post: "SIWES Co-ordinator",
        },
        {
          image: Sayo,
          name: "Andy-Nwankwo Lilian",
          post: "Librarian",
        },
        {
          image: Lilian,
          name: "Ojo Sayo",
          post: "Account Lecturer / CTH Trainer",
        },
        {
          image: imageAvatar,
          name: "Aduba Chineze",
          post: "French Lecturer",
        },
        {
          image: imageAvatar,
          name: "Samuel Asuquo",
          post: "Chef",
        },
        {
          image: imageAvatar,
          name: "Iyangudo Gloria",
          post: "F&B Lecturer",
        },
        {
          image: imageAvatar,
          name: "Isichei Vivian",
          post: "Lecturer and Academic Co-ordinator",
        },
        {
          image: Odinaka,
          name: "Ekwugha Odinaka",
          post: "Hospitality Management Lecturer",
        },
        {
          image: imageAvatar,
          name: "Uju Arinze",
          post: "Research Lecturer",
        },
        {
          image: imageAvatar,
          name: "Ezika Cecilia",
          post: "Faculty Secretary",
        },
        {
          image: imageAvatar,
          name: "Onaolapo Lizzy",
          post: "Food Service and Production Lecturer",
        },
      ],
    },

    {
      title: "Non-Academic Staff",
      others: [
        {
          image: imageAvatar,
          name: "Nneka Chukwuekezie",
          post: "Students Affairs/ Admission Officer",
        },
        {
          image: deputyProvost,
          name: "Felicitas Odome",
          post: "Social Media and Digital Marketing Personnel",
        },
        {
          image: imageAvatar,
          name: "Okorie Nnenna",
          post: "Assistant Account Officer",
        },
        {
          image: imageAvatar,
          name: "Precious Ebung",
          post: "Front Desk Personnel",
        },
        {
          image: imageAvatar,
          name: "Baptista Uwandu",
          post: "Public Relations Officer",
        },
        {
          image: imageAvatar,
          name: "Oparachukwu Goodness",
          post: "Practical Assistant",
        },
        {
          image: imageAvatar,
          name: "Nmereole Pius",
          post: "Security Officer",
        },
        {
          image: imageAvatar,
          name: "Amarachukwu  Kenneth",
          post: "Administrative officer",
        },
        {
          image: imageAvatar,
          name: "Reuben Francisca Ngozi",
          post: "Secretarial Assistant - Librarian",
        },
      ],
    },

    {
      title: "ODC",
      others: [
        {
          image: imageAvatar,
          name: "Ejiogu Theodora",
          post: "Pastry Chef",
        },
        {
          image: imageAvatar,
          name: "Idiong James",
          post: "Kitchen Assistant",
        },
        {
          image: imageAvatar,
          name: "Agbor Mkpegara",
          post: "Kitchen Assistant",
        },
        {
          image: imageAvatar,
          name: "Owo Anna",
          post: "Catering Staff",
        },
        {
          image: imageAvatar,
          name: "Ukwachi Happiness",
          post: "Store Supervisor",
        },
      ],
    },
  ];

  return (
    <Box>
      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Box>
          {staffs.map((staff, index) => {
            return (
              <Fragment key={index}>
                <Heading
                  key={index}
                  fontFamily="Playfair Display"
                  fontSize="32px"
                  fontWeight="700"
                  color="#021D37"
                  mb="30px"
                >
                  {staff.title}
                </Heading>

                <Grid
                  gridTemplateColumns="1fr 1fr 1fr"
                  gridGap="8px"
                  mb="100px"
                  display={{
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "grid",
                    "2xl": "grid",
                  }}
                >
                  {staff.others.map((staff, index) => {
                    return (
                      <Box key={index} w={{ xl: "310px", "2xl": "350px" }}>
                        <Image
                          src={staff.image}
                          w="100%"
                          h="350px"
                          borderRadius="5px"
                        />
                        <Flex
                          alignItems="center"
                          bg="rgba(255, 255, 255, 77%)"
                          p="10px 25px"
                          position="relative"
                          top="-67px"
                          borderRadius="0px 0px 5px 5px"
                        >
                          <Box
                            bg="#021D37"
                            w="3px"
                            my="auto"
                            h="80%"
                            position="absolute"
                            zIndex="1"
                          ></Box>

                          <Box ml="10px">
                            <Heading
                              fontFamily="Playfair Display"
                              fontSize="22px"
                              fontWeight="700"
                              color="#021D37"
                            >
                              {staff.name}
                            </Heading>
                            <Text
                              fontFamily="Manrope"
                              fontSize="14px"
                              fontWeight="400"
                              color="rgba(2, 29, 55, 0.63);"
                            >
                              {staff.post}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    );
                  })}
                </Grid>
              </Fragment>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Staff;
