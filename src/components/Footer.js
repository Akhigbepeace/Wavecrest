import {
  Box,
  Grid,
  Link,
  Image,
  Text,
  Button,
  Flex,
  ListItem,
  Input,
  List,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import linked from "../assets/Images/linked.png";
import twitter from "../assets/Images/Twitter.png";
import facebook from "../assets/Images/facebook.png";
import whatsapp from "../assets/Images/whatsapp.png";
import Instagram from "../assets/Images/Instagram.png";

const Footer = () => {
  return (
    <Grid
      background="#EBEDEF"
      gridTemplateColumns="repeat(3, 1fr)"
      gridGap="4rem"
      h="394px"
      mt="63px"
      pt="54px"
    >
      <Flex flexDirection="column" alignItems="flex-end" marginLeft="96px">
        <Image
          src="/assets/Images/WC-LOGO-july.png"
          alt="logo"
          w="270px"
          height="54px"
        />

        <Flex
          flexDirection="column"
          textAlign="right"
          fontWeight="500"
          fontSize="16px"
          lineHeight="20px"
          m="1rem 0"
          color="#021D37"
        >
          <Text>+234 909 685 6606</Text>
          <Text>info@wavecrest.edu.ng</Text>
        </Flex>

        <Flex>
          <Link
            href="https://www.linkedin.com/company/wavecrest-college-of-hospitality/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={linked} alt="linkedin" w="40px" h="34px" mr="10px" />
          </Link>

          <Link
            href="https://web.facebook.com/WavecrestCollegeLagos/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={facebook} alt="facebook" w="40px" h="34px" mr="10px" />
          </Link>

          <Link
            href="https://twitter.com/WaveColl"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={twitter} alt="twitter" w="40px" h="34px" mr="10px" />
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=09155003700&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={whatsapp} alt="whatsapp" w="40px" h="34px" mr="10px" />
          </Link>

          <Link
            href="http://instagram.com/wavecrestcollege"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={Instagram}
              alt="instagram"
              w="40px"
              h="34px"
              mr="10px"
            />
          </Link>
        </Flex>
      </Flex>

      <Box>
        <List
          display="grid"
          gridTemplateColumns="repeat(3, auto)"
          gridGap="23px"
          lineHeight="25px"
        >
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              ABOUT US
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              ADMISSION
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              OPUS DEI
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              CONTACT
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              ACADEMICS
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              WOMEN'S BOARD
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              FAQs
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              ALUMNI
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              CARRER
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              BLOG
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              DOWNLOADS
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#!"
              fontWeight="600"
              fontSize="16px"
              color="#021D37"
              _hover={{ textDecoration: "none", color: "#020E1B" }}
            >
              SUPPORT US
            </Link>
          </ListItem>
        </List>
      </Box>

      <Flex flexDirection="column" pr="116px">
        <Text
          color="#021D37"
          fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
          fontWeight="700"
          fontSize="25px"
          lineHeight="29px"
        >
          Suscribe to our Newsletter
        </Text>
        <Text fontWeight="400" fontSize="16px" color="#021d37" p="5px 0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos tenetur
          voluptate, similique earum obcaecati placeat.
        </Text>
        <Stack>
          <Input
            placeholder="Name"
            bg="#fff"
            h="51px"
            borderRadius="3px"
            border="none"
            p="15px 20px"
            _placeholder={{
              color: "#021D37",
              fontSize: "16px",
              fontWeight: "400",
            }}
          />

          <Input
            placeholder="Email"
            bg="#fff"
            h="51px"
            borderRadius="3px"
            border="none"
            p="15px 20px"
            _placeholder={{
              color: "#021D37",
              fontSize: "16px",
              fontWeight: "400",
            }}
          />
        </Stack>

        <Button
          w="142px"
          height="46.89px"
          bg="#021D37"
          border="none"
          color="#fff"
          fontWeight="700"
          fontSize="16px"
          lineHeight="22px"
          textAlign="center"
          borderRadius="3px"
          marginTop="8px"
          _hover={{
            bg: "#020E1B",
            transition: "all ease 0.4s",
          }}
        >
          SUBSCRIBE
        </Button>
      </Flex>
    </Grid>
  );
};

export default Footer;
