const controller = {

    //Controlador que muestra el index de localhost:3000

    index: (req, res) => {
        res.status(200).render("./main/index")
    }
}

module.exports = controller;