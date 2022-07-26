const { check } = require('express-validator');

let validations = [

    check('txtNuevoName')
        .notEmpty().withMessage('El nombre no puede estar vacio').bail()
        .isLength({ min: 5}).withMessage('El nombre debe ser mas largo'),
    check('txtNuevoDesc')
        .notEmpty().withMessage('La descripcion no puede estar vacia').bail()
        .isLength({ min: 20}).withMessage('La descripcion debe ser mas larga'),
    check('numNuevoPrice')
        .notEmpty().withMessage('El precio no puede estar vacio').bail()
        .isInt().withMessage('El precio debe estar en formato numero'),
    check('txtNuevoCode')
        .notEmpty().withMessage('El codigo no puede estar vacio').bail()

]

module.exports = validations;