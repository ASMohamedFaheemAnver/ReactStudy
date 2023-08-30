import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

// Change action uri in firebase to use this page to reset
// Templates => Action URL
export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const { resetPassword } = useAuth();
  const query = useQuery();
  const mode = query.get("mode");
  const oobCode = query.get("oobCode");
  const continueUrl = query.get("continueUrl");
  console.log({ mode, oobCode, continueUrl });

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Reset password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // handle reset password
            if (!newPassword) {
            }
            resetPassword(oobCode, newPassword);
          }}
        >
          <Stack spacing="6">
            <FormControl id="password">
              <FormLabel>New password</FormLabel>
              <Input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                autoComplete="password"
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="primary" size="lg" fontSize="md">
              Reset password
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Layout>
  );
}
