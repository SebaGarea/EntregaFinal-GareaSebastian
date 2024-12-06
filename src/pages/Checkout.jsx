import { useContext } from "react";
import { CartContext } from "../context";
import {
    Box,
    Heading,
    Alert,
    AlertIcon,
    VStack,
    Flex,
    Text,
    HStack,
    IconButton,
    Spacer,
    Divider,
    Button,
    Image,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

export const Checkout = () => {
    const { cartState, addItem, removeItem, deleteItem } =
        useContext(CartContext);

    const total = cartState.reduce(
        (acc, item) => acc + item.price * item.qtyItem,
        0
    );

    const handleDeleteItem = (item) => {
        deleteItem(item);
    };

    const navigate = useNavigate();

    const handleNavigatePayment = () => {
        navigate("/payment");
    };

    return (
        <Box p={6} maxW="1200px" mx="auto" h={"90vh"}>
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Detalle del Carrito
            </Heading>

            {cartState.length === 0 ? (
                <Alert status="info" borderRadius="md">
                    <AlertIcon />
                    Tu carrito está vacío.
                </Alert>
            ) : (
                <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={6}
                >
                    <Box flex="3">
                        <VStack spacing={4} align="stretch">
                            {cartState.map((item) => (
                                <Flex
                                    key={item.id}
                                    p={4}
                                    borderWidth="1px"
                                    borderRadius="md"
                                    alignItems="center"
                                    boxShadow="sm"
                                    transition="transform 0.2s ease"
                                    _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
                                >
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        boxSize="100px"
                                        objectFit="cover"
                                        borderRadius="md"
                                        mr={4}
                                    />
                                    <Box flex="1">
                                        <Text fontSize="xl" fontWeight="bold">
                                            {item.title}
                                        </Text>
                                        <HStack spacing={4} mt={2}>
                                            <Text>
                                                Precio: ${item.price.toFixed(2)}
                                            </Text>
                                            <HStack>
                                                <IconButton
                                                    aria-label="Disminuir cantidad"
                                                    icon={<MinusIcon />}
                                                    size="sm"
                                                    onClick={() =>
                                                        removeItem(item)
                                                    }
                                                    isDisabled={
                                                        item.qtyItem === 1
                                                    }
                                                />
                                                <Text>{item.qtyItem}</Text>
                                                <IconButton
                                                    aria-label="Aumentar cantidad"
                                                    icon={<AddIcon />}
                                                    size="sm"
                                                    onClick={() =>
                                                        addItem(item)
                                                    }
                                                    isDisabled={
                                                        item.qtyItem >=
                                                        item.stock
                                                    }
                                                />
                                            </HStack>
                                        </HStack>
                                    </Box>
                                    <Spacer />
                                    <HStack>
                                        <Text fontWeight="bold">
                                            Subtotal: $
                                            {(
                                                item.price * item.qtyItem
                                            ).toFixed(2)}
                                        </Text>
                                        <IconButton
                                            aria-label="Eliminar producto"
                                            icon={<DeleteIcon />}
                                            colorScheme="red"
                                            variant="outline"
                                            onClick={() =>
                                                handleDeleteItem(item)
                                            }
                                        />
                                    </HStack>
                                </Flex>
                            ))}
                        </VStack>
                    </Box>

                    <Box
                        flex="1"
                        borderWidth="1px"
                        borderRadius="md"
                        p={6}
                        boxShadow="sm"
                        h="fit-content"
                    >
                        <Text fontSize="2xl" fontWeight="bold" mb={4}>
                            Resumen del Pedido
                        </Text>
                        <Divider mb={4} />
                        <Text fontSize="lg" mb={2}>
                            Total: ${total.toFixed(2)}
                        </Text>
                        <Button
                            colorScheme="teal"
                            size="lg"
                            w="full"
                            onClick={handleNavigatePayment}
                        >
                            Comprar
                        </Button>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};


