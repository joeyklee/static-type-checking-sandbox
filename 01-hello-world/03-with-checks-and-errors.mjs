const myPets = [
	{ name: 'Pebbles', loves: 'bread' },
	{ name: 'Nacho', loves: 'anchovies' },
	{ name: 'Joey', enjoys: 'bikes' } // <---- oh! a new property!
];

/**
 * NOTICE: we use our JSDoc to define what the `list` `@param` should be.
 * In this case we are saying the `list` should be an array of objects shaped like `{name: string, loves: string;}` where
 * `name` and `loves` are the keys and `string` are their types
 *
 * @param {{
 * name: string;
 * loves: string;
 * }[]
 * } list
 */
function createMessage(list) {
	return list.map((message) => {
		return `${message.name} loves ${message.enjoys}`; // <---- we should see a red squiggle here indicating a type checking error
	});
}

const result = createMessage(myPets); // <---- we should see a red squiggle here indicating a type checking error
console.log(JSON.stringify(result));
