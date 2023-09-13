import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
  ChakraProvider,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CertificateModal from "./CertificateModal"; // Import the CertificateModal component

function CustomVideoPlayer({ courses }) {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const handleGetCertificate = () => {
    setIsCertificateModalOpen(true);
  };

  const handleResources = () => {
    window.print();
  };
  const questions = [ 
    {
      question: "What is entrepreneurship?",
      options: ["Business", "Art", "Science", "Music"],
      answer: "Business",
    },
    {
      question: "What do entrepreneurs take?",
      options: ["Risks", "Breaks", "Orders", "Vacations"],
      answer: "Risks",
    },
    {
      question: "Entrepreneurship involves innovation and ___________.",
      options: ["Tradition", "Imitation", "Stagnation", "Creativity"],
      answer: "Creativity",
    },
    {
      question: "Successful entrepreneurs exhibit strong ____________.",
      options: ["Fear", "Vision", "Apathy", "Compliance"],
      answer: "Vision",
    },
    {
      question: "Entrepreneurship contributes to economic ___________.",
      options: ["Decline", "Growth", "Stagnation", "Regression"],
      answer: "Growth",
    },
  ];

  return (
    <ChakraProvider>
      <Navbar />
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        <Box
          flex={{ base: "1", md: "0.6" }}
          pr={{ base: "0", md: "4" }}
          borderRadius={"20px"}
        >
          <ReactPlayer
            url={
              courses
                ? courses.videoURL
                : "https://www.youtube.com/watch?v=mJvjzL74PVQ"
            }
            width="100%"
            controls={true}
            height="60vh"
          />
        </Box>
        <Box
          flex={{ base: "1", md: "0.4" }}
          pl={{ base: "0", md: "4" }}
          mt={{ base: "4", md: "0" }}
        >
          <Wrap spacing="4" justify="space-between">
            <WrapItem>
              <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
                <Heading size="md" mb={2}>
                  {courses ? courses.name : "Entrepreneurship Course 1"}
                </Heading>
                <Text mt={2}>
                  {courses
                    ? courses.description
                    : "Entrepreneurship is the dynamic process of initiating and managing a business to capitalize on opportunities while assuming calculated risks. It thrives on innovation, introducing novel products or services to fulfill market gaps. Central to entrepreneurship is resource management, effectively allocating capital, time, and expertise. Adaptability to changing markets and technologies is crucial. Successful entrepreneurs exhibit vision, setting clear goals and providing leadership. This phenomenon fosters economic growth, job creation, and societal advancement."}
                </Text>
              </Box>
            </WrapItem>
            <Button
              borderWidth="1px"
              borderRadius="lg"
              p={2}
              w="100%"
              bottom={0}
            >
              <Text>Viewers: {courses ? courses.viewers : "102"} views</Text>
            </Button>
            <Button
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              w="100%"
              onClick={handleGetCertificate}
            >
              <Text>Get Certificate</Text>
            </Button>
            <Button
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              w="100%"
              onClick={handleResources}
            >
              <Text>Get Documents</Text>
            </Button>
          </Wrap>
        </Box>
      </Flex>
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        questions={questions}
      />
      <Footer />
    </ChakraProvider>
  );
}

export default CustomVideoPlayer;
