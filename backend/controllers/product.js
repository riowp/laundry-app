const { Product, Category } = require("../models");
const ImageKit = require("imagekit");
const dotenv = require("dotenv");
dotenv.config();

var imagekit = new ImageKit({
  publicKey : process.env.PUBLIC,
  privateKey : process.env.PRIVATE,
  urlEndpoint : "https://ik.imagekit.io/1xvnf32my/"
});

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        attributes: ["name"],
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).json( products );
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: {
        model: Category,
        attributes: ["name"],
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).json( product );
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, CategoryId, stock, SKU } = req.body;
    const gambar = await imagekit.upload({
      file: req.file.buffer.toString("base64"),
      fileName: "satu.jpeg", 
    })
    await Product.create({
      name,
      price,
      description,
      CategoryId,
      stock,
      SKU,
      image: gambar.url,
    });
    res.status(201).json({
      message: "Create product success!",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};