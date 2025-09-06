import { Center, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export const AboutSection = ({}) => {
  return (
    <Stack p={`72px 100px`} gap={`66px`}>
      <Heading textStyle={`heading_2`} textAlign={`center`}>
        About
      </Heading>
      <HStack gap={`72px`}>
        <Center
          aspectRatio={`556 / 591`}
          h={`591px`}
          w={`556px`}
          minW={`556px`}
          bg={`background.2`}
          borderRadius={`20px`}
          position={`relative`}
          overflow={`hidden`}
        >
          <Image
            src={`/images/tpa-about.jpg`}
            alt=''
            fill
            style={{ objectFit: `cover` }}
          />
        </Center>
        <VStack align={`stretch`} gap={`50px`}>
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
    </Stack>
  );
};
