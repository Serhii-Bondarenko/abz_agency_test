import Joi from 'joi'

const authFormSchema = Joi.object({
    name: Joi.string().min(2).trim().max(60).required()
        .messages({
            'string.empty': 'The name must be at least 2 characters.',
        }),

    email: Joi.string().min(2).max(100).trim()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
        .required()
        .messages({
            'string.empty': 'The email field is required.',
            'string.email': 'The email must be a valid email address (user@email.com).'
        }),

    phone: Joi.string().min(13).trim().max(13).regex(new RegExp('^[+]?380([0-9]{9})$'))
        .messages({
            'string.empty': 'The phone field is required.',
            'string.pattern.base': 'Number should start with code of Ukraine +380',
        }),

    position_id: Joi.number().required().messages({
        'number.base': 'You have to choose a profession'
    }),

    photo: Joi.object().required().messages({
        'object.base': 'Minimum size of photo 70x70px. The photo size must not be greater than 5 Mb.' +
            'The photo format must be jpeg/jpg type.'
    })
})

export { authFormSchema }