import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import provost from "assets/Images/Nneka Chuwkuekezie.jpg";
import deputyProvost from "assets/Images/felicitas.jpg";
import Baptista from "assets/Images/Baptista Uwandu.jpg";
import bursar from "assets/Images/2.png";
import amarachukwu from "assets/Images/amarachukwu.png";
import theodora from "assets/Images/odc/theodora.jpg";
import James from "assets/Images/odc/James.jpg";
import Mkpegara from "assets/Images/odc/Mkpegara.jpg";
import Gloria from "assets/Images/academicstaff/Inyangudo Gloria.jpg";
import Juliet from "assets/Images/academicstaff/Juliet.jpeg";
import Lizzy from "assets/Images/academicstaff/Lizzy.jpg";
import Dorcas from "assets/Images/academicstaff/Dorcas.jpg";
import Aduba from "assets/Images/academicstaff/Aduba.jpeg";
import Ezika from "assets/Images/academicstaff/Ezika.jpg";
import Sayo from "assets/Images/academicstaff/Sayo.jpg";
import Lilian from "assets/Images/academicstaff/Lilian.jpg";
import vivian from "assets/Images/academicstaff/vivian.jpg";
import Odinaka from "assets/Images/academicstaff/Odinaka.jpg";
import Asuquo from "assets/Images/Samuel Asuquo - chef.jpg";
import Pius from "assets/Images/membersofstaff/Nmereole Pius.jpg";
import Goodness from "assets/Images/membersofstaff/Oparachukwu Goodness.jpg";
import Helen from "assets/Images/academicstaff/Helen.jpg";
import Obasi from "assets/Images/academicstaff/Obasi.jpg";
import cecilia from "assets/Images/academicstaff/cecilia.jpg";
import Anna from "assets/Images/odc/Anna.jpg";
import helen from "assets/Images/helen.jpg";
import Happiness from "assets/Images/odc/Ukwachi Happiness .jpg";
import ebong from "assets/Images/1.png";

export default function Carousel() {
  const staffs = [
    {
      title: "Academic Staff",
      others: [
        {
          image: Juliet,
          name: "Osuagwu Juliet",
          post: "Lecturer",
        },
        {
          image: helen,
          name: "Eboigbe Helen",
          post: "Ethics Lecturer",
        },
        {
          image: Lizzy,
          name: "Obasi Chizurumoke",
          post: "Lecturer / Workshop Co-ordinator",
        },
        {
          image: Aduba,
          name: "Eboagwu Helen",
          post: "Facility Lecturer",
        },
        {
          image: Dorcas,
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
          image: Obasi,
          name: "Aduba Chineze",
          post: "French Lecturer",
        },
        {
          image: Asuquo,
          name: "Samuel Asuquo",
          post: "Chef",
        },
        {
          image: Gloria,
          name: "Iyangudo Gloria",
          post: "F&B Lecturer",
        },
        {
          image: vivian,
          name: "Isichei Vivian",
          post: "Lecturer and Academic Co-ordinator",
        },
        {
          image: Odinaka,
          name: "Ekwugha Odinaka",
          post: "Hospitality Management Lecturer",
        },
        {
          image: Helen,
          name: "Uju Arinze",
          post: "Research Lecturer",
        },
        {
          image: Ezika,
          name: "Ezika Cecilia",
          post: "Faculty Secretary",
        },
        {
          image: cecilia,
          name: "Onaolapo Lizzy",
          post: "Food Service and Production Lecturer",
        },
      ],
    },

    {
      title: "Non-Academic Staff",
      others: [
        {
          image: provost,
          name: "Nneka Chukwuekezie",
          post: "Students Affairs/ Admission Officer",
        },
        {
          image: deputyProvost,
          name: "Felicitas Odome",
          post: "Social Media and Digital Marketing Personnel",
        },
        {
          image: bursar,
          name: "Okorie Nnenna",
          post: "Assistant Account Officer",
        },
        {
          image: ebong,
          name: "Precious Ebung",
          post: "Front Desk Personnel",
        },
        {
          image: Baptista,
          name: "Baptista Uwandu",
          post: "Public Relations Officer",
        },
        {
          image: Goodness,
          name: "Oparachukwu Goodness",
          post: "Practical Assistant",
        },
        {
          image: Pius,
          name: "Nmereole Pius",
          post: "Security Officer",
        },
        {
          image: amarachukwu,
          name: "Amarachukwu  Kenneth",
          post: "Administrative officer",
        },
      ],
    },

    {
      title: "ODC",
      others: [
        {
          image: theodora,
          name: "Ejiogu Theodora",
          post: "Pastry Chef",
        },
        {
          image: James,
          name: "Idiong James",
          post: "Kitchen Assistant",
        },
        {
          image: Anna,
          name: "Agbor Mkpegara",
          post: "Kitchen Assistant",
        },
        {
          image: Mkpegara,
          name: "Owo Anna",
          post: "Catering Craft",
        },
        {
          image: Happiness,
          name: "Ukwachi Happiness",
          post: "Store Supervisor",
        },
      ],
    },
  ];

  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Box>
        <Box w="70px" h="3px" bg="#021D37" mb="5px"></Box>

        <Heading
          fontFamily="Playfair Display"
          fontSize="32px"
          fontWeight="700"
          color="#021D37"
          mb="30px"
        >
          Staff
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {staffs.map((staff, index) => {
          return (
            <Flex>
              <Heading
                key={index}
                fontFamily="Playfair Display"
                fontSize="28px"
                fontWeight="700"
                color="#021D37"
                w="200px"
                mt="10px"
                alignSelf="center"
                transform="rotate(270deg)"
              >
                {staff.title}
              </Heading>

              {staff.others.map((item, index) => {
                return (
                  <Box key={index}>
                    <Box w="400px">
                      <Image
                        src={item.image}
                        pl="10px"
                        w="100%"
                        alt="companyLogo"
                        objectFit="cover"
                        h="200px"
                      />
                    </Box>

                    <Flex
                      alignItems="center"
                      bg="rgba(255, 255, 255, 67%)"
                      p="10px 25px"
                      position="relative"
                      top="-100px"
                      h="100px"
                      borderRadius="0px 0px 5px 5px"
                      w="100%"
                    >
                      <Box
                        bg="#021D37"
                        w="7px"
                        h="80%"
                        position="absolute"
                        zIndex="1"
                      ></Box>

                      <Box ml="20px">
                        <Heading
                          fontFamily="Playfair Display"
                          fontSize="20px"
                          fontWeight="700"
                          color="#021D37"
                          lineHeight="27px"
                        >
                          {item.name}
                        </Heading>
                        <Text
                          fontFamily="Manrope"
                          fontSize="18px"
                          fontWeight="400"
                          color="rgba(2, 29, 55, 0.63);"
                          lineHeight="27px"
                        >
                          {item.post}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
