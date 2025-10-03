'use client';

import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

export const PreferableClients = () => {
  const [hoverTitle, setHoverTitle] = useState(false);

  return (
    <Stack gap={`80px`} p={`72px 100px`} position={`relative`} minH={`610px`}>
      <VStack gap={`77px`} position={`relative`} zIndex={`1`} mx={`auto`}>
        <Stack
          w={`max-content`}
          align={`center`}
          gap={`15px`}
          textAlign={`center`}
          onMouseEnter={() => setHoverTitle(true)}
          onMouseLeave={() => setHoverTitle(false)}
        >
          <Heading textStyle={`heading_2`}>
            Who we want to{` `}
            <Box as='span' color={`text.1`}>
              work
            </Box>{' '}
            with
          </Heading>{' '}
          <Divider
            w={hoverTitle ? `100%` : `70%`}
            transition={`.3s`}
            borderColor={`text.1`}
            border={`1.5px solid`}
            borderRadius={`1px`}
            my={`0px !important`}
          />
        </Stack>
      </VStack>
      <Flex align={`center`} gap={`90px`}>
        <HStack flex={`1.3`} gap={`32px`}>
          <Center aspectRatio={`325 / 428`} w={`100%`} position={`relative`}>
            <Image
              src={`/images/tpa-placeholder-2.jpg`}
              fill
              alt=''
              style={{ objectFit: `cover` }}
            />
          </Center>
          <Center aspectRatio={`325 / 350`} w={`100%`} position={`relative`}>
            <Image
              src={`/images/tpa-placeholder-1.jpg`}
              fill
              alt=''
              style={{ objectFit: `cover` }}
            />
          </Center>
        </HStack>
        <Stack
          flex={`1`}
          gap={`27px`}
          fontWeight={`400`}
          fontSize={`25px`}
          lineHeight={`136%`}
          letterSpacing={`0%`}
        >
          <Text textStyle={`heading_2`} fontSize={`29px`}>
            Bold Companies and Inspired Individuals{' '}
          </Text>
          <Text>
            We partner with bold companies and inspired individuals who are
            ready to create, grow, and stand out.
          </Text>
          <Text>
            Whether big brands or personal projects, we bring visions to life
            through creativity and design.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};
