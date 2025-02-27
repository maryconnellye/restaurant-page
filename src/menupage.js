import "./styles.css";


export function createMenuPage() {

	const content = document.querySelector('#content');
		content.innerHTML = '';

	const menuPageContent = document.createElement('div');
		content.appendChild(menuPageContent);
		menuPageContent.id = "menu-page-content";

		const menu = document.createElement('div');
			menuPageContent.appendChild(menu);
			menu.id = "menu";

			const menuTitle = document.createElement('h1');
				menu.appendChild(menuTitle);
				menuTitle.textContent = "MENU";
				menuTitle.id = "menu-title";
			
			const breakfastBurrito = document.createElement('h2');
				menu.appendChild(breakfastBurrito);
				breakfastBurrito.textContent = "Breakfast Burrito";
				breakfastBurrito.id = "breakfast-burrito";

			const burritoDescription  = document.createElement ('h3');
				menu.appendChild(burritoDescription);
				burritoDescription.textContent = "Eggs, cheese, hashbrowns, your choice of steak or bacon, with Asher's Abra-Kadobo sauce, wrapped in a perfectly crisped tortilla";
				burritoDescription.id = "burrito-description";
			
				const quesadilla = document.createElement('h2');
				menu.appendChild(quesadilla);
				quesadilla.textContent = "Quesadilla";
				quesadilla.id = "quesadilla";
	
			const quesadillaDescription = document.createElement('h3');
				menu.appendChild(quesadillaDescription);
				quesadillaDescription.textContent = "Straight up with cheese on a perfectly crisped tortilla or Asher's Way with far too much sriracha."
				quesadillaDescription.id = "quesadilla-description";
};			

