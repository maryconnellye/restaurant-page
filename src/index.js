import "./styles.css";
import { createHomePage } from "./homepage.js";
// import { locationsPage } from "./locationspage.js";
import { createMenuPage } from "./menupage.js";
 
createHomePage();

const header = document.querySelector('#header');

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
	
	const locationsTab = document.querySelector('#locationsTab');
		header.appendChild(locationsTab);
	// 	locationsTab.addEventListener('mouseup', () => {
	// 		locationsTab.style.transform = "scale(1)";
	// 	});
	// 	locationsTab.addEventListener('mousedown', () => {
	// 		locationsTab.style.transform = "scale(1.2)";
	// 	});
	// 	locationsTab.addEventListener('click', () => {
	// 		const content = document.querySelector("#content");
	// 		content.removeChild(homePageContent);
	// 		content.removeChild(menuPageContent);
	// 		locationsPage();
	// 	});