import "./styles.css";
import { homePage } from "./homepage";
import { menu } from "./menu";

const header = document.querySelector('#header');

const homeTab = document.querySelector('#homeTab');
	header.appendChild(homeTab);
	homeTab.addEventListener('click', homePage());

const menuTab = document.querySelector('#menuTab');
	header.appendChild(menuTab);
	menuTab.addEventListener('click', menu());
	
const locationsTab = document.querySelector('#locationsTab');
	header.appendChild(locationsTab);