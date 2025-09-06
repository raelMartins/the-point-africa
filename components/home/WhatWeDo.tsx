import { Box, Divider, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export const WhatWeDo = ({}) => {
  return (
    <Box p={`72px 100px`} position={`relative`} minH={`610px`}>
      <Image
        src={`/images/tpa-what-we-do.jpg`}
        alt=''
        fill
        style={{ objectFit: `cover` }}
      />
      <VStack
        gap={`77px`}
        position={`relative`}
        zIndex={`1`}
        maxW={`870px`}
        mx={`auto`}
        textAlign={`center`}
      >
        <Stack w={`max-content`} align={`center`} gap={`15px`}>
          <Heading textStyle={`heading_2`}>What We Do</Heading>
          <Divider
            w={`70%`}
            borderColor={`text.1`}
            border={`1.5px solid`}
            borderRadius={`1px`}
            my={`0px !important`}
          />
        </Stack>
        <Text textStyle={`paragraph_2`}>
          We source top-tier creatives across various niches (content creators,
          photographers, videographers, designers, UGC creators and many
          others). We act as a liaison between the creatives and clients
          (brands, businesses and individuals).We manage everything from
          pricing, project timeliness, communication, deliverables and quality
          assurance.
        </Text>
      </VStack>
    </Box>
  );
};
