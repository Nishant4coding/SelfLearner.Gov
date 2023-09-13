import { Box, Card, CardBody, Stack, Heading, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { MdSchool, MdVideocam, MdLayers, MdHorizontalRule } from "react-icons/md"; // Example icons
import { FaCheck } from "react-icons/fa"; // Example icon

const FeatureCard = ({ title, description, icon }) => {
  const MotionCard = motion(Card);
  const bg = useColorModeValue("white", "gray.800");

  return (

      
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      bg={bg}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      textAlign="center"
      p="4"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
 
      <Box as="span" fontSize="80px" mb="4" color={'green.500'}>
        {icon}
      </Box>
      <Stack spacing="2" flex="1" justifyContent="center">
        <Heading size="md" textAlign="center">
          {title}
        </Heading>
        <Text textAlign="justify">{description}</Text>
      </Stack>
    </MotionCard>
    
  );
};

function Features() {
  return (
    <Box  bgColor={'gray.200'}>
      
      <Heading color="black" textAlign={'center'}  p={'20px'} >Features</Heading>
      <SimpleGrid
        // justifyContent={'space-between'}
        spacing={'150px'}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        padding="50px"
        fontFamily="Lato, sans-serif"
      >
        <FeatureCard
          title="Tailored Courses"
          description="Courses designed specifically for the needs of urban poor individuals, focusing on entrepreneurship, financial literacy, and vocational skills."
          icon={<MdSchool />}
        />
        <FeatureCard
          title="Interactive Learning"
          description="Engaging content, including videos, quizzes, real-world case studies, and interactive simulations to make learning effective and enjoyable."
          icon={<MdVideocam />}
        />
        <FeatureCard
          title="Microlearning Modules"
          description="Bite-sized lessons that cater to short attention spans and limited study time, allowing learners to absorb information more effectively."
          icon={<MdLayers />}
        />
      </SimpleGrid>
    </Box>
  );
}

export default Features;
