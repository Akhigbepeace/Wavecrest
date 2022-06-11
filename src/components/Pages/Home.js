import React, { Fragment } from 'react'
import Blog from '../Blog'
import DiscoverHospitality from '../DiscoverHospitality'
import StudyProgrammes from '../StudyProgrammes'
import Showcase from '../Showcase'
import FooterCopywright from '../FooterCopywright'
import Footer from '../Footer'
import Partners from '../Partners'
import OurStories from '../OurStories'

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <DiscoverHospitality />
      {/* <Blog />
      <StudyProgrammes />
      <OurStories />
      <Partners />
      <Footer />
      <FooterCopywright /> */}
    </Fragment>
  )
}

export default Home