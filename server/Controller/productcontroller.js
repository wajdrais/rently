const Products = require("../modals/productmodal");
exports.Addproduct = async (req, res) => {
  try {
    const { title, category, price, description, photos } = req.body;
    const newProduct = new Products({
      title,
      category,
      price,
      description,
      photos, // Assuming photos is an array of strings (URLs)
      user_id: req.user._id,
    });

    await newProduct.save();
    res.status(200).send({ msg: "Product added", product: newProduct });
  } catch (error) {
    res.status(500).send({ msg: "Failed to add the product !", error });
  }
};
exports.Modifyproductbyowner = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "product updated" });
  } catch (error) {
    res.status(500).send({ msg: "Failed to modify the product !", error });
  }
};
exports.Modifyproductbyuser = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "Thank you for your feedback!" });
  } catch (error) {
    res.status(500).send({ msg: "Failed to give your feedback !", error });
  }
};
exports.getallproducts = async (req, res) => {
  try {
    const products = await Products.find().populate("user_id");
    res.status(200).send({ products });
  } catch (error) {
    res.status(500).send({ error });
  }
};
