const myPets = [
	{ name: 'Pebbles', loves: 'bread' },
	{ name: 'Nacho', loves: 'anchovies' }
];

/**
 * @type {string[]}
 */
let result;

/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */

/**
 * @param {import('./helloWorld').MyPets[]} list // <------- oh! look we have defined our type here in a file called helloWorld.d.ts (open that file to have a look)
 */
function createMessage(list) {
	return list.map((message) => {
		return `${message.name} loves ${message.loves}`;
	});
}

result = createMessage(myPets);
console.log(JSON.stringify(result));

/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */

/**
 * When we use the `@typedef` keyword we are defining the type directly in jsdoc -- this is essentially the same
 * thing as defining a type in `.d.ts` file EXCEPT that, here we define the type definition in a jsdoc comment
 * and we specify the shape of the data and then give it a name e.g. "MyPets"
 * @typedef {{
 * name: string;
 * loves: string;
 * }} MyPetItem
 */

/**
 * @param {MyPetItem[]} list
 */
function createMessage2(list) {
	return list.map((message) => {
		return `${message.name} loves ${message.loves}`;
	});
}
result = createMessage2(myPets);
console.log(JSON.stringify(result));

/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */

/**
 * You might also see it written like this: `Array<Your-Type-Here>`
 * @param {Array<MyPetItem>} list
 */
function createMessage3(list) {
	return list.map((message) => {
		return `${message.name} loves ${message.loves}`;
	});
}
result = createMessage3(myPets);
console.log(JSON.stringify(result));

/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */

function createMessage4(list) {
	/*** When we use the `@type` keyword we are directly defining the type of the variable in code. Notice we have to wrap the variable with parens `(list)` to
	 * make sure that the type assertion preceeding it is associated with that variable.
	 */
	return /** @type {{name: string;loves: string;}[]} */ (list).map((message) => {
		return `${message.name} loves ${message.loves}`;
	});
}

result = createMessage4(myPets);
console.log(JSON.stringify(result));
