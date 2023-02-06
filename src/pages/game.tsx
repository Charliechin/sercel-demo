import React from "react";
import { useState } from "react";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

interface IProduct {
  id: number
  name: string
  description: string
  image: string
  price: number
}

const products: IProduct[] = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    image: "/product1.jpg",
    price: 9.99
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    image: "/product2.jpg",
    price: 19.99
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    image: "/product3.jpg",
    price: 29.99
  }
];

const Game = () => {
  const [cart, setCart] = useState<IProduct[] | []>([]);

  const handleAddToCart = (product: IProduct) => {
    setCart([...cart, product]);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="lg">
        Our Products
      </Heading>
      <Flex flexWrap="wrap">
        {products.map(product => (
          <Box key={product.id} p={4} width={[1 / 2, 1 / 3, 1 / 4]}>
            <Image src={product.image} />
            <Heading as="h2" size="md">
              {product.name}
            </Heading>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Flex>
      <Heading as="h2" size="lg">
        Cart
      </Heading>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Game;
