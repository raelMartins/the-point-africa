import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';

export const HomeFooter = () => {
  const links = {
    navigation: [
      { display: `Home`, url: `#`, external: false },
      { display: `About Us`, url: `#`, external: false },
      { display: `What We Do`, url: `#`, external: false },
      { display: `Our Work`, url: `#`, external: false }
    ],
    social: [
      { display: `Linkedin`, url: `#`, external: false },
      { display: `Instagram`, url: `#`, external: false },
      { display: `X`, url: `#`, external: false }
    ],
    contact: [
      { display: `Email Address`, url: `#`, external: false },
      { display: `Location`, url: `#`, external: false },
      { display: `Phone Number`, url: `#`, external: false }
    ]
  };
  return (
    <Box p={`77px 100px 113px`} bg={`#121212`} color={`#ffffff`}>
      <Flex
        gap={`180px`}
        // justify={`space-around`}
      >
        <Stack gap={`24px`} letterSpacing={`0%`}>
          <Text
            maxW={`187px`}
            fontFamily={`var--font_playfair_display`}
            fontWeight={`600`}
            fontSize={`40px`}
          >
            The Point Africa
          </Text>
          <Text fontWeight={`400`} fontSize={`24px`} maxW={`360px`}>
            The Point Africa connects top creatives with brands, delivering
            excellence in design.
          </Text>
          <HStack gap={`18px`} fontSize={`48px`}>
            <FaInstagram cursor={`pointer`} />
            <FaYoutube cursor={`pointer`} />
            <FaFacebookF cursor={`pointer`} />
          </HStack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          fontWeight={`400`}
          fontSize={`20px`}
          lineHeight={`175%`}
          letterSpacing={`0%`}
          gap={{ base: `100px` }}
        >
          <VStack align={`stretch`} gap={`33px`}>
            <Text>Navigation</Text>
            <Stack gap={`10px`}>
              {links?.navigation?.map((item, i) => (
                <Link
                  key={i}
                  href={item?.url}
                  target={item?.external ? '_blank' : ''}
                  rel='noreferrer noopener'
                >
                  {item?.display}
                </Link>
              ))}
            </Stack>
          </VStack>
          <VStack align={`stretch`} gap={`33px`}>
            <Text>Social Media</Text>
            <Stack gap={`10px`}>
              {links?.social?.map((item, i) => (
                <Link
                  key={i}
                  href={item?.url}
                  target={item?.external ? '_blank' : ''}
                  rel='noreferrer noopener'
                >
                  {item?.display}
                </Link>
              ))}
            </Stack>
          </VStack>
          <VStack align={`stretch`} gap={`33px`}>
            <Text>Contact Us</Text>
            <Stack gap={`10px`}>
              {links?.contact?.map((item, i) => (
                <Link
                  key={i}
                  href={item?.url}
                  target={item?.external ? '_blank' : ''}
                  rel='noreferrer noopener'
                >
                  {item?.display}
                </Link>
              ))}
            </Stack>
          </VStack>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
