import "./styles.css";

export function locationsPage() {

	const content = document.querySelector('#content');
	
	const homePageContent = document.querySelector('#menu-page-content');
		content.removeChild(homePageContent);

	const locationsPageContent = document.createElement('div');
		content.appendChild(locationsPageContent);
		locationsPageContent.id = "locations-page-content";

	const locations = document.createElement('div');
		locationsPageContent.appendChild(locations);
		locations.id = "#menu";
		locations.textContent = "Locations:";



};