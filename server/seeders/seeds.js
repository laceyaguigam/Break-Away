const db = require("../config/connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Basic" },
    { name: "Sincere" },
    { name: "Epic" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Phone Call",
      description: "Have a breakup artists make the call for you.",
      category: categories[0]._id,
      price: 5.99,
    },
    {
      name: "Email Message",
      description: "Have a breakup artists compose and send the email for you.",
      category: categories[0]._id,
      price: 5.99,
    },
    {
      name: "Text Message",
      category: categories[0]._id,
      description: "Have a breakup artists compose and send the text for you.",
      price: 5.99,
    },
    {
      name: "FB Message",
      category: categories[0]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 5.99,
    },
    {
      name: "Whatsapp Message",
      category: categories[0]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 5.99,
    },
    {
      name: "Send Flowers",
      category: categories[1]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 29.99,
    },
    {
      name: "Send Chocolates",
      category: categories[1]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 29.99,
    },
    {
      name: "Send Letter",
      category: categories[1]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 29.99,
    },
    {
      name: "Send Doggy Doodoo",
      category: categories[1]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 29.99,
    },
    {
      name: "Send a playlist of songs",
      category: categories[1]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 29.99,
    },
    {
      name: "Send a Mariachi band",
      category: categories[2]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 1000.0,
    },
    {
      name: "Send an acapalla group",
      category: categories[2]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 1000.0,
    },
    {
      name: "Send a Breakup Artists",
      category: categories[2]._id,
      description: "Have a breakup artists do 'xyz' for you.",
      price: 1000.0,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    name: "Jude Law",
    username: "thisperson",
    email: "email@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    name: "Harry Bob",
    username: "thisperson2",
    email: "email2@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
