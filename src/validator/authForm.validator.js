import Joi from 'joi'

const authFormSchema = Joi.object({
    name: Joi.string().min(2).trim().max(60).required()
        .messages({
            'string.empty': 'The name must be at least 2 characters.',
        }),

    email: Joi.string().min(2).max(100).trim()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
        .regex(new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$'))
        .required()
        .messages({
            'string.empty': 'The email field is required.',
            'string.email': 'The email must be a valid email address (user@email.com).',
            'string.pattern.base': 'The email format is invalid.'
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