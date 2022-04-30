const controller = {
    detalle: (req, res) => {
        res.status(200).render("./products/ProductDetail");
    },
    cart: (req, res) => {
        res.status(200).render("./products/ProductCart");
    },
    edit: (req, res) => {
        res.status(200).render("./products/ProductEdit");
    }
}

module.exports = controller;