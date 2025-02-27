import "./styles.css";
import { createHomePage } from "./homepage.js";
import { createMenuPage } from "./menupage.js";
 
createHomePage();

const header = document.querySelector('#header');

const foodTruck = document.createElement('h1');
	header.appendChild(foodTruck);
	foodTruck.id = "food-truck";
	foodTruck.textContent = "That one food truck with good eats & rad vibes";

	const homeTab = document.querySelector('#homeTab');
		header.appendChild(homeTab);
		homeTab.addEventListener('mouseup', () => {
			homeTab.style.transform = "scale(1)";
		});
		homeTab.addEventListener('mousedown', () => {
			homeTab.style.transform = "scale(1.2)";
		});

		homeTab.addEventListener('click', () => {
			createHomePage();
		});
		
	const menuTab = document.querySelector('#menuTab');
		header.appendChild(menuTab);
		menuTab.addEventListener('mouseup', () => {
			menuTab.style.transform = "scale(1)";
		});
		menuTab.addEventListener('mousedown', () => {
			menuTab.style.transform = "scale(1.2)";
		});
		menuTab.addEventListener('click', () => {
			createMenuPage();
		});
	