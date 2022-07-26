import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "components/layouts/Navbar";
import blog from "assets/Images/Blog.png";
import blogPostImage from "assets/Images/blogpost.png";

import Footer from "./Home/Footer";
import FooterCopywright from "./Home/FooterCopywright";

const BlogPost = () => {
  return (
    <Fragment>
      <Navbar />

      <Box h="300px" w="100%" gridGap="68px" position="relative">
        <Image src={blog} h="100%" w="100%" objectFit="cover" />

        <Flex
          bg="rgba(0, 24, 71, 0.5)"
          w="100%"
          position="absolute"
          bottom="0"
          p="20px 91px"
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize="34px"
            textAlign="center"
            alignSelf="flex-end"
          >
            ‘The icing on the cake’ …
          </Text>
        </Flex>
      </Box>

      <Box w="1256px" m="50px auto">
        <Flex>
          <Image
            src={blogPostImage}
            w="300"
            h="300"
            objectFit="cover"
            mr="30px"
          />

          <Box>
            <Heading
              fontFamily="Playfair Display, serif"
              fontWeight="700"
              fontSize="30px"
              lineHeight="40px"
              textAlign="left"
              color="#021D37"
            >
              ‘The icing on the cake’ …Wavecrest College of Hospitality Partners
              with Fly Africa Initiative to break Guinness World Record 2020
            </Heading>

            <Text
              mt="6px"
              color="rgba(2, 29, 55, 0.44)"
              fontFamily="Manrope"
              fontWeight="400"
              fontSize="18px"
              lineHeight="25px"
            >
              News & Events / October 8, 2022.
            </Text>

            <Text
              mt="35px"
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="600"
              color="#021D37"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              architecto, unde modi ducimus nemo adipisci maxime quos nesciunt
              voluptatibus beatae? Earum, sed aspernatur vero fugiat iure nihil
              nemo quae neque? Nihil, fuga quibusdam maxime asperiores illo
              possimus optio vitae soluta maiores incidunt necessitatibus ullam
              repellendus deserunt doloremque magnam repellat ducimus est
              aliquid dolorem! Nisi delectus, in sit sequi neque voluptate?
            </Text>
          </Box>
        </Flex>

        <Text
          fontFamily="Manrope"
          fontSize="18px"
          fontWeight="600"
          color="#021D37"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
          delectus laborum quidem esse ipsa, nemo maxime harum eaque ipsam quo
          numquam dicta. Soluta, officiis atque amet asperiores corrupti cum
          nulla veritatis libero molestiae aspernatur porro numquam consequatur
          facere officia quia voluptas laboriosam velit tenetur delectus!
          Mollitia officia dolorem, quibusdam tenetur, ipsam incidunt non quia
          perferendis, nisi deleniti sunt repellendus eaque nostrum cupiditate
          ab labore fugit id. <br /> <br /> &nbsp; &nbsp; Placeat, ratione
          officiis, sed fuga minima voluptates, consequuntur autem temporibus
          fugit id consequatur magnam quae repellendus ipsum corrupti adipisci
          ipsa. Velit, ipsum voluptates id nemo reprehenderit animi asperiores
          quae tempore repudiandae quisquam eos labore et quidem sit harum ab
          nulla consequuntur. Labore hic delectus magnam pariatur! Reiciendis
          consequatur, a tenetur in saepe laudantium odio quo mollitia
          cupiditate alias officiis repellendus delectus suscipit quam voluptate
          perspiciatis dignissimos eum, aperiam est asperiores? Fuga incidunt
          possimus fugit adipisci mollitia velit qui suscipit ad recusandae
          inventore voluptates nisi ipsam exercitationem, ipsum deserunt
          distinctio illum alias. <br /> <br /> &nbsp; &nbsp; Necessitatibus
          delectus voluptate soluta, inventore velit consequuntur sequi aut
          laboriosam repellendus impedit expedita atque ad ea temporibus cumque
          id consequatur quis consectetur facere ratione, sint recusandae. Quas
          in vitae perspiciatis consectetur debitis non animi iure, qui
          excepturi delectus odio, culpa dolore illo labore nulla alias! Sit ab
          atque sint iste exercitationem amet, repellendus neque omnis
          voluptatibus facere incidunt reprehenderit libero, labore quae, porro
          minus. Velit, possimus sunt. Libero, similique accusantium dolores
          sapiente quaerat, ullam porro sint labore, neque laborum natus odio.
          Reprehenderit officia soluta asperiores officiis est hic earum magni,
          debitis voluptatem animi dolorem ducimus, facere veniam fugiat illo
          aliquid tempore error praesentium vel. Doloremque voluptate nihil
          eligendi quas ab fuga temporibus ut aperiam nam labore quo aliquam
          incidunt ullam id, animi eaque quis a aspernatur et? Suscipit deleniti
          tempora, earum, cupiditate, error facilis doloremque repellendus at
          odio exercitationem nulla necessitatibus accusamus sunt.
        </Text>

        <Flex mb="70px">
          <Text
            fontFamily="Manrope"
            fontSize="18px"
            fontWeight="600"
            color="#021D37"
            w="65%"
            mr="20px"

          >
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis doloremque vero odio, autem fugit magni rerum aspernatur
            sed. Autem omnis nemo nobis necessitatibus voluptates aliquam quo
            iure consequatur perferendis amet voluptas sit, mollitia provident
            non tempore nisi voluptate labore ad perspiciatis eaque adipisci.
            Cumque fuga ducimus nulla, et libero minus ad vitae, error dolorem
            facilis esse! Vero non magnam quod?
          </Text>
          <Image src={blogPostImage} w="30%" />
        </Flex>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default BlogPost;
