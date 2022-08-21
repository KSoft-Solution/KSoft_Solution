import React from "react";
import {
  chakra,
  useColorModeValue,
  Flex,
  Button,
  Link,
  useColorMode,
  Image,
  Text
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  return (
    <>
      <chakra.header bg={bg} w="full" px={5} py={1} shadow="md" mx="auto" h='60px'>
        <Flex align="center" justify="space-between" mx="auto" maxW="1420px">
          <Flex>
            <chakra.a
              href={"/"}
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Image
                borderRadius="full"
                boxSize="50px"
                src={Logo}
                alt="Dan Abramov"
              />
              <Text fontSize='md'>KSoft Solutions</Text>
            </chakra.a>
          </Flex>
          <Flex align="center">
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="lg"
              href={"/posts"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Posts
            </Link>
            <Button
              ml="10"
              colorScheme="teal"
              size="sm"
              onClick={toggleColorMode}
            >
              mode
            </Button>
          </Flex>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Header;
