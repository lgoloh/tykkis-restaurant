import logo from "./logo.svg";
import "./css/App.css";
import { useRef, useState } from "react";
import { Header, Main, Footer, MealSection } from "./components/Components";
import DropdownMenu from "./components/DropdownMenu";

const breakfast = [
	"Avocado toast",
	"Eggs Benedict",
	"Belgian Waffles",
	"Tuna sandwich",
];
const lunch = [
	"Macaroni and Cheese",
	"Spaghetti and Meatballs",
	"Pepperoni pizza",
	"Chicken noodle soup",
];
const dinner = [
	"Black bean soup",
	"Spicy Tonkotsu Ramen",
	"Grilld Salmon and Potatoes",
	"Mashed Potatoes",
];

//Takes a dish array, maps over it and returns an array of objects of {id, dish}
//This creates stability and the keys help keep your data in sync during state changes
const dishes = function (dish_list) {
	return dish_list.map((dish, i) => ({
		id: i,
		name: dish,
	}));
};

//Creating a custom hook. Always starts with "use"
//Returns an array of object
const useInput = function (initValue) {
	const [value, setValue] = useState(initValue);
	return [
		{
			value,
			onChange: (event) => setValue(event.target.value),
		},
		() => setValue(initValue),
	];
};

//title and color are objects
function App() {
	const [title, resetTitle] = useInput("");
	const [color, resetColor] = useInput("#000000");

	const submit = (e) => {
		e.preventDefault(); //e for event
		console.log(`Title is ${title.value} and color is ${color.value}`);
		alert(`${title.value}: ${color.value}`);
		resetTitle();
		resetColor();
	};
	return (
		<div>
			<Header name="Tykki" />
			<Main adjective="amazing" />
			<MealSection title="Breakfast" dishes={dishes(breakfast)} />
			<MealSection title="Lunch" dishes={dishes(lunch)} />
			<MealSection title="Dinner" dishes={dishes(dinner)} />
			<DropdownMenu options={dishes(lunch)} />
			<Footer year={new Date().getFullYear()} />
			<form onSubmit={submit}>
				<input {...title} type="text" placeholder="color title"></input>
				<input {...color} type="color"></input>
				<button>Add</button>
			</form>
		</div>
	);
}

export default App;
