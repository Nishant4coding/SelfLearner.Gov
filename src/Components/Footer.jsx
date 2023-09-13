import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Link,
  Icon,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import DN from '../Assets/DN.png'
import MoHUA from '../Assets/MoHUA.png'
import MOE from '../Assets/MOE.png'

const Footer = () => {
  return (
    <Box bg="black" color="white" py={16}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={16}
          textAlign="center"
          mb={10}
        >
          <GridItem mb={{ base: 8, md: 0 }}>
            <Text fontSize="4xl" color="green.400" fontWeight="900" mb={2}>
              SelfLearner.Gov
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              wrap="wrap"
              justify="center"
              alignItems="center"
              spacing={4} 
            >
              <Box backgroundColor={'white'} width={'200px'} mr={'20px'} borderRadius={'20px'} m={'10px'}>
                <img src={DN} alt="Image 1"  />
              </Box> 
              <Box backgroundColor={'white'} width={'200px'} mr={'20px'}  borderRadius={'10px'} m={'10px'}>
                <img src={MoHUA} alt="Image 2" />
              </Box>
              
              
            </Flex>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" fontWeight="semibold" mb={4} color="green.400">
              Quick Links
            </Text>
            <Box as="nav">
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "green.400" }}
                transition="color 0.3s"
                display="block"
                mb={2}
              >
                Home
              </Link>
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "green.400" }}
                transition="color 0.3s"
                display="block"
                mb={2}
              >
                About
              </Link>
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "green.400" }}
                transition="color 0.3s"
                display="block"
                mb={2}
              >
                Events
              </Link>
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "green.400" }}
                transition="color 0.3s"
                display="block"
                mb={2}
              >
                Team
              </Link>
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "green.400" }}
                transition="color 0.3s"
                display="block"
              >
                Contact
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" fontWeight="semibold" mb={4} color="green.400">
              Contact Us
            </Text>
            <Box>
              <Box display="flex" alignItems="center" mb={4}>
                <Icon as={FaPhone} mr={2} color="green.400" />
                <Text>8005151678</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={4}>
                <Icon as={FaEnvelope} mr={2} color="green.400" />
                <Link
                  href="mailto:ecell@galgotiasuniversity.edu.in"
                  color="white"
                  _hover={{ color: "green.400" }}
                  transition="color 0.3s"
                >
                  srivastava4nishant@gmail.com
                </Link>
              </Box>
            </Box>
          </GridItem>
        </Grid>
        <Text textAlign="center" fontSize="lg" color="gray.400">
          © 2023 SelfLearner.Gov | All rights
          reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
