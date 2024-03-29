import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import useMounted from "../hooks/useMounted";

export default function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const { signIn, signInWithGoogle } = useAuth();
  const mounted = useMounted();
  const location = useLocation();

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Login
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log({ email, password });
            // your login logic here
            if (!email || !password) {
              toast({
                description: "Credentials not valid",
                status: "error",
                isClosable: true,
              });
            } else {
              setIsSubmitting(true);
              signIn(email, password)
                .then((res) => {
                  console.log({ res });
                  toast({
                    description: "Logged in successfully",
                    status: "success",
                    isClosable: true,
                  });
                  history.push(location.state?.from || "/profile");
                })
                .catch((e) => {
                  toast({
                    description: e?.message,
                    status: "error",
                    isClosable: true,
                  });
                })
                .finally(() => {
                  if (mounted.current) setIsSubmitting(false);
                });
            }
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                type="password"
                autoComplete="password"
                required
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="primary"
              size="lg"
              fontSize="md"
            >
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent="space-between" my={4}>
          <Button variant="link">
            <Link to="/forgot-password">Forgot password?</Link>
          </Button>
          <Button variant="link" onClick={() => history.push("/register")}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then((res) => {
                console.log({ res });
                toast({
                  description: "Logged in successfully",
                  status: "success",
                  isClosable: true,
                });
                history.push(location.state?.from || "/profile");
              })
              .catch((e) => {
                toast({
                  description: e?.message,
                  status: "error",
                  isClosable: true,
                });
              })
              .finally(() => {
                if (mounted.current) setIsSubmitting(false);
              })
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
}
