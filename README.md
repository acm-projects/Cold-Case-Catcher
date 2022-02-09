# Cold-Case-Catcher 🔍
Thousands of criminal cases go unsolved every year, with many not getting enough public attention or help. This web app aims to get the general public involved in these investigations by pooling resources and potentially helping find vital information to solve cold cases across the country. 

# MVP
- Pull unsolved crime data from this government created API (a database of crime returned in csv or json) 
- Create a web scraper for cases listed in the database, in order to find more information (articles, videos, podcasts, etc)
- Let users create accounts in order to collaborate with others on cases (a forum)
- Allow users to upload their own cases (questions of reliability arise)
- Display all cases in an efficient manner including:
  - Basic facts about the case
  - Articles written about the case
  - Any police reports
  - The forum
  - If desired, a contact person for the case
  - Links (or embedded) any digital media (videos, podcasts)
- Let users keep track of what cases they are watching and allow them to make private notes about each case (only seen by them)

# Stretch Goals
- Allow for picture submissions of the victim/perpetuator
- Allow users to get updated when important revelations occur in a case
- A private messaging system between users

# Tech stack for Web App
- Wireframing
	- [Figma](https://www.figma.com/)
- Frontend
	- [React]( https://reactjs.org/)
		- Widely used
	- [Vue](https://vuejs.org/)
		- Easier to pick up than React,but less popular
- [FBI Crime API](https://crime-data-explorer.fr.cloud.gov/)
	- Will be used to extract information
- Backend
	- [Node.js](https://nodejs.org/en/)
		- Easily integratable with Vue and React 
		- Firebase and Node.js integrate with one another rather easily
- Libraries
	- [Supermemo](https://github.com/maxvien/supermemo#readme)
	- [JS Library](https://www.npmjs.com/package/lt-spaced-repetition-js)
- Web Scraper 
	- [[Google Custom Search API](https://developers.google.com/custom-search/v1/introduction)
- Database:
	- [Firebase](https://firebase.google.com/docs)
- Login/Authentication
	- [Firebase Authentication](https://firebase.google.com/docs/auth/web/firebaseui)

# Tech stack for Mobile App
- Wireframing
	- [Figma](https://www.figma.com/)
- [FBI Crime API](https://crime-data-explorer.fr.cloud.gov/)
	- Will be used to extract information
- [Flutter](https://flutter.dev/docs)
	- Uses [Dart](https://dart.dev/) as a language
	- Has LOTS of [documentation](https://flutter.dev/docs)
- Web Scraper 
	- [Google Custom Search API](https://developers.google.com/custom-search/v1/introduction)
- Database:
	- [Firebase](https://firebase.google.com/docs)
- Login/Authentication
	- [Firebase Authentication](https://firebase.google.com/docs/auth/web/firebaseui)

# Icons 
( Credit to Francis :) )
- https://material.io/resources/icons/?style=baseline
- https://materialdesignicons.com/
- https://www.flaticon.com/
- https://www.pexels.com/
- https://commons.wikimedia.org/wiki/Category:Images
- https://unsplash.com/images/stock
