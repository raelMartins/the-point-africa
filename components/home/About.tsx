import {
  Center,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';

export const AboutSection = ({}) => {
  return (
    <VStack p={`72px 100px`} gap={`66px`} id={`about`}>
      <Stack w={`max-content`} align={`center`}>
        <Heading textStyle={`heading_2`} textAlign={`center`}>
          About
        </Heading>
        <Divider
          w={`70%`}
          borderColor={`text.1`}
          border={`1.5px solid`}
          borderRadius={`1px`}
        />
      </Stack>
      <HStack gap={`72px`}>
        <Center
          aspectRatio={`556 / 591`}
          h={`100%`}
          minW={`556px`}
          bg={`background.2`}
          borderRadius={`20px`}
          position={`relative`}
          overflow={`hidden`}
          flex={`1`}
        >
          <Image
            src={`/images/tpa-about.jpg`}
            alt=''
            fill
            style={{ objectFit: `cover` }}
          />
        </Center>
        <VStack align={`stretch`} gap={`50px`} flex={`1`}>
          <Text textStyle={`paragraph`}>
            The Point Africa is a creative agency and talent hub connecting
            top-tier creatives with individuals, brands, and businesses across
            Africa.
          </Text>
          <Text textStyle={`paragraph`}>
            We manage the entire creative-process, from content creation to
            design, photography, and videography, ensuring quality,
            transparency, and impact at every step.
          </Text>
          <Text textStyle={`paragraph`}>
            Our Vision is to be Africa’s leading source for premium creative
            services, driven by vetted talent and client satisfaction.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
