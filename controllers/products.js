const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "I am getting all Products" })
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getting all Products Testing" })
};

module.exports = { getAllProducts, getAllProductsTesting }