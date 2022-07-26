const { check } = require('express-validator');

let validations = [

    check('txtAddName')
        .notEmpty().withMessage('El nombre no puede estar vacio').bail()
        .isLength({ min: 5}).withMessage('El nombre debe ser mas largo'),
    check('txtAddDesc')
        .notEmpty().withMessage('La descripcion no puede estar vacia').bail()
        .isLength({ min: 20}).withMessage('La descripcion debe ser mas larga'),
    check('numAddPrice')
        .isInt().withMessage('El precio debe estar en formato numero'),
    check('txtAddCode')
        .notEmpty().withMessage('El codigo de producto no puede estar vacio')
        
]

module.exports = validations;