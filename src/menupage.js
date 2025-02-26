import "./styles.css";

export function menuPage() {

	const content = document.querySelector('#content');

	const menuPageContent = document.createElement('div');
		content.appendChild(menuPageContent);
		menuPageContent.id = "menu-page-content";

	const menu = document.createElement('div');
		menuPageContent.appendChild(menu);
		menu.id = "#menu";
		menu.textContent = "MENU";



};