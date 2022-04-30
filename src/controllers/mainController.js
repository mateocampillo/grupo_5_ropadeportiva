const controller = {
    index: (req, res) => {
        res.status(200).render("./main/index")
    }
}

module.exports = controller;