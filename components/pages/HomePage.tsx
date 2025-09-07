import { Box, Center, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { AboutSection } from '../home/About';
import { WhatWeDo } from '../home/WhatWeDo';
import { WhyChooseUs } from '../home/WhyChooseUs';
import { TalentRoster } from '../home/TalentRoster';
import { HomeNavbar } from '../layout/HomeNavbar';
import { OurProjectsSection } from '../home/OurProjects';

export const HomePageComponent = () => {
  return (
    <Box minH={`100vh`}>
      <Center
        color={`#ffffff`}
        position={`relative`}
        h={`945px`}
        overflow={`hidden`}
        w={`100%`}
        id='home'
      >
        <Box
          position={`absolute`}
          top={`0px`}
          left={`0px`}
          right={`0px`}
          zIndex={`1`}
        >
          <HomeNavbar />
        </Box>
        <Image
          src={`/images/home_hero.jpg`}
          alt='Hero'
          fill
          style={{ objectFit: `cover` }}
          priority={true}
        />
        <Stack
          gap={`20px`}
          position={`relative`}
          zIndex={`1`}
          w={`100%`}
          p={`20px 100px`}
        >
          <Text
            fontWeight={`700`}
            fontSize={`45px`}
            lineHeight={`120%`}
            letterSpacing={`0%`}
            maxW={`441px`}
          >
            Connecting African Talents with the World
          </Text>
          <Text textStyle={`paragraph`} maxW={`587px`}>
            The Point Africa connects top creatives with brands , delivering
            excellence in design.
          </Text>
        </Stack>
      </Center>
      <AboutSection />
      <OurProjectsSection />
      <WhatWeDo />
      <WhyChooseUs />
      <TalentRoster />
    </Box>
  );
};
