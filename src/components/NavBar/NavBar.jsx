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
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link to="/">
          <Gi3dStairs
            size={45}
            color="teal"
            style={{
              transition: "transform 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "rotate(20deg)";
              e.target.style.color = "darkcyan";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg)";
              e.target.style.color = "teal";
            }}
          />
        </Link>

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

        <Flex alignItems={"center"}>
          <CartWidget />
          <Stack direction={"row"} spacing={7}>
            <Button
              onClick={toggleColorMode}
              rounded={"full"}
              p={0}
              colorScheme={colorMode === "light" ? "purple" : "orange"}
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "lg",
              }}
            >
              {colorMode === "light" ? (
                <MoonIcon boxSize={5} />
              ) : (
                <SunIcon boxSize={5} />
              )}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

