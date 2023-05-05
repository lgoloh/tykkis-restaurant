export default function Main(props) {
	return (
		<section>
			<img
				width={250}
				src="./public/images/restaurant.jpeg"
				alt="Meals on a table"
			/>
			<p>We serve the most {props.adjective} food around.</p>
		</section>
	);
}
