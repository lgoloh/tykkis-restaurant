import { useState, useEffect } from "react";
import "./css/SMDemo.css";

const emotions = ["Sad", "Tired", "Angry"];
let i = 0;

export default function StateManagementDemo() {
	const [emotion, setEmotion] = useState("happy"); //useState returns an array that can be destructed as shown
	useEffect(() => {
		console.log(`It's ${emotion} right now`);
	}, [emotion]);

	return (
		<div className="SMDemo">
			<h1>Hello from Tykki</h1>
			<p>I'm currently feeling {emotion}</p>
			<button
				onClick={() => {
					console.log(`i is ${i}`);
					if (i === emotions.length) {
						setEmotion("happy");
					} else {
						setEmotion(emotions[i]);
						i = i + 1;
					}
				}}
				style={{
					padding: 10,
					color: "white",
					backgroundColor: "black",
					borderRadius: 10,
				}}>
				Change emotion
			</button>
		</div>
	);
}
