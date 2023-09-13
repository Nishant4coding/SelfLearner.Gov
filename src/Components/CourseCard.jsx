import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ selectedTab }) {
  const courses = {
    Entrepreneurship: [
      {
        name: 'Introduction to Entrepreneurship',
        
        discription:'xyz',
        videoURL: 'https://www.youtube.com/watch?v=VIDEO_ID_6',
      },
      {
        name: 'Entrepreneurship pros and cons',
        
        discription:'xyz'
      },
      {
        name: 'Entrepreneurship Essentials',
        
        discription:'xyz'
      },
      {
        name: 'What is Entrepreneurship?',
        
        discription:'xyz'
      },
      {
        name: 'Business Planning and Strategy',
        
        discription:'xyz'
      },
      {
        name: 'Entrepreneurial Leadership',
        
        discription:'xyz'
      },
    ],
    Financials: [
      {
        name: 'Financial Literacy Introduction',
        
        discription:'xyz'
      },
      {
        name: 'Personal Budgeting and Finance Management',
        
        discription:'xyz'
      },
      {
        name: 'Understanding Credit and Debt',
        
        discription:'xyz'
      },
      {
        name: 'Investment Basics',
        
        discription:'xyz'
      },
      {
        name: 'Financial Security in Times of Crisis',
        
        discription:'xyz'
      },
      {
        name: 'Savings and Investment for Children Education',
        
        discription:'xyz'
      },
    ],
    Vocationals: [
      {
        name: 'Vocational Skills Introduction',

        discription:'xyz'
      },
      {
        name: 'Interior Decorating',
        
        discription:'xyz'
      },
      {
        name: 'Digital Marketing for Small Businesses',
        
        discription:'xyz'
      },
      {
        name: 'Automotive Maintenance',
        
        discription:'xyz'
      },
      {
        name: 'Carpentry Essentials',
        
        discription:'xyz'
      },
    
      {
        name: 'Electrical Wiring and Repairs',
        
        discription:'xyz'
      },
    ],
  };

  const selectedCourses = courses[selectedTab];
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        {selectedCourses.map((courses, index) => (
          <Box key={index} p={2} border="2px solid gray.200">
            <Card>
              <CardBody>
                <Heading fontSize="lg" mb={'40px'}>{courses.name}</Heading>
                <Image src={courses.image} borderRadius="lg" />

                <Divider/>
                <Link to={'/video'}  onClick={() => setSelectedCourse(courses)} ><Button variant={'outline'} colorScheme='green' bgColor={'green.100'} >Enroll & Learn</Button></Link>
                
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default CourseCard;
