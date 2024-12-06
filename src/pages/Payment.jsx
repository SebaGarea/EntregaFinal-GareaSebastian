import React, { useContext, useState } from "react";
import { Flex, Button, Input, Heading } from "@chakra-ui/react";
import { CartContext } from "../context";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const Payment = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const { cartState } = useContext(CartContext);

    const handleCreateOrder = () => {
        if (name === "" || lastName === "" || email === "") {
            Swal.fire({
                title: "Faltaron datos!",
                text: "Debes agregar todos los datos",
                icon: "error",
                confirmButtonText: "Aceptar",
            });

            return;
        }

        const total = cartState.reduce(
            (acc, item) => acc + item.price * item.qtyItem,
            0
        );
        const orderObj = {
            buyer: {
                name,
                lastName,
                email,
            },
            items: cartState.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    qty: item.qtyItem,
                };
            }),
            total,
        };

        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, orderObj).then(({ id }) => {
            Swal.fire({
                icon: "success",
                title:
                    "Se creó la orden correctamente, para futuras consultas deberás utilizar el siguiente identificador: " +
                    id,
                showConfirmButton: true,
                confirmButtonText: "Aceptar",
            });
        });
    };

    return (
        <Flex
            w="100vw"
            h="60vh"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Heading mb={6}>Crear Orden</Heading>
            <Flex
                flexDirection="column"
                w="50vw"
                justifyContent="space-between"
                gap={4}  
            >
                <Input
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setName(e.target.value)}
                    borderRadius="md"  
                    borderColor="gray.300"
                    _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 2px rgba(0, 128, 128, 0.3)",
                    }}
                />
                <Input
                    type="text"
                    placeholder="Apellido"
                    onChange={(e) => setLastName(e.target.value)}
                    borderRadius="md" 
                    borderColor="gray.300"
                    _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 2px rgba(0, 128, 128, 0.3)",
                    }}
                />
                <Input
                    type="email"
                    placeholder="Correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                    borderRadius="md"  
                    borderColor="gray.300"
                    _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 2px rgba(0, 128, 128, 0.3)",
                    }}
                />

                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleCreateOrder}
                    borderRadius="md"  
                    mt={4}
                >
                    Crear Orden
                </Button>
            </Flex>
        </Flex>
    );
};


// import React, { useContext, useState } from "react";
// import { Flex, Button, Input, Heading } from "@chakra-ui/react";
// import { CartContext } from "../context";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import Swal from "sweetalert2";

// export const Payment = () => {
//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");

//     const { cartState } = useContext(CartContext);

//     const handleCreateOrder = () => {
//         if (name === "" || lastName === "" || email === "") {
//             Swal.fire({
//                 title: "Faltaron datos!",
//                 text: "Debes agregar todos los datos",
//                 icon: "error",
//                 confirmButtonText: "Aceptar",
//             });

//             return;
//         }

//         const total = cartState.reduce(
//             (acc, item) => acc + item.price * item.qtyItem,
//             0
//         );
//         const orderObj = {
//             buyer: {
//                 name,
//                 lastName,
//                 email,
//             },
//             items: cartState.map((item) => {
//                 return {
//                     id: item.id,
//                     title: item.title,
//                     price: item.price,
//                     qty: item.qtyItem,
//                 };
//             }),
//             total,
//         };

//         const ordersCollection = collection(db, "orders");
//         addDoc(ordersCollection, orderObj).then(({ id }) => {
//             Swal.fire({
//                 icon: "success",
//                 title:
//                     "Se creo la orden correctamente, para futuras consultas deberás utilizar el siguiente identificador: " +
//                     id,
//                 showConfirmButton: true,
//                 confirmButtonText: "Aceptar",
//             });
//         });
//     };

//     return (
//         <Flex
//             w={"100vw"}
//             h={"60vh"}
//             alignItems={"center"}
//             justifyContent={"center"}
//             flexDirection={"column"}
//         >
//             <Heading>Crear orden</Heading>
//             <Flex
//                 flexDirection={"column"}
//                 w={"50vw"}
//                 h={"20vh"}
//                 justifyContent={"space-between"}
//             >
//                 <Input
//                     type="text"
//                     placeholder="Nombre"
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <Input
//                     type="text"
//                     placeholder="Apellido"
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//                 <Input
//                     type="email"
//                     placeholder="Correo electronico"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <Button colorScheme="teal" size="lg" onClick={handleCreateOrder}>
//                     Crear Orden
//                 </Button>
//             </Flex>
//         </Flex>
//     );
// };
