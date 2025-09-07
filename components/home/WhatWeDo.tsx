'use client';

import { Box, Divider, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

export const WhatWeDo = ({}) => {
  const [hoverTitle, setHoverTitle] = useState(false);

  return (
    <Box
      p={`72px 100px`}
      position={`relative`}
      minH={`610px`}
      id={`what-we-do`}
    >
      <Image
        src={`/images/tpa-what-we-do.jpg`}
        alt=''
        fill
        style={{ objectFit: `cover`, opacity: `.7` }}
      />
      <VStack
        gap={`77px`}
        position={`relative`}
        zIndex={`1`}
        maxW={`870px`}
        mx={`auto`}
        textAlign={`center`}
      >
        <Stack
          w={`max-content`}
          align={`center`}
          gap={`15px`}
          onMouseEnter={() => setHoverTitle(true)}
          onMouseLeave={() => setHoverTitle(false)}
        >
          <Heading textStyle={`heading_2`}>What We Do</Heading>
          <Divider
            w={hoverTitle ? `100%` : `70%`}
            transition={`.3s`}
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
