import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import NavLink from "./NavLink";
import { useAuth } from "../contexts/AuthContext";

export function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { signOut, currentUser } = useAuth();

  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
    >
      <HStack py={4} justifyContent="flex-end" maxW="container.lg" mx="auto">
        <NavLink to="/" name="Firebase Authentication" size="lg" />
        <Spacer />
        {!currentUser && <NavLink to="/login" name="Login" />}
        {!currentUser && <NavLink to="/register" name="Register" />}
        {currentUser && <NavLink to="/profile" name="Profile" />}
        {currentUser && <NavLink to="/protected-page" name="Protected" />}
        {currentUser && (
          <NavLink
            to="/logout"
            name="Logout"
            onClick={async (e) => {
              e.preventDefault();
              // handle logout
              signOut();
            }}
          />
        )}
        <IconButton
          variant="outline"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        />
      </HStack>
    </Box>
  );
}
