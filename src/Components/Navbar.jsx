import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import user from "../Assets/user.jpg";
import logo from "../Assets/logo.png";

function Navbar() {
  const [userFirstName, setUserFirstName] = useState(""); // State to hold user's first name
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Redirect to landing page
  };

  useEffect(() => {
    if (token) {
      fetchUserData(token);
    }
  }, [token]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("/api/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const user = JSON.stringify(data);
        setUserFirstName(data.firstName);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <Box p={"5px"} bg={"black"} zIndex={'1000'}>
      <Flex align="center" maxW="container.xl" m="auto">
        <ChakraLink as={Link} to="/" mr={6} fontWeight="bold" fontSize="xl">
          <Image width={"300px"} src={logo} />
        </ChakraLink>{" "}
        <Spacer />
        <Button mr={'20px'} as={Link} to={'/'}>
          Home
        </Button>
        <Button as={Link} to={'/course'}>
          Courses
        </Button>
        
          {/* <Menu>
            <MenuButton
              ml={"20px"}
              cursor={"pointer"}
              as={Button}
              size="md"
              name={userFirstName}
              src={user}
            >
              Profile
            </MenuButton>
            <MenuList mt={"10px"}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My Learning</MenuItem>
              
            </MenuList>
          </Menu> */}
      
          {/* <Button
            colorScheme="teal"
            size="s"
            p={"7px"}
            pl={"20px"}
            pr={"20px"}
            marginLeft={"10px"}
            mr={"10px"}
          >
            <ChakraLink
              as={Link}
              to="/login"
              _hover={{ textDecoration: "none" }}
            >
              Login/SignUp
            </ChakraLink>
          </Button> */}
     
      </Flex>
    </Box>
  );
}

export default Navbar;
