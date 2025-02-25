import "./styles.css";
import asherPicture from "./asherpicture.jpg";

export function homePage() {

	const content = document.querySelector("#content");

	const asher = document.createElement("img");
	asher.src = asherPicture;
	asher.id = "asher";
	content.appendChild(asher);

	const title = document.createElement('h1');
	content.appendChild(title);
		title.id="title";
		title.textContent = "Two Burritos Asher";

	const about = document.createElement("p");
		content.appendChild(about);
		about.id = "about";
		about.textContent = 'Asher, a long-time lover of the Mexican cuisine, once finished a whole burrito and started on a second in the time it took his wife to eat one street taco and said, "They don\'t call me "Two Burritos Asher" for nothing." Rolling her eyes, his wife pointed out nobody actually him that to which Asher gleefully explained that yes, in fact, whenever he orders at a taco truck, they yell out to him from the pick-up window, "Two burritos, Asher?"';
};