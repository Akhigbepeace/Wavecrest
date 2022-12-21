import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
const deputyProvost = "assets/imgs/felicitas.jpg";
const Sayo = "assets/imgs/academicstaff/Sayo.jpg";
const Lilian = "assets/imgs/academicstaff/Lilian.jpg";
const Odinaka = "assets/imgs/academicstaff/Odinaka.jpg";
const imageAvatar = "/assets/imgs/image-avatar.png";

export default function Carousel() {
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
            <Flex key={index}>
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
                    <Box w="350px">
                      <Image
                        src={item.image}
                        pl="10px"
                        w="100%"
                        alt="companyLogo"
                        objectFit="cover"
                        h="350px"
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
