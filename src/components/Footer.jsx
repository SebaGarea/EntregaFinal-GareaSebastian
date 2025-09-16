import { Box, Flex, Text, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.200" py={6} mt={10} as="footer" w="100%">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" maxW="6xl" mx="auto" px={6}>
        <Text fontWeight="bold" fontSize="lg">
          Ecommerce React &copy; {new Date().getFullYear()} - Sebastián Garea
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={{ base: 4, md: 0 }}>
          <Link href="https://www.linkedin.com/in/sebastiangarea/" isExternal color="teal.200">LinkedIn</Link>
          <Link href="mailto:sebastiangarea@gmail.com" color="teal.200">Contacto</Link>
          <Link href="https://github.com/SebaGarea/EntregaFinal-GareaSebastian" isExternal color="teal.200">GitHub</Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
