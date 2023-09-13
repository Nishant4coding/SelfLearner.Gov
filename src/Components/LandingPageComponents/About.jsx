import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaUserGraduate, FaChalkboardTeacher, FaToolbox } from 'react-icons/fa';
import about from "../../Assets/about.jpg";

const About = () => {
  return (
    <Box p="5" bg="gray.100" color="black" textAlign={'center'}>
      <Heading as="h2" size="xl" textAlign="center" mb="3">
        About SelfLearner
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 4, md: 10 }}
        justifyContent="center"
      >
        <Box
          flex="1"
        
          borderRadius="lg"
          p="6"
          mx={{ base: 'auto', md: 0 }}
        >
          <Heading as="h5" size="md" mb="4">
            An Interactive E-Learning Platform for Urban Skill Development.
          </Heading>
          <Text>
            A thoughtfully selected collection of online courses from reputable
            sources, ensuring learners have access to top-notch content.
          </Text>
          <Text mt="4">
            Urban poor individuals seeking to enhance their skill set for
            personal and professional growth.
          </Text>
        </Box>
        <Box
          width={'40%'}
            
          borderRadius="lg"
          p="6"
          mx={{ base: 'auto', md: 0 }}
        >
          <Image src={about} width={'400px'}/>
          
        </Box>
        
      </Stack>
      <Box
      mt={'30px'}
          flex="1"
          border="1px"
          borderColor="gray.200"
          borderRadius="lg"
          p="6"
          mx={{ base: 'auto', md: 0 }}
        >
          <Heading as="h3" size="lg" mb="4">
            Categories of Courses
          </Heading>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
            gap="4"
            textAlign={'center'}
          >
            <Box
              flex="1"
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p="4"
              bg="white"
              height={'170px'}
            >
             
              <HStack align="center">
                <Box
                  boxSize="12"
                  bg="green.300"
                  borderRadius="full"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaUserGraduate />
                </Box>
                <Heading as="h4" size="md" mb="2">
                  Entrepreneurship
                </Heading>
              </HStack>
              <Text>
                Courses that guide learners through the process of starting and
                managing small businesses, encouraging self-sufficiency and
                economic independence.
              </Text>
            </Box>
            <Box
              flex="1"
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p="4"
              bg="white"
              height={'200px'}
            >
              
              <HStack align="center">
                <Box
                  boxSize="12"
                  bg="green.300"
                  borderRadius="full"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaChalkboardTeacher />
                </Box>
                <Heading as="h4" size="md" mb="2">
                  Financial Literacy
                </Heading>
              </HStack>
              <Text>
                Courses on budgeting, saving, investing, and understanding
                financial systems, empowering individuals to make informed
                decisions about their finances.
              </Text>
            </Box>
            <Box
              flex="1"
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p="4"
              bg="white"
              height={'170px'}
              textAlign={'center'}
            >
             
              <HStack align="center" >
                <Box
                  boxSize="12"
                  bg="green.300"
                  borderRadius="full"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FaToolbox />
                </Box>
                <Heading as="h4" size="md" mb="2" >
                  Vocational Skills
                </Heading>
              </HStack>
              <Text>
                Practical courses in trades such as carpentry, plumbing,
                tailoring, and more, providing tangible skills for employment
                opportunities.
              </Text>
            </Box>
          </Flex>
        </Box>
    </Box>
  );
};

export default About;
