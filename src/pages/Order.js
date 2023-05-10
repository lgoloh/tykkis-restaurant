import DropdownMenu from "../components/DropdownMenu";
import { objectifyList } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { breakfast, lunch, dinner } from "../utils";

let dishes = [];

export default function Order() {
	const [choice, setChoice] = useState("");
	const [options, setOptions] = useState([]);

	function setupOptions(menu) {
		dishes = dishes.concat(menu);
		setOptions(dishes);
	}

	return (
		<div>
			<nav className="container-col">
				<Link to="/">Home</Link>
				<Link to="/menu">Menu</Link>
			</nav>
			<h1>Place an order</h1>
			<h2>Select meal type:</h2>
			<div className="container-col">
				<label>
					<input type="radio" onChange={() => setupOptions(breakfast)} />
					Breakfast
				</label>
				<label>
					<input type="radio" onChange={() => setupOptions(lunch)} />
					Lunch
				</label>
				<label>
					<input type="radio" onChange={() => setupOptions(dinner)} />
					Dinner
				</label>
			</div>
			<DropdownMenu options={objectifyList(options)} getSelection={setChoice} />
			<button
				onClick={() => alert(`Order placed for ${choice}! Delivery in 20mins`)}>
				Submit
			</button>
		</div>
	);
}
