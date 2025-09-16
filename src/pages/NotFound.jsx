import React from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Flex minH="80vh" align="center" justify="center" direction="column" bgGradient="linear(to-br, teal.50, teal.100)">
      <Box textAlign="center" p={8} borderRadius="lg" boxShadow="xl" bg="white">
        <Heading as="h1" size="2xl" color="teal.500" mb={4}>
          404
        </Heading>
        <Text fontSize="xl" color="gray.700" mb={6}>
          ¡Ups! La página que buscas no existe.
        </Text>
        <Button as={Link} to="/" colorScheme="teal" size="lg">
          Volver al inicio
        </Button>
      </Box>
    </Flex>
  );
};
