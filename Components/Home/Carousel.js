import { Box, Center, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = ({imagenes}) => {
 
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  return (
    <Center height="2xl">
    <Box
      position={'relative'}
      height={'2xl'}
      width={'85%'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        mt={{ base: '-110px', md: '0px'}}
        aria-label="left-arrow"
        bg="#057f54"
        color="white"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -70%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        mt={{ base: '-110px',md: '0px'}}
        aria-label="right-arrow"
        bg="#057f54"
        color="white"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -70%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {imagenes.map(imagen => (
          <Box
            key={imagen.idCarousel}
            height="xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${imagen.ruta.substring(59)})`}
          />
        ))}
      </Slider>
    </Box>
    </Center>
  );
}


export default Carousel;