'use client';

import {
  Box,
  Divider,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';

export const TalentRoster = ({}) => {
  const [hoverTitle, setHoverTitle] = useState(false);

  const roster = [
    `Content Creators`,
    `Photographers`,
    `Videographers`,
    `Directors and Creative Directors`,
    `Graphic Designers`,
    `Motion Graphic Designer`,
    `UI/UX designer`,
    `Animators`,
    `Voice-over Artists`,
    `Models and Talents`,
    `Beauty Creators`,
    `Fashion Creators`,
    `Writers and scriptswriters`
  ];
  return (
    <Box p={`72px 100px`} position={`relative`} minH={`610px`}>
      <VStack gap={`77px`} position={`relative`} zIndex={`1`} mx={`auto`}>
        <Stack
          w={`max-content`}
          align={`center`}
          gap={`15px`}
          textAlign={`center`}
          onMouseEnter={() => setHoverTitle(true)}
          onMouseLeave={() => setHoverTitle(false)}
        >
          <Heading textStyle={`heading_2`}>Our Creative Talent Roster</Heading>
          <Divider
            w={hoverTitle ? `100%` : `70%`}
            transition={`.3s`}            borderColor={`text.1`}
            border={`1.5px solid`}
            borderRadius={`1px`}
            my={`0px !important`}
          />
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={`20px`} w={`100%`}>
          {roster?.map((item, i) => (
            <GridItem
              key={i}
              display={`flex`}
              flexDir={`column`}
              gap={`33px`}
              bg={i == -0 ? `brand_color.1` : `background.2`}
              borderRadius={`20px`}
              p={`20px`}
              alignItems={`center`}
              justifyContent={`center`}
              minH={`130px`}
              cursor={`pointer`}
              _hover={{ color: `#fff`, bg: `brand_color.1` }}
              transition={`.3s`}
            >
              <Text
                textStyle={`paragraph`}
                fontWeight={`600`}
                fontSize={`25px`}
                textAlign={`center`}
              >
                {item}
              </Text>
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
