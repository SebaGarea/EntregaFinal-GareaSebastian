
import { ItemListContainer, Loader } from "../components";
import { useItems } from "../hooks";
import { Box, Heading, Text, Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";

const Hero = () => (
  <Flex
    align="center"
    justify="center"
    py={24}
    px={4}
    minH="60vh"
    direction="column"
    position="relative"
    bgImage="url('https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_1280.jpg')"
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
    _after={{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      w: '100%',
      h: '100%',
      bg: 'rgba(0,0,0,0.45)',
      zIndex: 0,
    }}
  >
    <Box zIndex={1} textAlign="center" color="white">
      <Heading as="h1" size="2xl" mb={4} color="teal.200" textShadow="2px 2px 8px #222">
        Bienvenido a tu Ecommerce React
      </Heading>
      <Text fontSize="xl" mb={6} color="white" textShadow="1px 1px 6px #222">
        Explora productos, elige tus favoritos y viví la mejor experiencia de compra online.
      </Text>
      <Button colorScheme="teal" size="lg" as="a" href="#productos" boxShadow="md">
        Ver productos
      </Button>
    </Box>
  </Flex>
);

export const Home = () => {
  const { itemsData, loading } = useItems('products');
  return (
    <>
      <Hero />
      <Box id="productos">
        {loading ? <Loader /> : <ItemListContainer products={itemsData} />}
      </Box>
    </>
  );
};
