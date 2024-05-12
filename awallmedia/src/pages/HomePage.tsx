import React from 'react'
import Banner from '../components/Banner'
import bannerImage from '../assets/banner_image.png';

const HomePage = () => {
  return (
    <>
      <Banner 
        title='Andrew Wallace'
        image={bannerImage}
        body='Developing and designing user-centered digital solutions.' 
        subtitle='Developer at Health Canada' 
        gradient1='#4AC29A' 
        gradient2='#BDFFF3' 
      /> 
    </>
  )
}

export default HomePage