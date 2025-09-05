import { Box, Center } from '@chakra-ui/react';
import Image from 'next/image';

export const HomePageComponent = () => {
  return (
    <Box minH={`100vh`}>
      <Center position={`relative`} h={`945px`} w={`100%`} bg={`green`}>
        <Image
          src={`/images/home_hero.jpg`}
          alt='Hero'
          fill
          style={{ objectFit: `cover` }}
          priority={true}
        />
      </Center>
    </Box>
  );
};
