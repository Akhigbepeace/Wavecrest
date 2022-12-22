import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";

const Staff = () => {
  const staffs = [
    {
      title: "Academic Staff",
      others: [
        {
          image: "/assets/imgs/academicstaff/Juliet.jpeg",
          name: "Osuagwu Juliet",
          post: "Lecturer",
        },
        {
          image: "/assets/imgs/academicstaff/eboigbe.jpg",
          name: "Eboigbe Helen",
          post: "Ethics Lecturer",
        },
        {
          image: "/assets/imgs/academicstaff/chizurumoke.jpg",
          name: "Obasi Chizurumoke",
          post: "Lecturer / Workshop Co-ordinator",
        },
        {
          image: "/assets/imgs/academicstaff/eboagwu.jpeg",
          name: "Eboagwu Helen",
          post: "Facility Lecturer",
        },
        {
          image: "/assets/imgs/academicstaff/dorcas.jpg",
          name: "Adeyemo Dorcas",
          post: "SIWES Co-ordinator",
        },
        {
          image: "/assets/imgs/academicstaff/lilian.jpg",
          name: "Andy-Nwankwo Lilian",
          post: "Librarian",
        },
        {
          image: "/assets/imgs/academicstaff/Ojo.jpg",
          name: "Ojo Sayo",
          post: "Account Lecturer / CTH Trainer",
        },
        {
          image: "/assets/imgs/staffs/aduba.png",
          name: "Aduba Chineze",
          post: "French Lecturer",
        },
        {
          image: "/assets/imgs/academicstaff/samuel.jpg",
          name: "Samuel Asuquo",
          post: "Chef",
        },
        {
          image: "/assets/imgs/academicstaff/Inyangudo Gloria.jpg",
          name: "Iyangudo Gloria",
          post: "F&B Lecturer",
        },
        {
          image: "/assets/imgs/staffs/vivian.png",
          name: "Isichei Vivian",
          post: "Lecturer and Academic Co-ordinator",
        },
        {
          image: "/assets/imgs/academicstaff/Odinaka.jpg",
          name: "Ekwugha Odinaka",
          post: "Hospitality Management Lecturer",
        },
        {
          image: "/assets/imgs/staffs/arinze.png",
          name: "Uju Arinze",
          post: "Research Lecturer",
        },
        {
          image: "/assets/imgs/academicstaff/ezika.jpg",
          name: "Ezika Cecilia",
          post: "Faculty Secretary",
        },
        {
          image: "/assets/imgs/academicstaff/onaolapo.jpg",
          name: "Onaolapo Lizzy",
          post: "Food Service and Production Lecturer",
        },
      ],
    },

    {
      title: "Non-Academic Staff",
      others: [
        {
          image: "/assets/imgs/nonAcademicStaff/felicitas.png",
          name: "Felicitas Odome",
          post: "Social Media and Digital Marketing Personnel",
        },
        {
          image: "/assets/imgs/nonAcademicStaff/Nnena.png",
          name: "Okorie Nnenna",
          post: "Assistant Account Officer",
        },
        {
          image: "/assets/imgs/nonAcademicStaff/precious.png",
          name: "Precious Ebung",
          post: "Front Desk Personnel",
        },
        {
          image: "/assets/imgs/nonAcademicStaff/Baptista.jpg",
          name: "Baptista Uwandu",
          post: "Public Relations Officer",
        },
        {
          image: "/assets/imgs/staffs/goodness.png",
          name: "Oparachukwu Goodness",
          post: "Practical Assistant",
        },
        {
          image: "/assets/imgs/staffs/pius.png",
          name: "Nmereole Pius",
          post: "Security Officer",
        },

        {
          image: "/assets/imgs/nonAcademicStaff/reuben.jpg",
          name: "Reuben Francisca Ngozi",
          post: "Secretarial Assistant - Librarian",
        },
      ],
    },

    {
      title: "ODC",
      others: [
        {
          image: "/assets/imgs/staffs/thodora.png",
          name: "Ejiogu Theodora",
          post: "Pastry Chef",
        },
        {
          image: "/assets/imgs/staffs/james.png",
          name: "Idiong James",
          post: "Kitchen Assistant",
        },
        {
          image: "/assets/imgs/nonAcademicStaff/agbo.jpg",
          name: "Agbor Mkpegara",
          post: "Kitchen Assistant",
        },
        {
          image: "/assets/imgs/nonAcademicStaff/anna.jpg",
          name: "Owo Anna",
          post: "Catering Staff",
        },
        {
          image: "/assets/imgs/staffs/happiness.png",
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
                          objectFit="cover"
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
