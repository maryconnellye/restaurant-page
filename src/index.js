import "./styles.css";
import { homePage, homePageContent} from "./homepage.js";
import { locationsPage, locationsPageContent } from "./locationspage.js";
import { menuPage, menuPageContent } from "./menuPage.js";
 
homePage();

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
		
		const content = document.querySelector("#content");
			content.removeChild(locationsPageContent);
			content.removeChild(menuPageContent);
			homePage();
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
			const content = document.querySelector("#content");
			content.removeChild(locationsPageContent);
			content.removeChild(homePageContent);
			menuPage();
		});
	
	const locationsTab = document.querySelector('#locationsTab');
		header.appendChild(locationsTab);
		locationsTab.addEventListener('mouseup', () => {
			locationsTab.style.transform = "scale(1)";
		});
		locationsTab.addEventListener('mousedown', () => {
			locationsTab.style.transform = "scale(1.2)";
		});
		locationsTab.addEventListener('click', () => {
			const content = document.querySelector("#content");
			content.removeChild(homePageContent);
			content.removeChild(menuPageContent);
			locationsPage();
		});