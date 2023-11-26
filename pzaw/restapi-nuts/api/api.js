const express = require('express')
const Joi = require('joi')

const nuts = require('../nuts')

const validateNuts = (data, requestType) => {
	if (Object.keys(data).length === 0) return { error: { details: [{ message: 'Puste dane' }] }, value: '' }
	const schema = Joi.object({
		nazwa: Joi.string()
			.min(3)
			.max(30)
			.alter({
				put: schema => schema.optional(),
				post: schema => schema.required(),
			}),
		rodzaj: Joi.string()
			.min(3)
			.max(30)
			.alter({
				put: schema => schema.optional(),
				post: schema => schema.required(),
			}),
		kolor: Joi.string()
			.min(3)
			.max(20)
			.alter({
				put: schema => schema.optional(),
				post: schema => schema.required(),
			}),
		smak: Joi.string()
			.min(3)
			.max(60)
			.alter({
				put: schema => schema.optional(),
				post: schema => schema.required(),
			}),
		zastosowanie: Joi.string()
			.min(3)
			.max(100)
			.alter({
				put: schema => schema.optional(),
				post: schema => schema.required(),
			}),
	})

	return schema.tailor(requestType).validate(data)
}

const router = express.Router()

router.get('/nuts', (req, res) => res.json(nuts.list()))
router.post('/nuts', (req, res) => {
	const { error, value } = validateNuts(req.body, 'post')
	if (error) return res.status(400).json({ error: error.details[0].message })
	else res.json(nuts.add(req.body))
})

router.get('/nut/:id', (req, res) => res.json(nuts.get(req.params.id)))
router.put('/nut/:id', (req, res) => {
	const { error, value } = validateNuts(req.body, 'put')
	if (error) return res.status(400).json({ error: error.details[0].message })
	else res.json(nuts.update(req.params.id, value))
})

router.delete('/nut/:id', (req, res) => res.json(nuts.delete(req.params.id)))

module.exports = router
