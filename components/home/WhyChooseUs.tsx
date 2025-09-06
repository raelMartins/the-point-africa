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

export const WhyChooseUs = ({}) => {
  return (
    <Box p={`72px 100px`} position={`relative`} minH={`610px`}>
      <VStack gap={`77px`} position={`relative`} zIndex={`1`} mx={`auto`}>
        <Stack
          w={`max-content`}
          align={`center`}
          gap={`15px`}
          textAlign={`center`}
        >
          <Heading textStyle={`heading_2`}>
            <Box as='span' color={`text.1`}>
              Why
            </Box>{' '}
            Choose{' '}
            <Box as='span' color={`text.1`}>
              Us
            </Box>
          </Heading>
          <Divider
            w={`70%`}
            borderColor={`text.1`}
            border={`1.5px solid`}
            borderRadius={`1px`}
            my={`0px !important`}
          />
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={`37px 17px`}
          w={`100%`}
        >
          <GridItem
            display={`flex`}
            flexDir={`column`}
            gap={`33px`}
            bg={`background.2`}
            borderRadius={`20px`}
            p={`40px 50px`}
          >
            <Text textStyle={`paragraph`} fontWeight={`700`} fontSize={`25px`}>
              Centralised Talent Pool
            </Text>
            <Text textStyle={`paragraph`} fontSize={`20px`}>
              Our clients will have no need to search far and wide, and the
              creatives under our agency will have the ease of clients access
            </Text>
          </GridItem>
          <GridItem
            display={`flex`}
            flexDir={`column`}
            gap={`33px`}
            bg={`background.2`}
            borderRadius={`20px`}
            p={`40px 50px`}
          >
            <Text textStyle={`paragraph`} fontWeight={`700`} fontSize={`25px`}>
              Creative Curation{' '}
            </Text>
            <Text textStyle={`paragraph`} fontSize={`20px`}>
              We will match the right creative to the right brief, making
              collaboration smooth and results-driven.
            </Text>
          </GridItem>
          <GridItem
            display={`flex`}
            flexDir={`column`}
            gap={`33px`}
            bg={`brand_color.1`}
            borderRadius={`20px`}
            p={`40px 50px`}
            rowSpan={2}
            justifyContent={`center`}
          >
            <Text
              textStyle={`paragraph`}
              fontWeight={`700`}
              fontSize={`25px`}
              textAlign={`center`}
            >
              Quality Control{' '}
            </Text>
            <Text textStyle={`paragraph`} fontSize={`20px`}>
              As a results-driven Agency, we will ensure the output meets the
              highest standards and satisfies the client’s brief: adding value
              beyond just match making.
            </Text>
          </GridItem>
          <GridItem
            display={`flex`}
            flexDir={`column`}
            gap={`33px`}
            bg={`background.2`}
            borderRadius={`20px`}
            p={`40px 50px`}
          >
            <Text textStyle={`paragraph`} fontWeight={`700`} fontSize={`25px`}>
              Transparent Pricing with Agency Fee{' '}
            </Text>
            <Text textStyle={`paragraph`} fontSize={`20px`}>
              We will match the right creative to the right brief, making
              collaboration smooth and results-driven.{' '}
            </Text>
          </GridItem>
          <GridItem
            display={`flex`}
            flexDir={`column`}
            gap={`33px`}
            bg={`background.2`}
            borderRadius={`20px`}
            p={`40px 50px`}
          >
            <Text textStyle={`paragraph`} fontWeight={`700`} fontSize={`25px`}>
              Ongoing Relationships{' '}
            </Text>
            <Text textStyle={`paragraph`} fontSize={`20px`}>
              We will build long term relationship with both creatives and
              clients, keeping the work flowing steadily and smoothly from both
              sides{' '}
            </Text>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
