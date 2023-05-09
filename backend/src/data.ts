import bcrypt from "bcryptjs";
import { User } from "./models/userModel";
import { Product } from "./models/productModel";

export const sampleProducts: Product[] = [
  {
    name: "Camiseta Slim Nike",
    slug: "nike-slim-shirt",
    category: "Camisetas",
    image: "../images/p1.jpg",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "Camiseta Nike modelo Slim de alta qualidade",
  },
  {
    name: "Camiseta Adidas Fit",
    slug: "adidas-fit-shirt",
    category: "Camisetas",
    image: "../images/p2.jpg",
    price: 100,
    countInStock: 20,
    brand: "Adidas",
    rating: 4.0,
    numReviews: 10,
    description: "Camiseta Adidas Dry Fit",
  },
  {
    name: "Calça Lacoste",
    slug: "lacoste-free-pants",
    category: "Calças",
    image: "../images/p3.jpg",
    price: 220,
    countInStock: 0,
    brand: "Lacoste",
    rating: 4.8,
    numReviews: 17,
    description: "high quality product",
  },
  {
    name: "Calça Nike Slim",
    slug: "nike-slim-pant",
    category: "Calças",
    image: "../images/p4.jpg",
    price: 78,
    countInStock: 15,
    brand: "Nike",
    rating: 4.5,
    numReviews: 14,
    description: "high quality product",
  },
];

export const sampleUsers: User[] = [
  {
    name: "Eduardo",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Pedro",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
