'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';

const lorem_text = `Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. `;

export const FAQs = () => {
  const [hoverTitle, setHoverTitle] = useState(false);

  const questions = [
    { question: `What Services Do You Offer?`, answer: lorem_text },
    { question: `How Do I Get Started With Your Agency?`, answer: lorem_text },
    { question: `How Long Does  A Typical Project Take?`, answer: lorem_text },
    {
      question: `What Makes Your Agency Different From Others?`,
      answer: lorem_text
    }
  ];

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
          <Heading textStyle={`heading_2`} maxW={`341px`}>
            Frequently asked questions
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
      <Flex direction={`column`} gap={`30px`}>
        {questions?.map((item, i) => (
          <Accordion key={i} allowToggle>
            <AccordionItem bg={`#DAD8D8`} borderRadius={`20px`} p={`28px`}>
              <AccordionButton
                padding={`0px`}
                border={`0px`}
                _hover={{ opacity: `1` }}
              >
                <HStack as='span' flex='1' textAlign='left'>
                  <Text
                    textAlign={`center`}
                    fontWeight={`700`}
                    fontSize={`28px`}
                    letterSpacing={`0%`}
                    flex={`1`}
                  >
                    {item?.question}
                  </Text>
                  <Box
                    w={`77px`}
                    h={`68px`}
                    borderRadius={`10px`}
                    bg={`brand_color.1`}
                  />
                </HStack>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={`20px`} fontWeight={`400`}>
                  {item?.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Flex>
    </Stack>
  );
};
