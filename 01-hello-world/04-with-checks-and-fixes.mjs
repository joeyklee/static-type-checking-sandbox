// @ts-check
const myPets = [
	{ name: 'Pebbles', loves: 'bread' },
	{ name: 'Nacho', loves: 'anchovies' },
	{ name: 'Joey', enjoys: 'bikes' }, // <---- oh! a new property!
	{ name: 'Peppercorn' } // <---- oh! a new entry without `loves` or `enjoys`!
];

/**
 * We use the `?` symbol to tell the type checker that `loves` and `enjoys` are OPTIONAL properties
 * 👇👇👇👇👇👇👇
 * @param {{
 * name: string;
 * loves?: string;
 * enjoys?: string;
 * }[]
 * } list
 */
function createMessage(list) {
	// Armed w/ this knowledge of our optional properties, we can design our function to handle these
	// cases how we want
	return list.map((message) => {
		if (message.loves) {
			return `${message.name} loves ${message.loves}`;
		}
		if (message.enjoys) {
			return `${message.name} enjoys ${message.enjoys}`;
		}
		return `${message.name} doesn't have any hobbies`;
	});
}

const result = createMessage(myPets);
console.log(JSON.stringify(result));
// ["Pebbles loves bread","Nacho loves anchovies","Joey enjoys bikes","Peppercorn doesn't have any hobbies"]
