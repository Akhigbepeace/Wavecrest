import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import deputyProvost from "assets/Images/felicitas.jpg";
import Sayo from "assets/Images/academicstaff/Sayo.jpg";
import Lilian from "assets/Images/academicstaff/Lilian.jpg";
import Odinaka from "assets/Images/academicstaff/Odinaka.jpg";

export default function Carousel() {
  const staffs = [
    {
      title: "Academic Staff",
      others: [
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666966058/attachments/9_uwe295.png",
          name: "Osuagwu Juliet",
          post: "Lecturer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666965390/13_xofrgc.png",
          name: "Eboigbe Helen",
          post: "Ethics Lecturer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666964844/10_igexil.png",
          name: "Obasi Chizurumoke",
          post: "Lecturer / Workshop Co-ordinator",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666965393/14_ouznkb.png",
          name: "Eboagwu Helen",
          post: "Facility Lecturer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666963176/16_cnayoq.png",
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
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667072703/wavecrest/6_20221029_111623_0005_tfiouq.png",
          name: "Aduba Chineze",
          post: "French Lecturer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666964768/5_wxydyj.png",
          name: "Samuel Asuquo",
          post: "Chef",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666966097/attachments/11_utsjiw.png",
          name: "Iyangudo Gloria",
          post: "F&B Lecturer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667073201/wavecrest/9_20221029_111623_0008_qddzzq.png",
          name: "Isichei Vivian",
          post: "Lecturer and Academic Co-ordinator",
        },
        {
          image: Odinaka,
          name: "Ekwugha Odinaka",
          post: "Hospitality Management Lecturer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667072975/wavecrest/1_20221029_111623_0000_uewmsx.png",
          name: "Uju Arinze",
          post: "Research Lecturer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666966109/attachments/12_atxzfk.png",
          name: "Ezika Cecilia",
          post: "Faculty Secretary",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666963731/15_x1t7gg.png",
          name: "Onaolapo Lizzy",
          post: "Food Service and Production Lecturer",
        },
      ],
    },

    {
      title: "Non-Academic Staff",
      others: [
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666962461/1_l0bxwm.png",
          name: "Nneka Chukwuekezie",
          post: "Students Affairs/ Admission Officer",
        },
        {
          image: deputyProvost,
          name: "Felicitas Odome",
          post: "Social Media and Digital Marketing Personnel",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666963971/4_zuzpbn.png",
          name: "Okorie Nnenna",
          post: "Assistant Account Officer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667239198/wavecrest/Presh_g11pjl.png",
          name: "Precious Ebung",
          post: "Front Desk Personnel",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666962564/2_ewcijt.png",
          name: "Baptista Uwandu",
          post: "Public Relations Officer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667072776/wavecrest/8_20221029_111623_0007_vchvkn.png",
          name: "Oparachukwu Goodness",
          post: "Practical Assistant",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667073327/wavecrest/7_20221029_111623_0006_cghscl.png",
          name: "Nmereole Pius",
          post: "Security Officer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666963708/3_fadje0.png",
          name: "Amarachukwu  Kenneth",
          post: "Administrative officer",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1666963740/6_on33p1.png",
          name: "Reuben Francisca Ngozi",
          post: "Secretarial Assistant - Librarian",
        },
      ],
    },

    {
      title: "ODC",
      others: [
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667072788/wavecrest/10_20221029_111623_0009_bciolr.png",
          name: "Ejiogu Theodora",
          post: "Pastry Chef",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667072700/wavecrest/3_20221029_111623_0002_tm5wmk.png",
          name: "Idiong James",
          post: "Kitchen Assistant",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667238853/wavecrest/Anna_bwwkrc.jpg",
          name: "Agbor Mkpegara",
          post: "Kitchen Assistant",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667239067/wavecrest/Mkpegara_p6t8kk.jpg",
          name: "Owo Anna",
          post: "Catering Staff",
        },
        {
          image:
            "https://res.cloudinary.com/wavecrest1/image/upload/v1667072796/wavecrest/11_20221029_111623_0010_wot8vs.png",
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
