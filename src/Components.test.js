import { render, screen } from "@testing-library/react";
import { Header, Main } from "./components/Components";

test("test header component", () => {
	render(<Header name="Tykki" />);
	const test_h1 = screen.getByText(/Tykki's Kitchen/);
	expect(test_h1).toHaveTextContent("Tykki's Kitchen");
});

test("test main component with input", () => {
	render(<Main adjective="delicious" />);
	const test_p = screen.getByText(/We serve the most delicious food around./);
	const test_img = screen.getByAltText(/Meals on a table/);
	expect(test_p).toHaveTextContent("We serve the most delicious food around.");
	expect(test_img).toHaveAttribute("src", "/images/restaurant.jpeg");
});
