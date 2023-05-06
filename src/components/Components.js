import "../css/Stylesheet.css";

export function Main(props) {
	return (
		<section>
			<img
				className="header-image"
				width={500}
				src="/images/restaurant.jpeg"
				alt="Meals on a table"
			/>
			<p className="subtitle">
				We serve the most {props.adjective} food around.
			</p>
		</section>
	);
}

export function Header(props) {
	return (
		<header className="title">
			<h1>{props.name}'s Kitchen</h1>
		</header>
	);
}

export function Footer(props) {
	return (
		<footer>
			<p>Copyright {props.year}</p>
		</footer>
	);
}

//Object destructuring
export function MealSection({ title, dishes }) {
	return (
		<section>
			<header>
				<h2>{title}</h2>
			</header>
			<ul>
				{dishes.map((dish) => (
					<li key={dish.id}>{dish.name}</li>
				))}
			</ul>
		</section>
	);
}
