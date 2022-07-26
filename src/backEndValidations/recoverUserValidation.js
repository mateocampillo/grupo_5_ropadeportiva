const { check } = require('express-validator');

let validations = [

    check('txtRecEmail')
        .notEmpty().withMessage('El email no puede estar vacio').bail()
        .isEmail().withMessage('El formato del email es incorrecto'),
    check('txtRecTel')
        .notEmpty().withMessage('El telefono no puede estar vacio').bail()
        .isLength({min: 8, max: 14}).withMessage('El telefono debe ser entre 8 y 14 caracteres'),
    check('txtRecPass')
        .notEmpty().withMessage('La nueva contraseña no puede estar vacia')
        .isLength({min: 6, max: 24}).withMessage('La contraseña debe ser entre 6 y 24 caracteres')

]

module.exports = validations;