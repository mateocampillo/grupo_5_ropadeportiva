const { check } = require('express-validator');

let validations = [

    check('emailUserEmail')
        .notEmpty().withMessage('El mail no puede estar vacio').bail()
        .isEmail().withMessage('El formato del mail es incorrecto'),
    check('txtPassword')
        .notEmpty().withMessage('La contraseña no puede estar vacia').bail()
        .isLength({ min: 6}).withMessage('La contraseña debe ser mayor a 6 caracteres'),
        
]

module.exports = validations;