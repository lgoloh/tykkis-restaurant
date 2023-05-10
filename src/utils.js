import { useState } from "react";

//Takes a dish array, maps over it and returns an array of objects of {id, dish}
//This creates stability and the keys help keep your data in sync during state changes
export const objectifyList = function (list) {
	return list.map((item, i) => ({
		id: i,
		name: item,
	}));
};

//Creating a custom hook. Always starts with "use"
//Returns an array of object
export const useInput = function (initValue) {
	const [value, setValue] = useState(initValue);
	return [
		{
			value,
			onChange: (event) => setValue(event.target.value),
		},
		() => setValue(initValue),
	];
};

export const breakfast = [
	"Avocado toast",
	"Eggs Benedict",
	"Belgian Waffles",
	"Tuna sandwich",
];
export const lunch = [
	"Macaroni and Cheese",
	"Spaghetti and Meatballs",
	"Pepperoni pizza",
	"Chicken noodle soup",
];
export const dinner = [
	"Black bean soup",
	"Spicy Tonkotsu Ramen",
	"Grilld Salmon and Potatoes",
	"Mashed Potatoes",
];
