import {
  Box,
  Image,
  Text,
  Grid,
  Button,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import React, { Fragment } from "react";
import waveimg from "assets/Images/waveimg.png";
import MobileSideBar from "components/MobileSideBar";
import { useRouter } from "next/router";

const FAQs = () => {
  const FAQs = [
    {
      question: "What is Wavecrest College",
      answer:
        "Wavecrest College of Hospitality is a Private Monotechnic that provides unique Hospitality Education. <br /> <br /> <b style='marginBottom: 90px'> Programs we offer:</b> <br /> <b><u>FULL-TIME PROGRAMS:</u></b> <ol><li>A Gap year Program (Certificate program in Hospitality Operations)  - 1 year </li><li>National Diploma in Hospitality Management (ND)  -  2 years </li><li>Higher National Diploma (HND)   – 2 years </li> &nbsp; &nbsp; &nbsp;<b>Our Full-Time Programs are exclusive to young females from every ethnic group, social background, and creed.</b> </ol> <br/> <b><u>SHORT - TIME COURSES: </b></u> <br/><ol><li>Culinary Courses - Ranging from 5 weeks   - 3 months</li><li> Professional Certificate in Hospitality   - 10 weeks</li><li> Hospitality Training Programs   - Flexible duration</li><li> Confederation of Tourism and Hospitality   - 22 weeks</li></ol> &nbsp; &nbsp; &nbsp; <b  style='margin-left: 20px'>Training fit for aspirants to become competent professionals able to meet the challenges of the fast-paced world of Hospitality</b>",
    },
    {
      question: "What are the programs offered at the college?",
      answer:
        "<ol><li>Gap year Program (One-year Certificate program in Hospitality Operations_. <br /> Entry requirement: Four (4) credit passes in SSCE/NECO/WAEC.</li> <br /> <li>National Diploma in Hospitality Management (ND) 2 years.<br />Entry Requirement: <br /> <ul><li> Five (5) credit passes in an O'level (SSCE/NECO/GCE) result which <b>Must</b> include <b>One science subject</b> from any of these: Biology/ Agric Science/ Health Science/Food and Nutrition/ Catering Craft UTME. </li> <li>Any Four (4) subjects including the English language</li></li> </ul>  <br /> <li>Higher National Diploma (HND) – 2 years <br /> Entry requirement: <br /> <ul> <li> N.D in Hospitality Management.</li>  <li>Completion of a one-year internship</li></ul></li> </ol>",
    },
    {
      question:
        "What are the processes to gain admission to the college National Diploma program?",
      answer:
        "STEP 1: 	Five (5) credit passes in an O'level (SSCE/NECO/GCE) result which Must include One science subject from any of these: Biology/ Agric Science/ Health Science/Food and Nutrition/ Catering Craft <br /> STEP 2: 	UTME – COMPULSORY SUBJECT: ENGLISH LANGUAGE and any other three (3) subjects. Excluding IRS OR CRS. <br />STEP 3:	 Purchase the Application Form at the college or online (https://bit.ly/3dnCLu5) or call (09096856606)<br /> STEP 4: 	Attend the Wavecrest Screening at the College <br /> STEP 5: 	Await results from the screening. Check your Email regularly. ",
    },
    {
      question: "What is the Gap-year programme?",
      answer:
        "The Gap-Year Programme is an accelerated certificate program for young school leavers designed to develop knowledge and skills in Hospitality Operations. Its course outline incorporates Courses such as food and beverage, housekeeping, and reception operations.  <br /> <br />    *Entry requirement: <br />	a. Four (4) credit passes in SSCE/NECO/WAEC. <br />b. The Wavecrest Screening at the College        ",
    },
    {
      question: "Is the Gap-year same as Certificate programme?",
      answer:
        "The full name for this Full-time program is Gap-year (Certificate in Hospitality Operations)",
    },
    {
      question:
        "Can I use the Gap year program and gain direct entry into the ND program?",
      answer:
        "NIL for now. We have not been approved for direct entry from the NBTE",
    },
    {
      question:
        "Must I be a science student to enrol for the either of the programs?",
      answer:
        "No, you must not be a Science Student to enrol for the GAP year. However, you need at least one science subject to enrol for the National Diploma <br /><br /> FOR SSCE/NECO/GCE: The <b>ONLY COMPULSORY Subject</b> is Biology OR Agric Science OR Health Science OR Food and Nutrition OR Catering Craft. <br /> FOR UTME: The <b>ONLY COMPULSORY Subject</b> is <b>ENGLISH LANGUAGE</b>",
    },
    {
      question: "Are males allowed to enrol at the college?",
      answer:
        "Wavecrest College of Hospitality is one of the projects of the Women’s Board Educational Cooperation Society, a Nigerian Non-Governmental Not-for-Profit Organisation created in 1972 to contribute to women’s development. Thus, our full-time programs are <b> Exclusive to young females </b> from every ethnic group, social background, and creed.<br /><br /><b>Nonetheless, our Short-time programs such as *The Culinary Course, *Hospitality Training Programs (HTP), and the *Professional Certificate in Hospitality (PCH). These programs are open to all gender.</b>",
    },
    {
      question: "What are the subjects required to enrol for the ND program?",
      answer:
        "FOR SSCE/NECO/GCE: The <b>ONLY COMPULSORY Subject</b> is Biology OR Agric Science OR Health Science OR Food and Nutrition OR Catering Craft. <br /> <br />  FOR UTME: The <b>ONLY COMPULSORY Subject</b> is <b>ENGLISH LANGUAGE</b>",
    },
    {
      question:
        "Does the college accept National Diploma Certificate from another Polytechnics to enrol for the HND?",
      answer:
        "Yes. The entry requirement for HND is as thus: <br /> <ul><li> N.D in Hospitality Management.</li><li> Completion of a one-year internship.</li></ul>",
    },
    {
      question: "How much is the Tuition?",
      answer:
        "<ul><li>Gap-year Program: N277,500  </li> <li> National Diploma (YEAR. 1): N295,500  </li><li>   Higher National Diploma (YEAR. 1): N299,000</li></ul><b>  * Wavecrest College. Access – Diamond Bank. Account no. 0010546867   </b> <br/> As a project of the Women’s Board, the Educational Cooperation Society is a non-governmental not-for-profit organization. In consideration of the college’s mission to reach out to and give education opportunities to the financially challenged, the above fee has been subsidized. However, those who can pay the total costs are encouraged to do so to assist in training more students. All payments must be made into the College's bank account during registration.",
    },
    {
      question: "Are there accommodation available?",
      answer: "Accommodation is available based on request and screening.",
    },

    {
      question: "Where is the college situated at?",
      answer: "75, Adisa Bashua, Off Adelabu, Masha, Surulere, Lagos, Nigeria.",
    },
    {
      question: "Can I apply online?",
      answer:
        "Yes. You can purchase the Application form online by request. Contact (09096856606) or Click here: <a href='https://wavecrest.edu.ng/admission/applyOnline' style='color:blue' >Apply Now </a> <br /> <br /> <ul><li> Application form for Gap-Year Program / National Diploma: N2,000</li><li> Application form for Higher National Diploma: N2,500</li></ul>",
    },
    {
      question: "Do the HND students go for NYSC?",
      answer: "Yes, they do.",
    },
    {
      question: "Does the Gap year programme require JAMB?",
      answer:
        "No! The Gap Year does not require JAMB. <br /> <br />  *Entry requirement: <br />		a. Four (4) credit passes in SSCE/NECO/WAEC. <br />b. The Wavecrest Screening at the College",
    },
    {
      question:
        "What other programmes does the school offer and can I apply for them online?      ",
      answer:
        "Wavecrest also offers Short-time courses: <br /> <br /><ul><li> The Culinary Course. <br /><br /> Course Description: This course aims to develop your basic culinary knowledge and skills in the following modules - Yeast production, Pastries, Finger foods, Nigerian and Continental dishes, Basic cake making, and icing techniques. <br /> It is a combination of demonstration, hands-on learning, and lecture methods.<br /> <b>Click here for more information:	______ </b></li><br /><li>Hospitality Training Programs (HTP) <br /><br />Course Description: Training programs broken into modules to provide knowledge and advice to Hospitality operatives and aspirants. Duration: 3 months for Full Program     Modules are Flexible Click here for more information:	_____ </li><br /><br /><li>Professional Certificate in Hospitality (PCH) <br />Course Description: A training geared towards industry managers, supervisors, and operatives.  Duration: Ten week Click here for more information:	______</li> </ul> <br />The above-mentioned programs are professional courses that are guaranteed Certifications after each course.<br /> <b>*Wavecrest College is also the Approved Centre in Nigeria for CTH, a U.K online and certification course.</b>",
    },
    {
      question: "Does the college go on strike?      ",
      answer: "NEVER! Never have and Never Will!",
    },
    {
      question:
        "Apart from the payment of school fees are there other payments that needs to be made?      ",
      answer:
        "Yes.<a href='https://wavecrest.edu.ng/admission/tuitionAndScholarship' style='color:blue' >Click here for more information:	______</a> ",
    },
    {
      question: "Contact Number to reach for further enquires?      ",
      answer:
        "<ul><li>Full-time Programs / Culinary: +234 909 685 6606	| +234 808 396 4840</li><br/><li>PCH/ HTP Trainings: +234 810 466 2299		|+234 909 685 6606</li></ul>",
    },
    {
      question: "Which program do you have for graduates?",
      answer:
        "Our Short-time courses are all fitting for graduates of every degree: <br/><br /> <ul><li>The Culinary Course.					Click here for more information:	______</li><li> Hospitality Training Programs (HTP)			Click here for more information:	______ </li><li>Professional Certificate in Hospitality (PCH)		Click here for more information:	______ </li></ul> <br/><b> The above-mentioned programs are professional courses that are guaranteed Certifications after each course.</b> <b>*Wavecrest College is also the Approved Centre in Nigeria for CTH, a U.K online and certification course.</b>",
    },
  ];

  const router = useRouter();
  const navigateTo = [
    {
      name: "ADMISSION REQUIREMENTS",
      redirect: () => {
        router.push("/admission/admissionRequirements", );
      },
    },
    {
      name: "TUITION AND SCHOLARSHIP",
      redirect: () => {
        router.push("/admission/tuitionAndScholarship", );
      },
    },
    {
      name: "APPLY ONLINE",
      redirect: () => {
        router.push("/admission/applyOnline", );
      },
    },
    {
      name: "HOSTEL",
      redirect: () => {
        router.push("/admission/hostel", );
      },
    },
  ];
  return (
    <Fragment>
      <MobileSideBar />
      <Box
        h="441px"
        w="100%"
        gridGap="68px"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={waveimg} h="100%" w="100%" objectFit="cover" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="40px"
            textAlign="center"
            mt="250px"
          >
            FAQs
          </Text>
        </Box>
      </Box>

      <Box>
        <Box
          px={{
            sm: "20px",
            md: "20px",
            lg: "50px",
            xl: "91px",
            "2xl": "91px",
          }}
          my={{
            sm: "20px",
            md: "20px",
            lg: "50px",
            xl: "50px",
            "2xl": "50px",
          }}
        >
          <Box
            w="88px"
            h="3px"
            bg="#021D37"
            mb="10px"
            mt="50px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          ></Box>
          <Heading
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize={{
              sm: "21px",
              md: "25px",
              lg: "28px",
              xl: "32px",
              "2xl": "32px",
            }}
            color="#021D37"
          >
            Frequently Asked Questions
          </Heading>
        </Box>

        {FAQs.map((faq, index) => {
          const multipleAnswer = Array.isArray(faq.answer)
            ? faq.answer.map((ans, index) => {
                return (
                  <OrderedList key={index}>
                    <ListItem>{ans}</ListItem>
                  </OrderedList>
                );
              })
            : faq.answer;
          return (
            <Accordion key={index} allowToggle borderTopColor="#FFF">
              <AccordionItem borderBottom="none">
                {({ isExpanded }) => (
                  <Box
                    mx={{
                      sm: "20px",
                      md: "20px",
                      lg: "50px",
                      xl: "50px",
                      "2xl": "50px",
                    }}
                    border="none"
                  >
                    <h2>
                      <AccordionButton
                        bg="#EBEDEF"
                        mb="20px"
                        borderTop="none"
                        _expanded={{ bg: "#021D37", color: "white" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          p="10px "
                          fontFamily="Manrope"
                          fontSize={{
                            sm: "18px",
                            md: "20px",
                            lg: "22px",
                            xl: "24px",
                            "2xl": "24px",
                          }}
                          fontWeight="700"
                        >
                          {faq.question}
                        </Box>
                        {isExpanded ? (
                          <FaChevronCircleUp size="30px" />
                        ) : (
                          <FaChevronCircleDown size="30px" />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      ml="50px"
                      fontFamily="Manrope"
                      fontSize={{
                        sm: "18px",
                        md: "20px",
                        lg: "22px",
                        xl: "22px",
                        "2xl": "22px",
                      }}
                      fontWeight="400"
                      dangerouslySetInnerHTML={{ __html: multipleAnswer }}
                    />
                  </Box>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}

        <Box
          mt="70px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
          px={{
            sm: "20px",
            md: "20px",
            lg: "50px",
          }}
        >
          <Heading
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            color="#021D37"
            textAlign="center"
            mb="22px"
          >
            Navigate To:
          </Heading>
          <Grid
            gridTemplateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr",
            }}
            mb="50px"
          >
            {navigateTo.map((items, index) => {
              return (
                <Button
                  key={index}
                  fontFamily="Manrope"
                  fontSize="18px"
                  py="25px"
                  mb="15px"
                  mr="15px"
                  textAlign="center"
                  fontWeight="700"
                  bg="#EEE"
                  onClick={items.redirect}
                >
                  {items.name}
                </Button>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default FAQs;
