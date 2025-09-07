import {
  Divider,
  GridItem,
  Heading,
  SimpleGrid,
  Stack
} from '@chakra-ui/react';
import Image from 'next/image';

export const OurProjectsSection = ({}) => {
  const grid_images = Array.from(
    [1, 2, 3, 4, 5, 6, 7],
    (x) => `/images/projects/tpa-project-${x}.${x == 1 ? `png` : `jpg`}`
  );
  return (
    <SimpleGrid
      id={`our-projects`}
      columns={{ base: 1, md: 2, lg: 4 }}
      templateRows={`235px 235px 501px`}
      templateColumns={`1fr 1fr 1fr`}
      p={`70px 24px`}
      gap={`24px`}
    >
      <GridItem
        display={`flex`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        <Stack
          w={`max-content`}
          align={`center`}
          gap={`15px`}
          textAlign={`center`}
        >
          <Heading textStyle={`heading`}>Our Projects</Heading>
          <Divider
            w={`70%`}
            borderColor={`text.1`}
            border={`1.5px solid`}
            borderRadius={`1px`}
            my={`0px !important`}
          />
        </Stack>
      </GridItem>
      {grid_images?.map((el, i) => (
        <GridItem
          key={i}
          rowSpan={i == 1 ? 2 : 1}
          borderRadius={`20px`}
          overflow={`hidden`}
          cursor={`pointer`}
          position={`relative`}
        >
          <Image src={el} alt='' fill style={{ objectFit: `cover` }} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
