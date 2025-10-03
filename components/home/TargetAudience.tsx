'use client';

import {
  Button,
  Center,
  Divider,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

export const TargetAudience = () => {
  const [hoverTitle, setHoverTitle] = useState(false);

  return (
    <HStack p={`60px 160px`} bg={`#DAD8D8`} my={`200px`}>
      <Stack flex={`1`} gap={`60px`}>
        <VStack
          w={`max-content`}
          align={`center`}
          gap={`15px`}
          textAlign={`center`}
          onMouseEnter={() => setHoverTitle(true)}
          onMouseLeave={() => setHoverTitle(false)}
        >
          <Heading textStyle={`heading_2`} fontSize={`45px`}>
            Our Target Audience
          </Heading>
          <Divider
            w={hoverTitle ? `100%` : `70%`}
            transition={`.3s`}
            borderColor={`text.1`}
            border={`1.5px solid`}
            borderRadius={`1px`}
            my={`0px !important`}
          />
        </VStack>
        <Text fontWeight={`600`} fontSize={`40px`} letterSpacing={`0%`}>
          Young, Black minds and creatives
        </Text>
        <Button
          variant={`primary`}
          bg={`brand_color.1`}
          fontWeight={`600`}
          fontSize={`25px`}
          lineHeight={`120%`}
          letterSpacing={`0%`}
          p={`20px 40px`}
          h={`max-content`}
          borderRadius={`10px`}
        >
          Join Us Today
        </Button>
      </Stack>
      <Center flex={`1`} position={`relative`}>
        <Grid position={`absolute`} templateColumns={`1fr 1fr`} gap={`20px`}>
          <Center
            position={`relative`}
            height={`371px`}
            w={`344px`}
            borderRadius={`10px`}
            overflow={`clip`}
            top={`50px`}
          >
            <Image
              src={`/images/creative-1.jpg`}
              alt=''
              fill
              style={{ objectFit: `cover` }}
            />
          </Center>
          <Center
            position={`relative`}
            height={`371px`}
            w={`344px`}
            borderRadius={`10px`}
            overflow={`clip`}
          >
            <Image
              src={`/images/creative-2.jpg`}
              alt=''
              fill
              style={{ objectFit: `cover` }}
            />
          </Center>
          <Center
            position={`relative`}
            height={`371px`}
            w={`344px`}
            borderRadius={`10px`}
            overflow={`clip`}
            top={`50px`}
          >
            <Image
              src={`/images/creative-3.png`}
              alt=''
              fill
              style={{ objectFit: `cover` }}
            />
          </Center>
          <Center
            position={`relative`}
            height={`371px`}
            w={`344px`}
            borderRadius={`10px`}
            overflow={`clip`}
          >
            <Image
              src={`/images/creative-4.jpg`}
              alt=''
              fill
              style={{ objectFit: `cover` }}
            />
          </Center>
        </Grid>
      </Center>
    </HStack>
  );
};
