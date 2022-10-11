import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "components/Navbar";
import blogPost from "assets/Images/blogpost.png";
import blogPost2 from "assets/Images/aboutus.png";
import suicideEvent from "assets/Images/suicide-event.jpeg";
import uchyfide from "assets/Images/uchyfide.jpeg";
import Udoka from "assets/Images/Udoka.jpeg";
import NBTEdirector from "assets/Images/NBTEdirector.jpg";
import nbte from "assets/Images/nbte.jpeg";
import catfish from "assets/Images/catfish.png";
import ekpangNkukwo from "assets/Images/Ekpang-Nkukwo.jpg";
import cookFish from "assets/Images/cookFish.jpg";
import hotel from "assets/Images/hotel.jpg";
import decorating from "assets/Images/decorating.jpg";
import airport from "assets/Images/AIRPORT.jpg";
import airTravels from "assets/Images/air-travels.jpg";
import studentLetter from "assets/Images/student-letter.png";
import developingSkills from "assets/Images/developing-skills.jpg";
import JambReg from "assets/Images/JAMBReg.jpg";
import searchImg from "assets/Images/search.svg";
import Footer from "../components/Footer";
import FooterCopywright from "../components/FooterCopywright";

const BlogPost = () => {
  const blogs = [
    {
      category: "News & Events",
      topPosts: [
        {
          postHeading:
            "Minutes of Meeting with Engr. Bode Daniel Majiyagbe – Director, South-West Zonal Office, NBTE and the Management of Wavecrest College of Hospitality",
          postDate: "News and Events / March 1, 2022.",
          postsImg: NBTEdirector,
        },
        {
          postHeading: "World Suicide Prevention Day",
          postDate: "News and Events / September 10, 2022",
          postsImg: suicideEvent,
        },
        {
          postHeading: "JAMB FORM IS NOW ON SALE!",
          postDate: "News and Events / January 25, 2021.",
          postsImg: JambReg,
        },
        {
          postHeading:
            "‘The icing on the cake”…Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
          postDate: "News and Events / October 8, 2022",
          postsImg: blogPost,
        },
        {
          postHeading: "NSQ PROGRAMMES AVAILABLE",
          postDate: "News and Events / July 22, 2021.",
          postsImg: nbte,
        },
        {
          postHeading: "New Admission Requirement for National Diploma",
          postDate: "News and Events / May 14, 2021.",
          postsImg: JambReg,
        },
      ],
      posts: [
        {
          bg: "#FFF",
          postsImg: NBTEdirector,
          postsDate: "News and Events / March 1, 2022.",
          postHeading:
            "Minutes of Meeting with Engr. Bode Daniel Majiyagbe – Director, South-West Zonal Office, NBTE and the Management of Wavecrest College of Hospitality",
          postsText:
            "Engr. Bode Daniel Majiyagbe had a brief meeting with the Management Team of Wavecrest College of Hospitality on Thursday 20th Janaury 2022 at 9.30 a.m. The aim of the meeting was to formally inform the College of the decision reached by the Executive Secretary Prof. Idris M. Bugaje and the Management of NBTE to establish zonal offices for NBTE in the geopolitical zones of the country.He explained clearly that the aim of this new development is to bring the services of the Board closer to the Stake Holders and Institutions under the NBTE and to introduce the TVET (Technical and Vocational Education and Training) initiative of the Board to all Stake Holders concerned.He reiterated that the main agenda for the Executive Secretary and his team is ‘Skills, Skills, Skills’ stating that accreditation of some Institutions may be put on hold until they adopt this skills frame work into their curriculum and have a clear plan of incorporating both their students, indigenes and youth of their immediate Engr. Bode Daniel Majiyagbe presenting copies of the Operational Manual for National Skills Qualification Framework and ‘Skills Not Degree’ publication of the NBTE. to our Provost. Finally he announced that the South-West Zonal Office is located in Lagos State at Yaba College of Education which is central and easily accessible. The Provost of Wavecrest College of Hospitality – Rosana Forsuelo responded enthusiastically, stating that she and the Management Team are very happy with this new development as it is a clear and concrete sign that the NBTE is truly concerned about serving the Institutions under them better each time.‘Wavecrest College is also always at the service of NBTE being very involved in and promoting the NSQF’ – Rosana Forsuelo. She also mentioned the fact that we already have an office dedicated to the NSQ in Wavecrest College. The meeting was brief and to the point. It ended with Engr. Bode Daniel Majiyagbe presenting copies of the Operational Manual for National Skills Qualification Framework and ‘Skills Not Degree’ publication of the NBTE. Secretary  Veronica Esode Registrar Wavecrest College of Hospitality",
        },
        {
          bg: "#EBEDEF",
          postsImg: suicideEvent,
          postsDate: "News and Events / September 10, 2022",
          postHeading: "World Suicide Prevention Day",
          postsText:
            "There is growing awareness of suicide as a major public health problem, even though there is a taboo in many societies against discussing openly. Worldwide Suicide rates have increased by 60% over the last 50 years, and the increase has been particularly marked in developing countries. Suicide occurs all over the world and can take place at almost any age.Globally, suicide rates are highest in people aged 60 years and over. In some countries, however, the highest rates are found among the young. Notably, suicide is now among the three leading global causes of death among young people aged 15-34 years, the majority of suicides are reported in adults and older adults (60 years and older).Pesticide poisoning, hanging and firearms are among the most common methods of suicide globally.In Nigeria, Suicide is becoming a looming Public health problem and should be taken seriously.We remember popular cases that were reported of a man, a medical doctor who drove down to the third mainland bridge, parked his car, jumped into the lagoon, and died in 2019.-A young man identified as Kelvin committed suicide at Modinatu Street in the Ogba area of Lagos.-The lifeless body of Kevin who works with a new generation bank was found dangling from a ceiling fan, in his apartment by neighbors.-Young Nigerian, creative designer and founder of Uhuru Designz, the United States of America-based clothing company, Izuchukwu Madubueze reportedly committed suicide Over Fake Rape Allegations that took place on Twitter in July 2020. He even announced his own death on twitter before his death.Sadly as we know these are not all the cases and some have not been covered by the media.Suicides are Preventable!“No matter where a country currently stands in suicide prevention”, said Dr Alexandra Fleischmann, Scientist in the Department of Mental Health and Substance Abuse at WHO, “effective measures can be taken, even just starting at local level and on a small-scale”Always Check up on friends and family.Encouraging friends and families to always take mental health seriously and to see a counselor when it’s necessary.Responsible reporting of suicide in the media, such as avoiding language that sensationalizes suicide and avoiding explicit description of methods used, and early identification and management of mental and substance use disorders in communities and by health workers in particular.Social media has come to stay and some people are living fake lives. Don’t compare your life with others because you don’t know what they are going through and you may just be better off than them.Follow-up care by health workers through regular contact, including by phone or home visits, for people who have attempted suicide, together with provision of community support, are essential, because people who have already attempted suicide are at the greatest risk of trying again.Regular exercise, improve healthy lifestyle.Reducing access to means of suicide is one way to reduce deaths.Below is a few list of some Mental health Organizations we have:African Mental Health Awareness & Care Initiative, MaiduguriMental Health Foundation, Nigeria,Gede Foundation, Abuja UNIC Ikoyi Source: WHO, Vanguard Article written by Sheba Asuquo",
        },
        {
          bg: "#FFF",
          postsImg: JambReg,
          postsDate: "News and Events / January 25, 2021.",
          postHeading: "JAMB FORM IS NOW ON SALE!",
          postsText:
            "JAMB form is now on sale! Candidates can now proceed to register for the 2021/2022 JAMB examinations. Forms can be purchased at approved bank or CBT centers around you Looking to study Hospitality Management in a reputable Institution? Look no further than at Wavecrest College of Hospitality where we pride ourselves in offering students a robust holistic learning/training in Education, Economic Independence and Employment.",
        },
        {
          bg: "#EBEDEF",
          postsImg: blogPost,
          postsDate: "News and Events / October 8, 2021.",
          postHeading:
            "‘The icing on the cake”…Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
          postsText:
            "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the Fly Africa Initiative to make an official attempt to break the Guinness World Record to make the largest cupcake mosaic logo of 60,000 cupcakes to celebrate Nigeria’s 60th Independence Anniversary in Lagos.For those who may not know, Fly Africa is an initiative of Outori Limited created to inspire and educate Africans through live experiences, to rise up to their great potentials by taking actions that will move the African continent forward. Mr. Wole Olagundoye the Managing Director of Outori and the brain behind the ‘Sweet 60’ project visited Wavecrest College with his Team to conclude plans and logistics on how the tail end of the project will be executed. This last lap was indeed very crucial and needed to be handled by professionals and like minds who saw the vision of the project through his own eyes. Choosing Wavecrest College; the place to ‘Discover Hospitality’ to partner in the project was indeed the best decision. Wavecrest College is the First Private Monotechnic in Nigeria specialising in Hospitality careers, with over 40 years of hospitality experience built on our solid core values of Teamwork, Respect for others, Industriousness, Personal responsibility, Integrity and Spirit of service.The role of Wavecrest was mind-blowing – to prepare the butter icing, roll and cut out fondant icing of different colours needed to cover 60,000 cupcakes. 60,000 not 6,000! This indeed was a challenge for us but knowing the goal, we were ready to go any length in order to make it happen.The College became a factory overnight with all hands on deck from the usual catering staff, to our students who joyfully volunteered. Even the Provost had her own quota of fondants to cut. It was another opportunity to witness our values come alive in real time as every member of staff took up the project like it was their personal business. It took 4 days working round the clock, swimming in shades of green, grey and white fondant, kneading and cutting 3 inches each of fondant, no more no less. ‘Thank you for everything your team did to make this historical event a success. Your warm hospitality was second to none, your team members were awesome and dedicated and I am indeed proud to be associated with you.’ This feedback from one of the Project Coordinators says it all!",
        },
        {
          bg: "#FFF",
          postsImg: nbte,
          postsDate: "News and Events / January 25, 2021.",
          postHeading: "NSQ PROGRAMMES AVAILABLE",
          postsText:
            "There are lots of different NSQs to choose from, which are regularly being reviewed and updated. They are available in five sectors i.e hospitality and tourism, power/energy/engineering, building construction, service and agro-processing as giving in the table below; The NSQ system – Who does/do what Sector skills councils: identify, define and update employment-based standards of competence for agreed occupations. These people effectively represent the interests of the trade or industry concerned, to which the particular NSQ relates. Sector Bodies define what the job entails. For government led sector skills council, the composition should be 70 % industry/ employers and 30% trade unions, professional associations, academia etc. Awarding bodies: design assessment and quality assurance systems, and gain sector bodies endorsement prior to submission to NBTE for accreditation of the qualification. Awarding bodies approve training and assessment centres to offer NSQs. implement and assure quality of the NSQs . Awarding Bodies are basically the top-level training certification organisations (the ones whose names and logos are on the certificates). They don’t deliver the training, they design the structures of the qualifications and accredit the certification, which the training organisations and Assessment Centres use and deliver. Awarding Bodies engage with client organisations if they are large enough to have their own NSQ training and delivery departments. Awarding bodies engage with Sector Bodies and training organisations. Training organisations are effectively distributors of the Awarding Bodies’ qualifications systems. They undertake external verification to ensure that candidates are being assessed fairly and consistently across all centres. Regulatory Body: NBTE accredits proposals for qualifications submitted by awarding bodies, and monitors Awarding bodies offering NSQs. NBTE effectively manages the whole system on behalf of the Government. Assessment centres: assess NSQs according to Awarding body criteria. Training providers: deliver NSQ training in partnership with the industry, register candidates, assess and guide candidates towards achieving NSQs.",
        },
        {
          bg: "#EBEDEF",
          postsImg: JambReg,
          postsDate: "News and Events / May 14, 2021.",
          postHeading: "New Admission Requirement for National Diploma",
          postsText:
            "The Unified Tertiary and Matriculation Examination board has approved new admission requirement for Wavecrest College.This approve now allows the college to accept more subject combination from JAMB candidates.See the new subject combination accepted by Wavecrest College in JAMB for 2 years national Diploma below Entry Requirements Five (5) credit passes in SSCE/NECO/GCE Compulsory Subjects Include: Biology/Agricultural Science/Health Science/ Food and Nutrition/Catering craft practice In addition, to four (4) of the following: Physics,  Chemistry, Mathematics/ Statistics, Geography, Food and Nutrition, Economics/Commerce, Technical Drawing, English Language/Literature in English, Home Management/Catering Craft/Home Economics, Computer studies/Information Technology, Food &amp; Nutrition, Marketing/Business Management, Financial Accounting, Government/History, Civic Education, UTME REQUIREMENTS COMPULSORY: ENGLISH LANGUAGE, Any three subjects from: Biology, Chemistry, Physics, Geography, Mathematics, Principles of, Accounts, Economics, Agricultural , Science, Commerce, Home Economics, French/Literature, Government/History.How To Apply Fill the Wavecrest Application Form online Return for the current UTME Log on to the UTME website Click on Private Polytechnics/Monotechnics And select Wavecrest College of Hospitality Note that your 1st choice can be an ND Awarding Institution Choose Wavecrest College as your FIRST CHOICE for NATIONAL DIPLOMA in Hospitality Management Complete the registration process",
        },
      ],
    },

    {
      category: "Receipes",
      topPosts: [
        {
          postsImg: cookFish,
          postHeading: "The Different Ways To Cook Fish",
          postDate: "Recepies / November 12, 2021 ",
        },
        {
          postsImg: catfish,
          postHeading: "CATFISH PEPPER SOUP",
          postDate: "Recepies",
        },
        {
          postsImg: ekpangNkukwo,
          postHeading: "EKPANG NKUKWO",
          postDate: "Recepies",
        },
      ],

      posts: [
        {
          bg: "#FFF",
          postsImg: cookFish,
          postsDate: "Recepies / November 12, 2021",
          postHeading: "The Different Ways To Cook Fish",
          postsText:
            "Yes, you know that fish is one of the healthiest and common proteins in the world after eggs! It’s good for the heart because of the abundance of omega-3. It has other health benefits such as stroke reduction, contribution to brain health, and prevention of Alzheimer’s amongst others. What you may not know are the different ways to cook fish. smiles. Christmas is by the corner and you may want to take the time to enjoy yourself in different ways. Now, follow me as I show you 5 ways to cook fish. 1. Grilling Fish: When grilling fish, keep a close watch. Fish only takes a few minutes per side to cook. 2. Poaching Fish: poaching refers to the cooking of fish with liquid. It might be water, stock, milk, or wine. To poach, add enough water in a pot or pan to just barely cover the fish. 3. Steaming Fish: This refers to the use of a steamer basket to steam the fish. Here’s how to steam fish. Marinate the fish with spices, ginger, garlic, and chili peppers to make it tasty Pour about 2 cups of water into the pan or pot. Use a folding steamer basket with enough room for each piece of fish to lie flat. Place the steamer over the water, cover the pot, and leave the water to boil. Then check to see when it’s done. 4. Baking Fish: Baking fish allows you to get the satisfying crunch of fried fish without all the fat. 5. Deep Frying 6. Broiling Fish There are many ways that you can prepare fish, but some cooking methods can bring out the full flavor of fish. Want to learn more, register for our culinary program on wavecrest.edu.ng.",
        },
        {
          bg: "#FFF",
          postsImg: catfish,
          postsDate: "Recepies",
          postHeading: "CATFISH PEPPER SOUP",
          postsText:
            "INGREDIENTS: 1.2 kg fresh catfish, 110g onions, chopped (1 medium), 2 seasoning cubes, 1 tablespoons ground crayfish, 2 scotch bonnet, salt, 2 big ehuru, 3 small ground nutmeg, 1/2 teaspoon ground uziza, 2 sticks uda, Utazi leaves (bitters). METHOD Toast and grind ehuru, hit uda to just break it open. Wash catfish slices well with lime to get rid of the sliminess. Pour hot water over the fish slices and leave to stand for 1-2 minutes, drain and rinse in cold water.Place in a pot and add just enough water to cover the fish. Place over medium heat. Add onions, seasoning cube, crayfish, peppers and sprinkle some salt. Cover and bring to a boil, add ground ehuru, uziza and uda, gently shake and swirl your pot, cook for 5-8 minutes. Add about 5 leaves of shredded utazi and some water. Taste and correct seasoning. Cook for another 5-8 minutes until fish is well cooked. Take off the heat. Serve your Catfish pepper soup with boiled yam, plantain, rice, agidi (eko, corn paste pudding) etc. NOTE: You can use less scotch bonnet and add a little Cameroon pepper, it tastes really good. Instead of the different spices used here, you can simply use store-bought Pepper soup spice mix or any mixture of spices you like.",
        },
        {
          bg: "#FFF",
          postsImg: ekpangNkukwo,
          postsDate: "Recepies",
          postHeading: "EKPANG NKUKWO",
          postsText:
            "Ekpang Nkukwo is a traditionnal Nigetrian dish native to the Efiks and Ibibios. It is made of freshly grated cocoyam, then wrapped in leafy greens and slowly simmered with various types of fresh o smoked fish, meat, crayfish, red oul and sther spices depending on the cook's preference until cooked to perfection INGREDIENTS: 4 pounds cocoyam, 4-5 bunch leafy greens cocoyam leaves, collard greens, spinach, romaine lettuce, ½ pound boiled beef,1-2 cups dried fish, ½ cup ground crayfish, ½ medium onion chopped, 1½ -2 cups palm oil /red oil, Bouillon cubes to taste, 1 tablespoon ground onions (optional),1 teaspoon ground pepper, 1 scotch bonnet pepper or any hot pepper optional, Salt and pepper to taste. PROCEDURE Cut the beef into bite-size chunks. Season with salt, Maggi, and onions. Cook until tender.(make sure you have at least 2 to 3 cups of stock from the beef to use in cooking this dish).Peel Coco yam and cut into large chunks and wash immediately to prevent discoloration and leave them in cool water until ready to use.Pound the cocoyam in a mortal until there is a puree or use a grater to grate the cocoyam.  Lightly salt and set aside.Wash leaves and tear them into medium pieces, making sure there are no holes in the leaves.Pour about ½ cup of oil into a large pot. Set aside. Scoop a tablespoon or so of grated cocoyam mixture onto a leaf and wrap tightly (to form the shape of fingers) making sure the cocoyam is not sticking out.Arrange wrapped cocoyam fingers in the oil pot in a circle leaving a hole in the middle. Repeat until the cocoyam mixture has been completely used up.In a separate pot bring about 7 cups of water to a boil. Add chopped onions, crayfish, fish, meat, salt, pepper, bouillon cubes, palm oil, and onions to the pot.Let it simmer for about 10 minutes, there should be no stirring at this point until most of the ekpang firms up- add about 1/2 cup of beef stock to prevent any burns.Then after ekpang firms up add about all the beef stock if you have any with about 3 cups water or just use 4-6 cups of hot water or more to the pot and let it cook on medium heat for about an hour until fully cooked. You may add more water to prevent burns.Stirring should be kept at a minimum- to prevent the ekpang from becoming mushy. Adjust for ekpang consistency with water, salt and pepper.",
        },
      ],
    },

    {
      category: "Testimonials",
      topPosts: [
        {
          postsImg: Udoka,
          postHeading:
            "I Wanted to Study in A Reputable Culinary School That is Why I Came To Wavecrest College- Udoka John",
          postDate: "Testimonials / September 21, 2020",
        },
        {
          postsImg: blogPost2,
          postHeading:
            "“I Want to Own My Restaurant That is Why I Came to Wavecrest College for Training” -Victoria Joseph",
          postDate: "Testimonials / September 21, 2020",
        },
      ],
      posts: [
        {
          bg: "#FFF",
          postsImg: Udoka,
          postsDate: "Testimonials / September 21, 2020",
          postHeading:
            "I Wanted to Study in A Reputable Culinary School That is Why I Came To Wavecrest College- Udoka John",
          postsText:
            "Hi Udoka John, you look excited to be here. What influenced your choice of training at Wavecrest college? Seeing other Chefs on television makes me so excited so I said to myself ‘I must study in a reputable place’, that’s why I came to Wavecrest College of Hospitality.How has this training in Wavecrest equipped you for the future?The training has added so many recipes to my cooking. I have learnt a lot of delicacies that would help me in my future business, in my home and my marriage.Wow, that’s beautiful. The family gets to benefit also. What’s your next line of action?I would like to work for an organisation first to gain more experience in the industry, thereafter I will open my own eatery. Where do you see yourself in the future, the next 5 years from now? In the next 5 years, I want to see myself owning a BIG  eatery that people would be trooping in to get their stuff.",
        },
        {
          bg: "#EBEDEF",
          postsImg: blogPost2,
          postsDate: "Testimonials / October 22, 2022.",
          postHeading:
            "“I Want to Own My Restaurant That is Why I Came to Wavecrest College for Training” -Victoria Joseph",
          postsText:
            "Hello, may we meet you? My name is Victoria Joseph What inspired you to study at Wavecrest College? I have always wanted to own my restaurant so looking for a school that can give me the basic knowledge, skills and also the right ingredients combined to produce a mouth-watering delicacy. I searched through the internet and I came across Wavecrest College. I found out that it is a reputable institution and I decided to give it a shot. I came to visit and I saw the environment, everybody was well organized  so I said this is the perfect place for me. How has this training in Wavecrest equipped you for the future? The training has equipped me to create a lot of recipes now and the Chef filled us with so much knowledge, little secrets and tips I never knew. I am sure that when I open my restaurant is going to be a hit. So you intend to open a restaurant? Yes… that’s why I am here. I want to own my own restaurants with a lot of branches in Lagos, and… everywhere in the world. Where do you see yourself in the future, the next 5 years from now? I see myself owning my restaurant and having lots of outlets around the globe.. Thank you for your time",
        },
      ],
    },

    {
      category: "Hospitality Articles",
      topPosts: [
        {
          postsImg: airport,
          postHeading:
            "Airline Travel: Indian Domestic Flights Resumes After Covid-19 Shutdown",
          postDate: "Hospitality Articles / May 25, 2020.",
        },
        {
          postsImg: airTravels,
          postHeading: "The future of Air Travels after COVID 19- Sheba Asuquo",
          postDate: "Hospitality Articles / June 23, 2020",
        },
        {
          postsImg: hotel,
          postHeading:
            "HOTEL INDUSTRY RECOVERY: VALUE RETENTION AND SUSTAINABILITY",
          postDate: "Hospitality Articles / August 5, 2022.",
        },
        {
          postsImg: decorating,
          postHeading: "Top 3 Creative Ideas for Decorating Your Dining Table",
          postDate: "Hospitality Articles / November 4, 2019",
        },
      ],
      posts: [
        {
          bg: "#FFF",
          postsImg: airport,
          postsDate: "Hospitality Articles / May 25, 2020.",
          postHeading:
            "Airline Travel: Indian Domestic Flights Resumes After Covid-19 Shutdown",
          postsText:
            "Good news for the Hospitality and Tourism Industry: Indian domestic flights have opened up today after about 2 months of Covid-19 lock-down. This is good news for the world of Hospitality and Tourism because India is the second-most populous country in the world with over 1 billion people. While major parts of the Hospitality Industry remain closed, we are excited that countries are beginning to open up. Remember to stay safe and observe all health guidelines.",
        },
        {
          bg: "#EBEDEF",
          postsImg: airTravels,
          postsDate: "Hospitality Articles / June 23, 2020",
          postHeading: "The future of Air Travels after COVID 19- Sheba Asuquo",
          postsText:
            "It is no longer news that Aviation is one of the sectors most affected by the COVID-19 pandemic. As the lockdown continues to ease off in most parts of the world a lot of people are still wondering what travel would be like. Research from The International Air Transport Association (IATA), shows that just 14% of consumers say they’ll resume travel as soon as restrictions are lifted.Nevertheless, the airports and airlines are working round the clock and putting measures in place to ensure safe travel post COVID-19. You should expect to see the following in the airports and airlines as we look to a brighter future. Case study: EMIRATES AIRLINE Health screening protocols will be carried out before every journey to ensure that passengers are well enough to fly. Rapid COVID-19 Passenger testing for specific destinations. Enhanced cabin cleaning and thermal screening for fever detection. Microbial shields at check-in and social distancing measures. Complimentary travel hygiene kits for all passengers such as face masks, gloves, anti-bacterial wipes and hand sanitizer for extra protection during the journey Staggered boarding in small groups Modified in-flight service for health and safety reasons Dedicated cabin service attendant for onboard hygiene Even though some experts say that it may take up to 2 years for the aviation industry to be as it was before the COVID-19, we hope that it will be quicker than imagined.",
        },
        {
          bg: "#FFF",
          postsImg: hotel,
          postsDate: "Hospitality Articles / August 5, 2022.",
          postHeading:
            "HOTEL INDUSTRY RECOVERY: VALUE RETENTION AND SUSTAINABILITY",
          postsText:
            "Written by Alec Hills; Article from https://www.tourism-review.com/. After the drop in demand and the massive loss of control in the past months, the hotel industry is longing for the end of the Coronavirus pandemic. At the operational level, intensive hygiene concepts and process redesigns for a successful reopening are being implemented and questions are being asked about when everything will return to ‘normal’. Bright Spots but Far from Stable. However, people in the hospitality industry are slowly becoming aware that the scale of this crisis is so drastic that the future has already changed direction. Thus, for the hotel industry, it is now a matter of making a fresh start and integrating socio-economic challenges into their own business model. The first bright spots are slowly emerging in the travel market. However, it will still take some time to stabilize. Thanks to improving numbers of infections and the enormous importance of tourism for the national economies, hotels in most European countries are already open again. With the reopening of the hotel and travel markets, it is now up to hoteliers to cope with the effects of the crisis. Many Questions Arise Hotel operators are facing a challenge of whether the reopening will pay off at all. If so, exactly when and under what legal conditions, without losing any more money? Can the lease be paid again? Investors and asset managers, in turn, worry about the tenants securing cash flows and the commitments and promises made to investors. Active buyers are wondering which markets, segments and concepts are the fastest to emerge from the crisis mode and offer opportunities for increasing value.Localization of a Globalized World. A trend that is already emerging is the localization of a globalized world. The hotel industry recovery can benefit from local productions booming and networks being localized. In the future, the viability of the business relationship between landlord, tenant, lender and borrower, client and customer will be put to the test. Hotel owners, operators and banks have to secure values and be warry of the sustainability of business models. The world as we know it is currently dissolving, at least in some areas. At the same time, however, there are new long-term perspectives. In addition to financial aid and fair burden-sharing, it is now a matter of developing business models with the involvement of all stakeholders. Unilateral solutions at the expense of a partner will quickly lead to major problems in the next few years.",
        },
        {
          bg: "#EBEDEF",
          postsImg: decorating,
          postsDate: "Hospitality Articles/ October 22, 2022.",
          postHeading: "Top 3 Creative Ideas for Decorating Your Dining Table",
          postsText:
            "Having a small party at home is also an opportunity to display your entertainment skills. Since the meal is the main focus of the entire celebration, you should choose a table centerpiece that will really impress your guests but you don’t have to break the bank to get it done. Here are some creative ideas for a stylish centerpiece.1. Candles: Place a large candle in a glass container surrounded by stones and shells.  Nothing makes a table look more elegant than soft, glowing candles. 2. Lemons, limes, and oranges add bright pops of color to a table without breaking the budget. Stack them in tall, narrow vases or fill round, wide bowls with them. 3. Wine Bottles: Take a few bottles from your previous party and remove the labels. Then fill them with thin branches of flowers and tie them with a rope or ribbons. These types of arrangements work really well at picnics and outdoor gatherings.",
        },
      ],
    },

    {
      category: "Other Articles",
      topPosts: [
        {
          postsImg: developingSkills,
          postHeading:
            "Developing Skills for a Better Life – Vocational Training upgraded",
          postDate: "Other Articles / August 5, 2022",
        },
        {
          postsImg: uchyfide,
          postHeading:
            "The Three E’s of Wavecrest College of hospitality by @Uchyfide / September 3, 2021",
          postDate: "Other Articles",
        },
        {
          postsImg: studentLetter,
          postHeading:
            "A letter to my students during ‘Lockdown’-by Ifeoma Nwabachili",
          postDate: "Other Articles / April 22, 2020",
        },
      ],

      posts: [
        {
          bg: "#FFF",
          postsImg: developingSkills,
          postsDate: "Other Articles / Aug 05",
          postHeading:
            "Developing Skills for a Better Life – Vocational Training upgraded",
          postsText:
            "Veronica Esode Registrar Wavecrest College of Hospitality In the world today, the exponential growth rate of graduate unemployment has become a serious cause of anxiety. It is a challenge that most economies are facing under the current economic circumstances (Oppong & Sachs, 2015). More so, with the advent of COVID-19, the world we have always known is not just rapidly changing, NO! In fact, we can hardly recognize it, and yet we must survive and thrive with whatever we can lay our hands-on. Some very well-known causes of unemployment in Nigeria include an excessive supply of university graduates as compared with available job opportunities, insufficient hands-on and practical training to match job requirements, and a non-existent curriculum for training in Life Skills which is of utmost importance for survival and thriving in the work environment. https://www.nepad.org/skillsportalforyouth/good-practice/depth-hospitality-and-life-skills-training-guarantees-girl-child. The figures from JAMB 2019 Admissions speaks volumes. For all courses apart from Education and Agriculture, applicants are at least 3 times more than the available spaces in Higher Institutions. In the case of Medicine and Law, they are up to 15 times more than the available spaces.However, for Polytechnics and Monotechnics who have a quota of 17, 574, only 4,982 were admitted. That is 72%  of spaces are waiting to be filled. This may be due to the widespread notion that the University Degree is superior to the Diplomas from other Higher Institutions. It could also be due to the fact of the poor standards of some Institutions. Nevertheless, times have changed and we need to look forward and ahead. Conrad Burns said ‘Vocational education programs have made a real difference in the lives of countless young people nationwide; they build self-confidence and leadership skills by allowing students to utilize their unique gifts and talents’. The Nigerian government is doing its bit to establish policies and strategies to salvage the situation. Technical and Vocational Training (TVET) System https://unevoc.unesco.org/wtdb/worldtvetdatabase_nga_en.pdf and the National Skills Qualification Framework (NSQF) for example aim to assist the federal and state education authorities in their effort to revitalize, reform and expand the provision of skills, vocations, science, and technology to meet the nation’s present and future socio-economic needs. Nevertheless, as individuals, we need to wake up to the reality on the ground. Vocational training and Technical skills are extremely pertinent today. Truth be told,  the professional courses are needed – we always need Doctors, Engineers, and Lawyers but as we see from the JAMB statistics, these courses are highly saturated on the level of admissions and much more so on the level of employment. After the struggle to gain admission, getting a job is even more difficult. Why do we keep complicating our lives when there are other options and possibilities, lucrative and mind-blowing career paths that Nigerian youths can follow? Many applicants are still out there seeking admission into ‘professional’ courses. This mentality among Parents, Guardians, and the Applicants themselves needs to be transformed and enlightened if the scourge of unemployment is to be eradicated. ",
        },
        {
          bg: "#EBEDEF",
          postsImg: uchyfide,
          postsDate: "Other Articles / October 22, 2022.",
          postHeading:
            "The Three E’s of Wavecrest College of hospitality by @Uchyfide",
          postsText:
            "Education: I have been a lover of good and wholesome meals before I attended Wavecrest College. But Wavecrest took my brain, my ideas about food and hospitality, and in fact my whole body system back to factory settings. In a few words, I have gained basic and standard knowledge about good cooking skills and accurate measurement in the kitchen, personal hygiene, professional ethics, and morals. Empowerment: I have been empowered with a heart of a lioness to break limits and do exploits, to stand out and be unapologetically independent. I now have self-confidence, honesty, truth, and godly morals. Employment: I have employed myself full-time. I am into cooking, serving, and educating others at UCHYFIDE CULINARY. It didn’t come that easy, with much work, dedication, and most importantly with the help of God Almighty, I am a full-time staff and manager of Uchyfide CULINARY. I AM BREAKING LIMITS. THANK YOU WAVECREST COLLEGE OF HOSPITALITY.",
        },
        {
          bg: "#FFF",
          postsImg: studentLetter,
          postsDate: "Other Articles",
          postHeading: "A Letter to my students during lockdown",
          postsText:
            "Heyyy!!! Who screamed? My house! The windows, the nets, the doors, and the floors everything is screaming…why? They have never experienced such ‘squeaky clean’ scrubbing ever. Everywhere … What is happening? For the past 3 weeks everyone has been at home. Something in town…Corona Virus! Run! The sink: ‘I am constantly wet’. (Everyone is washing their hands). I can see one person about 15 times in a day. My assistant (liquid soap) does not last anymore for up to 2 days. The Mirror: I am not lacking faces anymore. (Those washing their hands have been admiring themselves) The Door: The elbow has become my new love. (Everyone tries to open with the elbow.) The floor: I get to be swept and scrubbed daily. My new perfume is bleach! My dear students, The situation we find ourselves in, has been highly unprecedented. We are shocked, the whole world has been taken unawares. And we find that in such situations, we don’t know how to react. There are many ways one can react: ‘fear, learn or grow…’copied see image below. We have chosen to act, we want to… At this period too, the fear of the effects of the pandemic, including reduced supply of our basic needs for the day make it more worrisome.  But what do we do? Where do we go from here? It is very tough for you and for most of us. And now, we need to do our classes online! Technology use comes with its varying challenges: not having adequate mobile devices to download the appropriate app, insufficient power supply with reduced battery power of our devices, and the increasing cost of data! Name it!…. Can we make the most of our situation? We decided at the point of the lockdown that we would start classes online if ‘stay home’ continues. We agreed to use the most accessible means for many of us for classroom teaching and learning. However, as the day goes by we realise that the challenges get rougher. And we don’t know, what can we do? While we work and pray for the best…Do you know you can save your data and your battery life? Here are a few tricks I use: Keep a timetable and keep busy in the house. Have time to clean, study, be on the phone, watch movie, go to bed etc. When you engage in many activities, you would not be ‘hooked’ on your phone.Switch off phones when not in use for a long time. For example when going to bed. Put your phone settings so that it does not automatically download media. You download the ones you believe are of interest to you. As you know, your contacts send many things on Whatsapp and some are repeated in groups. Set your Whatsapp messages to ‘silent’, your phone will not beep all the time message comes in. Switch on your data at a fixed time when you plan to be online or to check and reply messages. If you are working with a laptop, try to work offline most of the time and then copy and paste your work when you are ready to reply or send email for example. Switch off apps that run or update automatically once you are connected to internet. You may want to exit from Whatsapp groups that do not add much value to you. Evade clicking on all messages on the group especially if you are aware that the sender usually sends unimportant messages. Limit sending videos and making video calls. Use messages to fix appointment for when you want to call or to be called. Plan your social media presence especially on Facebook. Must I like all selfie photos… NO! Back to our letter… What can I learn today outside school work? I won’t go to bed unless I learn something ‘new’…’ Let’s grow on the inside…’ like St. Josemaria advises. ‘If I make it out of this period what account do I give to myself, to others and God of making use of the talents I have…’ Creativity, initiative within the limits of the so little I have left…. This is part of Hospitality… remember…Wavecrest! …Discover Hospitality… What can I do for someone today? ‘I will pray and see how…’ Yes, that’s the spirit… We can …God help us! 😀 Nwabachili, 16-04-2020 p.s. I plan to learn to use the lawnmower today as the gardener has not been at work, and the grass is almost seeming like short trees.  I am afraid ‘creepy crawly’ may soon become a friend to the compound! I would see if I send you a photo when I start using it.",
        },
      ],
    },
  ];

  const categoryMap = {};
  const categories = [];
  blogs.forEach((bl) => {
    categories.push(bl.category);
    categoryMap[bl.category] = bl;
  });

  const [currentBlog, setCurrentBlog] = useState(categoryMap[categories[0]]);

  const navigate = useNavigate();

  const BackToBlog = (e) => {
    e.preventDefault();
    navigate("/blog", { replace: true });
  };
  const [searchParams] = useSearchParams();

  const image1 = searchParams.get("image1");
  const image2 = searchParams.get("image2");

  const topPosts = (topPost) => {
    navigate(
      `/posts?image1=${topPost.postsImg}&date=${topPost.postDate}&headline=${topPost.postHeading}&texts=${topPost.postText}`,
      { replace: true }
    );
  };

    // const ShowPosts = (post) => {
    //   navigate(
    //     `/posts?image1=${post.postsImg}&date=${post.postsDate}&headline=${post.postHeading}&texts=${post.postsText}`,
    //     { replace: true }
    //   );
    // };
  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" position="relative">
        <Image src={image1 || image2} h="100%" w="100%" objectFit="cover" />

        <Flex
          bg="rgba(0, 24, 71, 0.5)"
          w="100%"
          h="100%"
          position="absolute"
          bottom="0"
          p={{
            sm: "20px",
            md: "20px 40px",
            lg: "30px 91px",
            xl: "20px 91px",
            "2xl": "20px 91px",
          }}
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize={{
              sm: "25px",
              md: "25px",
              lg: "30px",
              xl: "30px",
              "2xl": "30px",
            }}
            lineHeight={{
              sm: "35px",
              md: "35px",
              lg: "35px",
              xl: "35px",
              "2xl": "40px",
            }}
            alignSelf="flex-end"
          >
            {searchParams.get("headline")}
          </Text>
        </Flex>
      </Box>

      <Flex
        w="100%"
        my="23px"
        mx="auto"
        px={{
          sm: "0",
          md: "0",
          lg: "0",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Box
          w={{
            sm: "90%",
            md: "85%",
            lg: "80%",
            xl: "75%",
            "2xl": "75%",
          }}
          mx="auto"
        >
          <Button
            fontFamily="Manrope"
            fontSize="18px"
            py="25px"
            mb="52px"
            fontWeight="700"
            bg="#EEE"
            onClick={(e) => BackToBlog(e)}
          >
            <FaChevronLeft size="20px" />
            Back To Blog
          </Button>

          <Heading
            color="rgba(2, 29, 55, 0.44)"
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="18px"
            mb="20px"
          >
            {searchParams.get("date")}
          </Heading>

          <Box>
            <Text
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="400"
              lineHeight="25px"
              color="#021D37"
            >
              {searchParams.get("texts")}
            </Text>

            <Image
              src={image1 || image2}
              w="100%"
              h="315px"
              objectFit="cover"
              my="10px"
            />
          </Box>
        </Box>

        <Box
          w="300px"
          ml="50px"
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          <InputGroup>
            <Input
              type="text"
              variant="filled"
              placeholder="Search"
              w="100%"
              h="67px"
              mb="60px"
              _placeholder={{
                fontFamily: "Manrope",
                color: "#021D37",
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: "400",
              }}
            />
            <InputRightElement
              children={
                <Image
                  src={searchImg}
                  w="20px"
                  h="20px"
                  mt="23px"
                  mr="24px"
                  alignItems="center"
                />
              }
            />
          </InputGroup>

          <Box>
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
            >
              Categories
            </Heading>

            <Box mt="25px">
              {categories.map((category, index) => {
                return (
                  <Box
                    key={index}
                    display="flex"
                    flexDirection="column"
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize="18px"
                    borderRadius="3px"
                    bg="#EBEDEF"
                    p="25px 20px"
                    w="100%"
                    cursor="pointer"
                    lineHeight="24px"
                    onClick={() => {
                      setCurrentBlog(categoryMap[category]);
                    }}
                    borderBottom={
                      categories.length - 1 === index
                        ? "none"
                        : "1px solid rgba(2, 29, 55, 0.25)"
                    }
                    _hover={{
                      textDecoration: "none",
                      bg: "rgba(2, 29, 55, 0.25)",
                    }}
                  >
                    <Text>{category}</Text>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box>
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              mt="60px"
              mb="25px"
            >
              Top Posts
            </Heading>

            <Box>
              {currentBlog.topPosts.map((topPost, index) => {
                return (
                  <Flex
                    key={index}
                    bg="#EBEDEF"
                    p="25px 35px"
                    borderBottom={
                      currentBlog.topPosts.length - 1 === index
                        ? "none"
                        : "1px solid rgba(2, 29, 55, 0.25)"
                    }
                    cursor="pointer"
                    onClick={() => topPosts(topPost)}
                    transition="all ease 0.5s"
                    _hover={{
                      bg: "#DDD",
                    }}
                  >
                    <Text
                      color="#021D37"
                      fontFamily="Playfair Display"
                      fontWeight="600"
                      fontSize="40px"
                      mt="-15px"
                    >
                      {index + 1}
                    </Text>

                    <Box>
                      <Heading
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="16px"
                        ml="20px"
                        lineHeight="21px"
                      >
                        {topPost.postHeading}
                      </Heading>

                      <Text
                        fontFamily="Manrope"
                        fontWeight="400"
                        fontSize="12px"
                        lineHeight="16px"
                        color="rgba(2, 29, 55, 0.5)"
                        mt="10px"
                        mb="15px"
                        ml="20px"
                      >
                        {topPost.postDate}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Flex>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default BlogPost;
