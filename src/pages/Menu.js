import { objectifyList } from "../utils";
import { MealSection } from "../components/Components";
import { Link } from "react-router-dom";
import "../css/Stylesheet.css";
import { breakfast, lunch, dinner } from "../utils";

export default function Menu() {
	return (
		<div>
			<nav className="container-col">
				<Link to="/">Home</Link>
				<Link to="/order">Place Order</Link>
			</nav>
			<h1>The Menu</h1>
			<div className="container-row">
				<MealSection title="Breakfast" dishes={objectifyList(breakfast)} />
				<MealSection title="Lunch" dishes={objectifyList(lunch)} />
				<MealSection title="Dinner" dishes={objectifyList(dinner)} />
			</div>
		</div>
	);
}
