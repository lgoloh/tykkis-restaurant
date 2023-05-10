import "./css/App.css";
import { Footer } from "./components/Components";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import "./css/Stylesheet.css";

//title and color are objects
function App() {
	return (
		<div>
			<nav className="container-col">
				<Link to="/menu">Menu</Link>
				<Link to="/order">Place Order</Link>
			</nav>
			<Home />
			<Footer year={new Date().getFullYear()} />
		</div>
	);
}

export default App;
