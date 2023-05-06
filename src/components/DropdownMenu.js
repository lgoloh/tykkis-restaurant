import { useState } from "react";
import "../css/DropdownMenu.css";

function DropdownItem({ index, title, getSelection }) {
	return (
		<p className="menu-item" key={index} onClick={() => getSelection(title)}>
			{title}
		</p>
	);
}

export default function DropdownMenu({ options }) {
	const [menuItem, setSelection] = useState("select dish");
	const [iconSrc, setSrc] = useState("/images/expand_more.png");

	const menuHandler = () => {
		const menu = document.getElementById("menu");
		if (iconSrc === "/images/expand_more.png") {
			menu.hidden = false;
			setSrc("/images/expand_less.png");
		} else {
			menu.hidden = true;
			setSrc("/images/expand_more.png");
		}
	};

	return (
		<div id="menu-top">
			<div className="input-container">
				<input
					className="menu-input"
					type="text"
					placeholder={menuItem}></input>
				<button className="expand-button" onClick={() => menuHandler()}>
					<img
						id="expand"
						className="expand-img"
						src={iconSrc}
						alt="expand dropdown menu"></img>
				</button>
			</div>

			<ul id="menu" hidden={true}>
				{options.map((dish) => (
					<DropdownItem
						index={dish.id}
						title={dish.name}
						getSelection={setSelection}
					/>
				))}
			</ul>
		</div>
	);
}
