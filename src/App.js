import logo from "./logo.svg";
import "./css/App.css";
import MealSection from "./components/MealSection";
import { useState, useEffect, useReducer } from "react";

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
	const [isChecked, setChecked] = useReducer((isChecked) => !isChecked, false);
	return (
		<div className="App">
			<input type="checkbox" value={isChecked} onChange={setChecked} />
			<label>{isChecked ? "Checked" : "Not Checked"}</label>
		</div>
	);
}

export default App;
