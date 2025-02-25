import asherPicture from "./asherpicture.jpg";

export function homePage() {

	const homePageContent = document.querySelector("#content");

	const asher = document.createElement("img");
	asher.src = asherPicture;
	asher.id = "asher";
	homePageContent.appendChild(asher);

	const aboutContainer = document.createElement('div');
		homePageContent.appendChild(aboutContainer);
		aboutContainer.id = "about-container";

	const title = document.createElement('h1');
	homePageContent.appendChild(title);
		title.id="title";
		title.textContent = "Two Burritos Asher";


	const about = document.createElement("p");
		aboutContainer.appendChild(about);
		about.id = "about";
		about.textContent = 'Asher, a long-time lover of the Mexican cuisine, once finished a whole burrito and started on a second in the time it took his wife to eat one street taco and said, "They don\'t call me "Two Burritos Asher" for nothing." Rolling her eyes, his wife pointed out nobody actually him that to which Asher gleefully explained that yes, in fact, whenever he orders at a taco truck, they yell out to him from the pick-up window, "Two burritos, Asher?"';
};