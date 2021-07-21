/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navigationbar = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

sections.forEach(function(section){
let menutext = section.getAttribute('data-nav');
let list = document.createElement('li');
let textnode = document.createTextNode(menutext);
let link = document.createElement('a');
list.addEventListener('click', function scrolling() {
section.scrollIntoView({behavior: "smooth"});})
link.appendChild(textnode);
list.appendChild(link);
fragment.appendChild(list);
navigationbar.appendChild(fragment);
list.style.cssText ='border: none; color: #cccc11; padding: 16px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; transition-duration: 0.4s; cursor: pointer; width: 1000 px;'
});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


