const controller = {
    detalle: (req, res) => {
        res.status(200).render("ProductDetail");
    },
    cart: (req, res) => {
        res.status(200).render("ProductCart");
    }
}

module.exports = controller;