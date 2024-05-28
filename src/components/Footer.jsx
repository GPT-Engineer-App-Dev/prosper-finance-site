import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="#f3f2ef" color="white" py={4} mt={10}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text mb={2}>© 2023 Financial Times</Text>
        <Flex>
          <Link as={NavLink} to="/about" mx={2}>
            About
          </Link>
          <Link as={NavLink} to="/contact" mx={2}>
            Contact
          </Link>
          <Link as={NavLink} to="/privacy-policy" mx={2}>
            Privacy Policy
          </Link>
          <Link as={NavLink} to="/terms-of-service" mx={2}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;