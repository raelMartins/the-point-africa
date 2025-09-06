import { Button, Center, Flex, HStack, Link } from '@chakra-ui/react';
import Image from 'next/image';

export const HomeNavbar = () => {
  return (
    <Flex
      gap={`10px`}
      justify={`space-between`}
      align={`center`}
      color={`text.1`}
      pr={`100px`}
      pl={`20px`}
    >
      <Center h={`150px`} w={`265px`} position={`relative`} overflow={`hidden`}>
        <Image
          src={`/images/tpa-logo.png`}
          alt=''
          fill
          style={{ objectFit: `cover` }}
        />
      </Center>
      <HStack
        fontWeight={`400`}
        fontSize={`22px`}
        lineHeight={`120%`}
        letterSpacing={`0%`}
        gap={`30px`}
      >
        <Link href={`#home`}>Home</Link>
        <Link href={`#about`}>About Us</Link>
        <Link href={`#what-we-do`}>What We Do</Link>
        <Link href={`#our-projects`}>Our Work</Link>
      </HStack>
      <Center>
        <Button
          bg={`brand_color.1`}
          fontWeight={`600`}
          fontSize={`22px`}
          lineHeight={`120%`}
          letterSpacing={`0%`}
          p={`16px 30px`}
          h={`max-content`}
          borderRadius={`10px`}
        >
          Join Us Today
        </Button>
      </Center>
    </Flex>
  );
};
