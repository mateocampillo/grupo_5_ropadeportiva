const { check } = require('express-validator');

let validations = [

    check('txtName')
        .notEmpty().withMessage('El nombre no puede estar vacio'),
    check('txtSurname')
        .notEmpty().withMessage('El apellido no puede estar vacio'),
    check('txtMail')
        .notEmpty().withMessage('El mail debe estar completo').bail()
        .isEmail().withMessage('El formato del mail es incorrecto'),
    check('txtUser')
        .notEmpty().withMessage('El nombre de usuario no puede estar vacio').bail()
        .isLength({min:6, max: 30}).withMessage('El nombre de usuario debe estar entre los 6 y los 30 caracteres'),
    check('txtPassword')
        .notEmpty().withMessage('La contraseña no puede estar vacia').bail()
        .isLength({min: 6, max: 24}).withMessage('La contraseña debe estar entre los 6 y los 24 caracteres'),
    check('numberTel')
        .notEmpty().withMessage('Debes completar el numero de telefono'),
    check('txtStreet')
        .notEmpty().withMessage('Debes completar el domicilio'),
    check('txtPostal')
        .notEmpty().withMessage('Debes completar el codigo postal')
]

module.exports = validations;