import logo from "./logo.svg";
import "./css/App.css";
import { useRef } from "react";
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

function App() {
	const title = useRef();
	const color = useRef();

	const submit = (e) => {
		e.preventDefault(); //e for event
		console.log(
			`Title is ${title.current.value} and color is ${color.current.value}`
		);
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
				<input ref={title} type="text" placeholder="color title"></input>
				<input ref={color} type="color"></input>
				<button>Add</button>
			</form>
		</div>
	);
}

export default App;
