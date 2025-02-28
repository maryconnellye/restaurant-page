import "./styles.css";
import asherPicture from "./asherpicture.jpg";

export function createHomePage() {

	const content = document.querySelector("#content");
		content.innerHTML = '';

const homePageContent = document.createElement('div');
		content.appendChild(homePageContent);
		homePageContent.id = "home-page-content";

	const asher = document.createElement("img");
		homePageContent.appendChild(asher);
		asher.src = asherPicture;
		asher.id = "asher";

	const title = document.createElement('h1');
		homePageContent.appendChild(title);
		title.id="title";
		title.textContent = "Two Burritos Asher";

	const about = document.createElement("p");
		homePageContent.appendChild(about);
		about.id = "about";
		about.textContent = 'Asher, a long-time lover of the Mexican cuisine, once finished a whole burrito and started on a second in the time it took his wife to eat one street taco and said, "They don\'t call me "Two Burritos Asher" for nothing." Rolling her eyes, his wife pointed out that nobody actually calls him that.  Asher then gleefully explained that yes, in fact, whenever he orders at a taco truck, they yell out to him from the pick-up window, "Two burritos, Asher?"';

	const aboutTruck = document.createElement("p");
		homePageContent.appendChild(aboutTruck);
		aboutTruck.id = "about-truck";
		aboutTruck.textContent = 'Thus was born the idea of the food truck with the laziest menu and the raddest vibes.  Asher knows best that, morning, noon or night, nothing hits the spot better than some melted cheese on a toasty tortilla.  Load it up or keep it simple: you can\'t go wrong.'
	};

