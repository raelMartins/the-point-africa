import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';

export const BecomeMember = () => {
  return (
    <Box bg={`brand_color.1`}>
      <HStack gap={`40px`}>
        <Stack
          p={`93px 100px`}
          flex={`1`}
          gap={`18px`}
          fontWeight={`400`}
          letterSpacing={`0%`}
        >
          <HStack gap={`20px`}>
            <Text fontSize={`20px`}>Become a member</Text>
            <Box w={`90px`} h={`2px`} bg={`text.1`} borderRadius={`2px`} />
          </HStack>
          <Heading fontSize={`50px`} fontWeight={`600`}>
            Ready to try different work experience now?
          </Heading>
          <Text fontSize={`22px`}>
            Get the best working experience that you never feel before
          </Text>
          <Button
            variant={`primary`}
            bg={`#DAD8D8`}
            fontWeight={`600`}
            fontSize={`25px`}
            lineHeight={`120%`}
            letterSpacing={`0%`}
            p={`20px 140px`}
            h={`max-content`}
            borderRadius={`10px`}
            _hover={{ bg: `#DAD8D8` }}
          >
            Join Us Today
          </Button>
        </Stack>
        <VStack flex={`1.5`}>
          <Center position={`relative`} aspectRatio={`425 / 637`} h={`637px`}>
            <Image
              src={`/images/tpa-placeholder-3.png`}
              alt=''
              fill
              style={{ objectFit: `cover` }}
            />
          </Center>
        </VStack>
      </HStack>
    </Box>
  );
};
