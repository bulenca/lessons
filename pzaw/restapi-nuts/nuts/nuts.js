const fs = require('fs')
const path = require('path')

let nuts = require('./nutsDB')

const copy = obj => JSON.parse(JSON.stringify(obj))
const findNutById = id => nuts.find(p => p.id == id) || 'No nut found'
const getNextId = () => {
	const lastNut = nuts[nuts.length - 1]
	return lastNut ? lastNut.id + 1 : 1
}
const save = () =>
	fs.writeFile(
		path.join(__dirname, 'nutsDB.json'),
		JSON.stringify(nuts, null, 4),
		err => err && console.log(`Błąd podczas zapisywania pliku`)
	)

const listNuts = () => copy(nuts)
const getNut = id => copy(findNutById(id))
const addNut = nutData => {
	nutData.id = getNextId()
	nuts.push(nutData)
	save()
	return getNut(nutData.id)
}
const updateNut = (id, nutData) => {
	const foundNut = findNutById(id)
	if (foundNut == 'No nut found') return foundNut

	for (let key in nutData) {
		foundNut[key] = nutData[key]
	}
	nuts = nuts.filter(nut => nut.id != id)
	nuts.push(foundNut)
	save()

	return foundNut
}

const deleteNut = id => {
	const toReturn = nuts.find(nut => nut.id == id)
	nuts = nuts.filter(nut => nut.id != id)
	save()
	return toReturn
}

module.exports = {
	list: listNuts,
	get: getNut,
	add: addNut,
	delete: deleteNut,
	update: updateNut,
}
