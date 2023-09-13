import {
  Box,
  Heading,
  Stack,
  useBreakpointValue,
  Button,
 
  Center,
  
} from "@chakra-ui/react";
import React from "react";
import backgroundImage from "../Assets/bg.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { BiArrowFromLeft } from "react-icons/bi";
import Footer from "./Footer";
import Features from "./LandingPageComponents/Features";
import AutoTyper from '../Components/LandingPageComponents/AutoTyper';
import CoursesPage from "./CoursesPage";
import CustomVideoPlayer from "./CustomVideoPlayer";
import { Link } from "react-router-dom";
import FAQComponent from "./FAQComponent";
import About from "./LandingPageComponents/About";


function LandingPage() {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const autoTyperText = "Learn, Grow, Succeed!";
  const autoTyperDelay = 100; // Milliseconds between each character

  return (
    <Stack gap={"0"}>
      <Navbar />
      <Box bgColor={"blackAlpha.300"} height={"92vh"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {isMobile ? (
            <Box
              //   width={"90%"}
              margin={"20px"}
              top={"50vh"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              //   right={"0"}
            >
              <Heading color={"black"} textAlign={"center"} fontSize={"xl"}>
                Unlock Your Potential with SelfLearner.Gov{" "}
                <br />
                <AutoTyper text={autoTyperText} delay={autoTyperDelay} />
              </Heading>
              <Center>
              <Button
                mt={'20px'}
                color="black"
                backgroundColor="pink.400"
                size="lg"
                
              >
                <Link
                  to="/course"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "30px",
                    textDecoration: "none",
                  }}
                >
                  <span>Get Started</span>{" "}
                  <BiArrowFromLeft size={30} style={{ marginLeft: "10px" }} />
                </Link>
              </Button>
              </Center>
            </Box>
          ) : (
            <Box
              width={"50%"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
              position={"absolute"}
              right={"10vh"}
            >
              <Heading color={"black"} textAlign={"center"}>
                Unlock Your Potential with SelfLearner.Gov{" "}
                <br />
                <AutoTyper text={autoTyperText} delay={autoTyperDelay} />
              </Heading>
              <Center>
              <Button
                mt="10vh"
                
                color="black"
                backgroundColor="pink.400"
                size="lg"
                
              >
                <Link
                  to="/course"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "30px",
                    textDecoration: "none",
                  }}
                >
                  <span>Get Started</span>{" "}
                  <BiArrowFromLeft size={30} style={{ marginLeft: "10px" }} />
                </Link>
              </Button>
              </Center>
            </Box>
          )}

          {isMobile ? (
            <Box
              bgImage={backgroundImage}
              bgSize="700px"
              //   mt={"10vh"}
              backgroundPosition="left"
              bgRepeat="no-repeat"
              ml={"-40px"}
              minHeight="50vh"
            ></Box>
          ) : (
            <Box
              bgImage={backgroundImage}
              bgSize="1000px"
              mt={"20vh"}
              backgroundPosition="left"
              bgRepeat="no-repeat"
              minHeight="50vh"
              minWidth="80%"
            ></Box>
          )}
        </motion.div>
      </Box>
      <About/>
      <Features/>
      <FAQComponent/>
      
      
      <Footer/>
    </Stack>
  );
}

export default LandingPage;
