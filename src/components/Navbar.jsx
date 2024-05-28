import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="#f3f2ef" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box fontWeight="bold">Financial Times</Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link as={NavLink} to="/" exact>
              Home
            </Link>
            <Link as={NavLink} to="/world">
              World
            </Link>
            <Link as={NavLink} to="/business">
              Business
            </Link>
            <Link as={NavLink} to="/markets">
              Markets
            </Link>
            <Link as={NavLink} to="/opinion">
              Opinion
            </Link>
            <Link as={NavLink} to="/tech">
              Tech
            </Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;