import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  ChakraProvider,
} from '@chakra-ui/react';

const FAQComponent = () => {
  const faqData = [
    {
      question: 'What is SelfLearner?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    },
    {
      question: 'How do I enroll in a course?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'What types of courses are available?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Can I access course materials offline?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'How do I provide feedback or report issues with a course?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },  
  ];

  return (
    <ChakraProvider>
      <Box
        py={8}
        bg="gray.100"
        rounded="lg"
        boxShadow="lg"
        // mx="auto"
        p={6}
        
      >
        <Heading as="h2" size="lg" mb={4} color="black" textAlign={'center'}>
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle >
          {faqData.map((faq, index) => (
            <AccordionItem key={index} mb={'10px'}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                   borderRadius={'20px'}
                    bg={ 'green.200'}
                    _hover={{ bg: 'green.400' }}
                    _focus={{ outline: 'none' }}
                    color="black"
                  >
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md">
                        {faq.question}
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel
                   borderRadius={'20px 0px 20px 20px'}
                    pb={4}
                    fontWeight="700"
                    fontSize="md"
                    bg="gray.200"
                    color="black"
                  >
                    <Text>{faq.answer}</Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </ChakraProvider>
  );
};

export default FAQComponent;
