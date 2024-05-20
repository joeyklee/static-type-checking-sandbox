const myPets = [
	{ name: 'Pebbles', loves: 'bread' },
	{ name: 'Nacho', loves: 'anchovies' },
	{ name: 'Joey', enjoys: 'bikes' } // <---- oh! a new property!
];

/**
 * [
 *  "Pebbles loves bread",
 *  "Nacho loves anchovies",
 *  "Joey loves undefined" <-------- this is what we'd get without a handy type check
 * ]
 */
function createMessage(list) {
	return list.map((message) => {
		return `${message.name} loves ${message.loves}`; // <----- but javascript doesn't care!
	});
}

const result = createMessage(myPets);
console.log(JSON.stringify(result));
// ["Pebbles loves bread","Nacho loves anchovies","Joey loves undefined"]
