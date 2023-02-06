import {
  Heading,
  Input,
  Box,
  Flex,
  Image,
  Link,
  Button,
  Grid,
  Textarea,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import { forms, payNow } from "./constants";
import Footer from "../../Footer/Footer";
import FooterCopywright from "components/FooterCopywright";
import PagesBanner from "components/molecules/PagesBanner";

import { combinedConfig } from "config/constants/editable-copy/combined";
import Editable from "../Edit/Editable";
import { useCopyData } from "contexts/EditableCopyContext";

const footerConfig = combinedConfig.sharedConfig.footer;
const SupportUs = () => {
  const { data } = useCopyData();

  const { footer: footerData } = data.shared;

  return (
    <Fragment>
      <Header />
      <Navbar />
      <MobileSideBar />

      <PagesBanner
        imageURL="/assets/imgs/Admission.png"
        pageName="SUPPORT US"
      />

      <Box>
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          color="#021D37"
          my="40px"
          w={{
            sm: "290px",
            md: "400px",
            lg: "526px",
            xl: "526px",
            "2xl": "526px",
          }}
          mx="auto"
        >
          Support Us
        </Heading>

        <Flex
          flexDirection="column"
          w={{
            sm: "290px",
            md: "400px",
            lg: "526px",
            xl: "526px",
            "2xl": "526px",
          }}
          mx="auto"
        >
          {forms.map((form, index) => {
            return (
              <Input
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                h="67px"
                mb="10px"
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
            );
          })}

          <Textarea
            placeholder="Comments"
            h="67px"
            bg="#EBEDEF"
            _placeholder={{
              fontFamily: "Manrope",
              color: "#021D37",
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: "400",
            }}
          />
        </Flex>

        <Box
          w={{
            sm: "290px",
            md: "400px",
            lg: "526px",
            xl: "526px",
            "2xl": "526px",
          }}
          mx="auto"
        >
          <Grid
            mt="50px"
            alignItems="center"
            gridTemplateColumns={{
              sm: "repeat(2, auto)",
              md: "repeat(3, auto)",
              lg: "repeat(3, auto)",
              xl: "repeat(3, auto)",
              "2xl": "repeat(3, auto)",
            }}
          >
            {payNow.map((pay, index) => {
              return (
                <Image
                  key={index}
                  src={pay.image}
                  w={pay.width}
                  mr="10px"
                  h={pay.height}
                  alt={pay.alt}
                />
              );
            })}
          </Grid>

          <Link
            href="https://paystack.com/pay/wchdonate"
            target="_blank"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              type="submit"
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
              mt="8px"
              mb="70px"
              _hover={{
                bg: "#020E1B",
                transition: "all ease 0.4s",
              }}
            >
              PAY NOW
            </Button>
          </Link>
        </Box>
      </Box>

      <Editable page="shared" config={footerConfig} defaultValues={footerData}>
        <Footer {...footerData} />
      </Editable>
      <FooterCopywright />
    </Fragment>
  );
};

export default SupportUs;
