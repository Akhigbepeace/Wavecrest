import React, { Fragment } from 'react'
import Navbar from 'components/layout/Navbar'
      import admission from "assets/Images/Admission.png";

import Footer from './Home/Footer'
import FooterCopywright from './Home/FooterCopywright'
import { Box, Image, Text  } from '@chakra-ui/react';

const ApplyNow = () => {
  return (
    <Fragment>
      <Navbar />
      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={admission} h="100%" w="100%" />

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
            fontSize="60px"
            textAlign="center"
            mt="140px"
          >
            APPLY NOW
          </Text>
        </Box>
      </Box>
      <Footer />
      <FooterCopywright />
    </Fragment>
  );
}

export default ApplyNow