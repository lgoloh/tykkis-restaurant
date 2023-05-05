//Object destructuring
function MealSection({ title, dishes }) {
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

export default MealSection;
