import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Center,
} from '@chakra-ui/react';

function CertificateModal({ isOpen, onClose, questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Handle the submission here
    // Download the certificate
    // Close the modal
    onClose();
  };

  const currentQuestion = questions[currentIndex];

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay  />
      <ModalContent >
        <ModalHeader>Certificate Questions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{currentQuestion.question}</p>
          <Center>
          {currentQuestion.options.map((option, index) => (
            <Button mt={'20px'} mr={'10px'} key={index} onClick={() => handleNext()}>
              {option}
            </Button>
          ))}
          </Center>
          <Center>
          <Box mt={'40px'} >
          <Button colorScheme='teal' variant='outline' onClick={handleBack} mr={'10px'}>Back</Button>
          <Button colorScheme='teal' variant='outline' onClick={handleNext} mr={'10px'}>Next</Button>
          {currentIndex === questions.length - 1 && (
            <Button colorScheme='teal' variant='solid' onClick={handleSubmit} mr={'10px'}>Submit</Button>
          )}
          </Box>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CertificateModal;
