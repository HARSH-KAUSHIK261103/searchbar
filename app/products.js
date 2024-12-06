const Products = [
  {
    id: 1,
    name: "Laptop",
    description: "A high-performance laptop for professionals.",
    category: "Electronics",
    price: 1200,
    image: "https://via.placeholder.com/150?text=Laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "A smartphone with excellent camera quality.",
    category: "Electronics",
    price: 800,
    image: "https://via.placeholder.com/150?text=Smartphone",
  },
  {
    id: 3,
    name: "Desk Chair",
    description: "An ergonomic chair for comfortable seating.",
    category: "Furniture",
    price: 150,
    image: "https://via.placeholder.com/150?text=Chair",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    description: "Noise-canceling wireless headphones.",
    category: "Electronics",
    price: 200,
    image: "https://via.placeholder.com/150?text=Headphones",
  },
  {
    id: 5,
    name: "Electric Kettle",
    description: "A fast-heating electric kettle for tea and coffee.",
    category: "Home Appliances",
    price: 50,
    image: "https://via.placeholder.com/150?text=Kettle",
  },
  {
    id: 6,
    name: "Gaming Console",
    description: "A next-gen gaming console for immersive experiences.",
    category: "Electronics",
    price: 500,
    image: "https://via.placeholder.com/150?text=Console",
  },
  {
    id: 7,
    name: "Blender",
    description: "A versatile blender for smoothies and soups.",
    category: "Home Appliances",
    price: 70,
    image: "https://via.placeholder.com/150?text=Blender",
  },
  {
    id: 8,
    name: "Wrist Watch",
    description: "A stylish wristwatch with a leather strap.",
    category: "Accessories",
    price: 120,
    image: "https://via.placeholder.com/150?text=Watch",
  },
  {
    id: 9,
    name: "Running Shoes",
    description: "Lightweight running shoes for daily workouts.",
    category: "Footwear",
    price: 100,
    image: "https://via.placeholder.com/150?text=Shoes",
  },
  {
    id: 10,
    name: "Sunglasses",
    description: "UV-protective sunglasses with a sleek design.",
    category: "Accessories",
    price: 80,
    image: "https://via.placeholder.com/150?text=Sunglasses",
  },
  {
    id: 11,
    name: "Tablet",
    description: "A lightweight tablet for work and entertainment.",
    category: "Electronics",
    price: 400,
    image: "https://via.placeholder.com/150?text=Tablet",
  },
  {
    id: 12,
    name: "Wireless Mouse",
    description: "A compact and ergonomic wireless mouse.",
    category: "Electronics",
    price: 30,
    image: "https://via.placeholder.com/150?text=Mouse",
  },
  {
    id: 13,
    name: "Backpack",
    description: "A durable backpack with multiple compartments.",
    category: "Accessories",
    price: 60,
    image: "https://via.placeholder.com/150?text=Backpack",
  },
  {
    id: 14,
    name: "Cookware Set",
    description: "Non-stick cookware set for your kitchen.",
    category: "Kitchen",
    price: 100,
    image: "https://via.placeholder.com/150?text=Cookware",
  },
  {
    id: 15,
    name: "Smartwatch",
    description: "Track your health and notifications with a smartwatch.",
    category: "Electronics",
    price: 250,
    image: "https://via.placeholder.com/150?text=Smartwatch",
  },
  {
    id: 16,
    name: "Desk Lamp",
    description: "A stylish and adjustable desk lamp.",
    category: "Furniture",
    price: 40,
    image: "https://via.placeholder.com/150?text=Lamp",
  },
  {
    id: 17,
    name: "Water Bottle",
    description: "An insulated water bottle to keep drinks cold or hot.",
    category: "Accessories",
    price: 25,
    image: "https://via.placeholder.com/150?text=Water+Bottle",
  },
  {
    id: 18,
    name: "Monitor",
    description: "A 24-inch HD monitor for work and gaming.",
    category: "Electronics",
    price: 180,
    image: "https://via.placeholder.com/150?text=Monitor",
  },
  {
    id: 19,
    name: "Yoga Mat",
    description: "A comfortable yoga mat for home workouts.",
    category: "Fitness",
    price: 30,
    image: "https://via.placeholder.com/150?text=Yoga+Mat",
  },
  {
    id: 20,
    name: "Refrigerator",
    description: "Energy-efficient refrigerator with ample storage.",
    category: "Home Appliances",
    price: 700,
    image: "https://via.placeholder.com/150?text=Refrigerator",
  },
  {
    id: 21,
    name: "Book",
    description: "A bestselling novel for avid readers.",
    category: "Books",
    price: 20,
    image: "https://via.placeholder.com/150?text=Book",
  },
  {
    id: 22,
    name: "Dining Table",
    description: "A wooden dining table for family meals.",
    category: "Furniture",
    price: 400,
    image: "https://via.placeholder.com/150?text=Table",
  },
  {
    id: 23,
    name: "Hair Dryer",
    description: "A compact hair dryer with multiple settings.",
    category: "Home Appliances",
    price: 35,
    image: "https://via.placeholder.com/150?text=Hair+Dryer",
  },
  {
    id: 24,
    name: "Earbuds",
    description: "True wireless earbuds with excellent sound quality.",
    category: "Electronics",
    price: 100,
    image: "https://via.placeholder.com/150?text=Earbuds",
  },
  {
    id: 25,
    name: "T-shirt",
    description: "A comfortable cotton T-shirt in multiple sizes.",
    category: "Clothing",
    price: 25,
    image: "https://via.placeholder.com/150?text=T-shirt",
  },
  {
    id: 26,
    name: "Gaming Chair",
    description: "An ergonomic gaming chair with lumbar support.",
    category: "Furniture",
    price: 300,
    image: "https://via.placeholder.com/150?text=Gaming+Chair",
  },
  {
    id: 27,
    name: "Camera",
    description: "A digital camera with high-resolution capabilities.",
    category: "Electronics",
    price: 600,
    image: "https://via.placeholder.com/150?text=Camera",
  },
  {
    id: 28,
    name: "Sneakers",
    description: "Stylish sneakers for casual outings.",
    category: "Footwear",
    price: 90,
    image: "https://via.placeholder.com/150?text=Sneakers",
  },
  {
    id: 29,
    name: "Coffee Maker",
    description: "A coffee maker with programmable settings.",
    category: "Kitchen",
    price: 80,
    image: "https://via.placeholder.com/150?text=Coffee+Maker",
  },
  {
    id: 30,
    name: "Vacuum Cleaner",
    description: "A lightweight and powerful vacuum cleaner.",
    category: "Home Appliances",
    price: 150,
    image: "https://via.placeholder.com/150?text=Vacuum",
  },
];

module.exports = { Products };
