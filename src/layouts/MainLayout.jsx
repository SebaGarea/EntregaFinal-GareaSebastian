import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box flex="1 0 auto">{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
