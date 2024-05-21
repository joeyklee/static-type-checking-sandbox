# Static type checking sandbox

> This is meant to be a handy reference for getting set up with using `// @ts-check` in your javascript projects

## Configure your vs code for formatting consistency

> Code > Settings... > settings > search: `format on save` > check: `Format a file on save. A formatter must be available, the file must not be saved after delay, and the editor must not be shutting down.`

Make sure you have the `VSCode Prettier` extensions installed:

- `esbenp.prettier-vscode` - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Check out the demo `01-hello-world`

[01-hello-world](/01-hello-world/)

## Using `Paste JSON as types` as handy tool to make type definitions

You can use the [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype) plugin to quickly turn this

```json
[
	{ "name": "Pebbles", "loves": "bread" },
	{ "name": "Nacho", "loves": "anchovies" },
	{ "name": "Peppercorn", "enjoys": "pizza" }
]
```

into a type definition:

```ts
export interface MyPet {
	name: string;
	loves?: string;
	enjoys?: string;
}
```

or something more complicated like:

```json
{
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"name": "Prospect Park",
				"otherStuff": {
					"funTimesHad": 10000,
					"bikeRides": 9999
				}
			},
			"geometry": {
				"coordinates": [-73.96945933168692, 40.66128383358367],
				"type": "Point"
			}
		}
	]
}
```

into:

```ts
export interface FeatureCollection {
	type: string;
	features: Feature[];
}

export interface Feature {
	type: string;
	properties: Properties;
	geometry: Geometry;
}

export interface Geometry {
	coordinates: number[];
	type: string;
}

export interface Properties {
	name: string;
	otherStuff: OtherStuff;
}

export interface OtherStuff {
	funTimesHad: number;
	bikeRides: number;
}
```

## Other Handy references

### Record<type, type>

If you are trying to describe something like this:

```js
const locations = {
	brooklyn: { lat: 0, lng: 0 },
	manhattan: { lat: 0, lng: 0 },
	queens: { lat: 0, lng: 0 }
};
```

you can do something like:

```js
/**
 * {@type {Record<string, {lat:number; lng: number;}>}}
 */
const locations = {
	brooklyn: { lat: 0, lng: 0 },
	manhattan: { lat: 0, lng: 0 },
	queens: { lat: 0, lng: 0 }
};
```

### Promise<>

Let's say you have a function that returns a promise, you can wrap the expected type in the `Promise<TheTypeOfWhatIsExpectedToBeReturned>` generic type.

Here we are saying, we are returning Promise that will return an array of strings.

```js
/**
 * @returns {Promise<string[]>}
 */
async function getMyData() {
	/**
	 * Here we are saying that our call to fetch will return a promise of an array of objects with {name, loves} as properties
	 *
	 * @type {Promise<{name:string, loves:string;}[]>}
	 */
	const data = await fetch(myUrl).then((d) => d.json());
	return data.map((d) => `${d.name} loves ${d.loves}`);
}
```

### Adding a type assertion on .reduce() accumulator

```js
/**
 * @type {{name:string; mainHobby:string}[]}
 */
const myData = [
	{ name: 'Pebbles', mainHobby: 'sleeping' },
	{ name: 'Nacho', mainHobby: 'sleeping' },
	{ name: 'Peppercorn', mainHobby: 'playing' }
];

/**
 * Creating a lookup table using .reduce()
 *
 * {
 *  "sleeping":["Pebbles", "Nacho"],
 *  "playing": ["Peppercorn"]
 * }
 */
const lookup = myData.reduce((acc, curr) => {
	if (!acc[curr.mainHobby]) {
		acc[curr.mainHobby] = [];
	}
	acc[curr.mainHobby].push(curr.name);

	return acc;
}, /** @type {Record<string, string[]>} */ ({}));
```
