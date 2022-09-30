import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import chinonyerem from "assets/Images/Chinonyerem-Favour.jpg";
import chinonyerem2 from "assets/Images/favour2.jpg";
import peace1 from "assets/Images/peace1.jpg";
import peace2 from "assets/Images/peace2.jpg";
import thelma from "assets/Images/Thelma.jpeg";
import styled from "@emotion/styled";

const settings = {
  dots: true,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      name: "Chinonyerem Favour",
      text: "Studying in Wavecrest has made my dreams broader; I haven't gotten the feel of any limitations ever.My colleagues and customers are always captivated by my performance and keep asking me about where I trained.",
      headline: "STAND YOUR GROUND  - THE EARLIER, THE BETTER",
      image1: chinonyerem,
      image2: chinonyerem2,
      blogPost:
        "My name is Chinonyerem Favour, am 20 years of age. At the time I finished secondary school I couldn't get into University because I wasn't old enough so I spent one year here and there doing nothing of great importance before I took my (JAMB) – This is a National exam everyone who intends to go the University takes in Nigeria and in my opinion is really not a true test of one’s knowledge as there are several hitches one may encounter in writing this exam especially when it became a computer based exam. I took my JAMB exam twice seeking to get into a desired University for a desired course but I wasn't fortunate enough because I did not make the cut-off mark for the course. This meant that I already ‘wasted’ two years trying to get into University.After the second trial, I decided to give my true passion a chance to come alive! The truth is I have always been a lover of the fields in Hospitality especially that of culinary arts and event planning. However, in the part of the world I live, hospitality is not given enough credit for several reasons. Parents prefer their children doing more ‘prestigious’ courses like Law, Engineering and Medicine. This is true especially for children who are brilliant and brainy and unfortunately even for those who are not – there is this ‘class’ thing in the minds of parents.For me, it was not easy at first to convince my parents and the teachers in my life to allow me pursue a career in Hospitality because I was considered a brilliant and brainy student in Secondary School. But I gave it a try and succeeded. When I finally started this journey, I realized how much time I had wasted before pursuing my true dreams.  3 years after Secondary School was when I managed to convince my parents amidst different bad reviews from people telling me I was going to waste my knowledge if I pursued Hospitality courses. This time I did not bother listening to them and I set out to find the best hospitality school so I would not give anyone any opportunity to mock me later if I did not get the best. I did a Google search for the best hospitality schools in the State where I lived and I wrote down the 10 best that I saw. I started going to each of them one by one to make enquiries in person and see what they had to offer. Wavecrest was the 4th and last school I visited.",
    },
    {
      name: "Udodirim Peace",
      headline:
        "My dreams have improved because of Wavecrest College and the exposure it has given me. ",
      text: "My dream was to build my career in hospitality. I met graduates of the College and I admired them a lot. In fact, they lit the fire of Education and Excellence that kept burning in me till date.",
      image1: peace1,
      image2: peace2,
      blogPost:
        "      My Name is Udodirim Peace and I am 28 years old. Before I came to Wavecrest I was working in a catering establishment, where I discovered my interest in hospitality, I was good with my work but I was earning very little because I had no formal training or any qualification. I had met graduates of the College and I admired them a lot. In fact, they lit the fire of Education and Excellence that kept burning in me till date. My dream was to graduate and build my career in hospitality (Room Division/ Customer Relation) and it still is. Finances have been my major challenge. But I am strongly determined to achieve my dreams. I have learnt a lot with subjects like Culinary, Research, Communication, Presentation, Simple accounting and entrepreneurial skills, Customer service where we had both theoretical and practical classes.With my training at the College, I have taught a friend of mine cake making and helped one of my classmates to improve her yoghurt making. I have also taught school girls skills on baking and cooking with proper recipes, it was a club called Home makers club at Gbaja Girls Junior Secondary School, Surulere, Lagos. Every Wednesday, Myself and the group did this for about 3 years. It helped me appreciate the fact that knowledge which is not passed on is a waste. I did my internship at Installations Limited Interior Designs and Decorations working as a Front Desk Associate and after my One-Year Internship, I was retained as a part-time staff in the Organization working on weekends and getting income to support my fees and daily upkeep at the College. My mentor  and former boss has helped me to discover my potential and my most dominating skill, yes! We worked together for 4 years even while I was schooling. Her mentorship has been nothing but a blessing. I assure you that Wavecrest is an Institution you can trust. Wavecrest has the best interest of their students at heart and will do so much to see that the students graduate.I graduated from the College last year with a Higher National Diploma in Hospitality Management. I am currently on Swiss scholarship to study in Boma International Hospitality College, Kenya. I decided to apply as a result of my interest to grow further in my hospitality career. Fortunately, I was selected among the many other students who applied.  I'm grateful to God for this great opportunity to experience different things in my career and other aspects of my life in general.Here in Boma International Hospitality College, I am doing a Certificate course  in Hospitality Operations which is mainly based on practical classes. This has really helped me in improving my skills acquired in Wavecrest College. Boma International Hospitality College is like the best thing that has happened to my career. My course consists of two (2) terms or semesters which last for about 13 weeks in each term. We study for 4 weeks and then take the first Continuous Assessment Test (CAT) and the second CAT in the 9th week and finally the end of term examinations takes place in the 13th week. The college timetable is quite flexible and yet loaded with valuable lessons. Boma International Hospitality College focuses solely on the main courses that the students require to do exploit in the industry after they graduate and get jobs. Besides, they teach according to the current trends in the hospitality industry. In other words, they do not only  rely on basic operational standards of teaching but they constantly adjust their teaching system to include what the students will meet in the industry and the school has given me the opportunity to consistently practice these skills which are  needed for me in the industry. Moreover, I have learnt both in practical and theoretical situations analysis and critical thinking, food production, food and beverage cost control and even Property Management System (PMS) for Room Division and Front Office with the software Opera PMS. In a nutshell, my experience in Boma International Hospitality College has been nothing but fulfilling. I feel like I have finally arrived and I can't wait to put everything I have learnt into practice. My dreams have not changed  but rather have been improved because of Wavecrest College and the exposure it has given me. My main focus is to grow in the industry to the highest possible position available for people as prepared and ready as I am. My appreciation to everybody and every institution that made this journey possible cannot be contained in this report, because it is too long and heavily loaded. Permit me to write a different report for it because my heart is filled with gratitude to Wavecrest College, The Swiss Government and Boma International Hospitality College.",
    },
    {
      name: "Dyah Thelma",
      headline:
        "How Catering and Deep Cleaning Became my Top Skills…Dyah Thelma",
      text: "How Catering and Deep Cleaning Became my Top Skills…Dyah Thelma",
      image1: thelma,
      image2: thelma,
      blogPost:
        "Meet Dyah Thelma an ND 1 student at Wavecrest, she has always had a passion for cooking. Hospitality has always been a family dream. Thelma discovered her passion for hospitality at a very tender age because her father, who is into the hospitality business, has always carried them along when they were little.Most of the time, she finds herself in the kitchen and sees cooking as a channel to express her emotions, energy, creativity and all.Thelma wanted to learn more about being creative in cooking and she needed the right school to put her through so she applied to Wavecrest college of Hospitality. Her dream is to reach out to people with her tasty meals and be a boss of her own. With the Hospitality education from Wavecrest college, Thelma’s dreams are gradually becoming a reality. “ At Wavecrest, I gained so many skills, food making is number one, then deep cleaning as opposed to regular cleaning, laundry etc. Wavecrest is a home to me, I am really happy to be here”, She said. For over 45 years and still counting, Wavecrest college has been helping young ladies to achieve their hospitality dream.",
    },
  ];

  const navigate = useNavigate();

  const showStory = (card) => {
    navigate(
      `/posts?image1=${card.image1}&name=${card.name}&headline=${card.headline}&texts=${card.blogPost}&image2=${card.image2}`,
      { replace: true }
    );
  };

  return (
    <CaptionCarousel.Wrapper>
      <Box position={"relative"} width={"full"} overflow={"hidden"}>
        <IconButton
          bg="none"
          position="absolute"
          left={side}
          top={top}
          color="white"
          zIndex={2}
          display={{
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
          _hover={{
            bg: "transparent",
          }}
          onClick={() => slider?.slickPrev()}
        >
          <BiChevronLeft size="40px" />
        </IconButton>

        <IconButton
          bg="none"
          position="absolute"
          right={side}
          top={top}
          zIndex={2}
          color="white"
          display={{
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
          _hover={{
            bg: "transparent",
          }}
          onClick={() => slider?.slickNext()}
        >
          <BiChevronRight size="40px" />
        </IconButton>

        <Box
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "flex",
            "2xl": "flex",
          }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          position="relative"
          mt={{
            sm: "0",
            md: "0",
            lg: "0",
            xl: "-80px",
            "2xl": "-80px",
          }}
          pt={{ sm: "55px", md: "55px", lg: "55px" }}
          px={{ sm: "20px", md: "20px", lg: "20px" }}
          zIndex="1"
          bg="#021D37"
        >
          <Heading
            fontFamily="Visual Hollow Script"
            opacity="0.1"
            fontSize="170px"
            color="white"
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
          >
            Wavecrest
          </Heading>

          <Box
            bg="#FFF"
            h="3px"
            w="88px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          ></Box>

          <Text
            position="absolute"
            color="white"
            fontFamily="Playfair Display"
            fontSize={{
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "40px",
              "2xl": "40px",
            }}
            fontWeight="700"
            bg={{
              sm: "#021D37",
              md: "#021D37",
              lg: "#021D37",
              xl: "none",
              "2xl": "none",
            }}
          >
            Our Stories
          </Text>
        </Box>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box key={index} position="relative" bg="#021D37">
              <Flex
                flexDirection={{
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                  "2xl": "row",
                }}
                position="relative"
                alignItems="center"
                justifyContent="center"
                mt={{
                  sm: "40px",
                  md: "80px",
                  lg: "80px",
                }}
                pb="74px"
              >
                <Flex
                  flexDirection="column"
                  alignItems="left"
                  mx={{
                    sm: "auto",
                    md: "auto",
                    lg: "auto",
                  }}
                >
                  <Heading
                    color="#fff"
                    fontFamily="Playfair Display"
                    fontSize="32px"
                    fontWeight="700"
                    mt={{
                      sm: "40px",
                      md: "40px",
                      lg: "40px",
                    }}
                    textAlign={{
                      sm: "left",
                      md: "center",
                      lg: "center",
                    }}
                  >
                    {card.name}
                  </Heading>

                  <Text
                    color="#EBEDEF"
                    margin="20px 0"
                    fontFamily="Manrope"
                    fontSize="18px"
                    fontWeight="400"
                    lineHeight="25px"
                    width="457px"
                    w={{
                      sm: "290px",
                      md: "310px",
                      lg: "310px",
                      xl: "457px",
                      "2xl": "457px",
                    }}
                  >
                    {card.text}
                  </Text>

                  <Button
                    onClick={() => showStory(card)}
                    background="#FFF"
                    w="168px"
                    p="10px 26px"
                    color="#021D37"
                    fontSize="20px"
                    textDecoration="none"
                    textAlign="center"
                    my="20px"
                    textTransform="uppercase"
                    borderRadius="3px"
                    fontFamily="Manrope"
                    h="52px"
                    mx={{
                      sm: "auto",
                      md: "auto",
                      lg: "auto",
                    }}
                    display={{
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                      "2xl": "block",
                    }}
                    _hover={{
                      textDecoration: "none",
                      color: "#021D37",
                      bg: "#EBEDEF",
                    }}
                  >
                    READ MORE
                  </Button>
                </Flex>

                <Image
                  src={card.image1}
                  alt="ourstories"
                  objectFit="cover"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                  ml={{
                    xl: "-30px",
                    "2xl": "-30px",
                  }}
                  w={{
                    sm: "310px",
                    md: "310px",
                    lg: "310px",
                    xl: "576px",
                    "2xl": "576px",
                  }}
                  h={{
                    sm: "213px",
                    md: "213px",
                    lg: "213px",
                    xl: "345px",
                    "2xl": "345px",
                  }}
                  mx="auto"
                />

                <Button
                  onClick={(e) => showStory(e)}
                  background="#FFF"
                  w="168px"
                  p="10px 26px"
                  color="#021D37"
                  fontSize="20px"
                  textDecoration="none"
                  textAlign="center"
                  mt="60px"
                  textTransform="uppercase"
                  borderRadius="3px"
                  fontFamily="Manrope"
                  h="52px"
                  mx={{
                    sm: "auto",
                    md: "auto",
                    lg: "auto",
                  }}
                  display={{
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                    "2xl": "none",
                  }}
                  _hover={{
                    textDecoration: "none",
                    color: "#021D37",
                    bg: "#EBEDEF",
                  }}
                >
                  {card.link}
                </Button>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </CaptionCarousel.Wrapper>
  );
}

CaptionCarousel.Wrapper = styled.div`
  .slick-dots {
    position: static;
    padding-bottom: 40px;
    background: #021d37;
  }

  .slick-dots li {
    margin: 0px;
  }

  .slick-dots li button::before {
    position: absolute;
    color: white;
    font-size: 15px;
  }
`;
