import "./styles.css";
import { homePage } from "./homepage";
import { menuPage } from "./menupage";
 
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
			locationsPage();
		});