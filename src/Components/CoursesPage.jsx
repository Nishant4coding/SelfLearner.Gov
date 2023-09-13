import React, { useState } from 'react';
import Navbar from './Navbar';
import { Box, Divider, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import CourseCard from './CourseCard';

function CoursesPage() {
  const [selectedTab, setSelectedTab] = useState('Entrepreneurship');
  return (
    <Box>
      <Navbar />
      <Box>
      <Tabs variant='soft-rounded' colorScheme='green' color={'green.800'} m={'20px'}>
        <TabList alignItems={'center'} justifyContent={'center'}>
          <Tab fontSize={'md'} onClick={() => setSelectedTab('Entrepreneurship')}>
            Entrepreneurship
          </Tab>
          <Tab fontSize={'md'} onClick={() => setSelectedTab('Financials')}>
            Financials
          </Tab>
          <Tab fontSize={'md'} onClick={() => setSelectedTab('Vocationals')}>
            Vocationals
          </Tab>
        </TabList>
      </Tabs>
      </Box>
      <Box mt="10px" mb="10px" textAlign="center">
        <Divider />
        <Text fontSize="18px" fontWeight="bold" lineHeight="1">
          -----
        </Text>
      </Box>
      <CourseCard selectedTab={selectedTab} />
    </Box>
  );
}

export default CoursesPage;
