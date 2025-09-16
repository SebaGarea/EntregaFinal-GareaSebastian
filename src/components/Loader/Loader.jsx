import { Flex, Spinner, Text, Box } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Flex
      height={"80vh"}
      width={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
      direction="column"
      flexDir="column"
      bgGradient="linear(to-br, teal.50, teal.100, teal.200)"
    >
      <Box mb={4}>
        <Spinner
          thickness="6px"
          speed="0.5s"
          emptyColor="gray.200"
          color="teal.400"
          size="xl"
        />
      </Box>
      <Text fontSize="xl" color="teal.700" fontWeight="bold">
        Cargando contenido...
      </Text>
    </Flex>
  );
};
