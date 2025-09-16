import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  HStack
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { useItems } from "../../hooks";
import { Link } from "react-router-dom";
import { Gi3dStairs } from "react-icons/gi";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { itemsData } = useItems("categories");

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      boxShadow={"md"}
      borderRadius={"md"}
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={3}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <Box
              as={Gi3dStairs}
              boxSize={12}
              color="teal.400"
              _hover={{ color: "teal.600", transform: "rotate(-10deg) scale(1.1)" }}
              transition="all 0.2s"
              mr={2}
            />
            <Text fontWeight="bold" fontSize="2xl" color="teal.600" letterSpacing={1} display={{ base: "none", md: "block" }}>
              Ecommerce React
            </Text>
          </Link>
        </HStack>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="teal"
            style={{ marginLeft: 30 }}
          >
            Categorías
          </MenuButton>
          <MenuList maxH={"300px"} overflowY={"auto"}>
            {itemsData.map((category) => (
              <MenuItem key={category.slug}>
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Flex alignItems={"center"} gap={4}>
          <CartWidget />
          <Button
            onClick={toggleColorMode}
            colorScheme="teal"
            variant="outline"
            size="md"
            title="Cambiar modo claro/oscuro"
            _hover={{ bg: useColorModeValue("teal.100", "teal.700") }}
            transition="all 0.2s"
          >
            {colorMode === "light" ? <MoonIcon boxSize={5} /> : <SunIcon boxSize={5} />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

