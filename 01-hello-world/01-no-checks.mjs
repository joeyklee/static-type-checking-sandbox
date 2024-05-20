const myPets = [
	{ name: 'Pebbles', loves: 'bread' },
	{ name: 'Nacho', loves: 'anchovies' }
];

/**
 * [
 *  "Pebbles loves bread",
 *  "Nacho loves anchovies"
 * ]
 */
function createMessage(list) {
	return list.map((message) => {
		return `${message.name} loves ${message.loves}`;
	});
}

const result = createMessage(myPets);
console.log(JSON.stringify(result));
