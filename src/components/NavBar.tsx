import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  return (
    <Flex justify="space-between" bg="teal" p={4}>
      <Button
        onClick={() => {
          router.push("/");
        }}
        color="black"
        fontWeight="bold"
        variant="link"
      >
        INDEX
      </Button>
    </Flex>
  );
};
