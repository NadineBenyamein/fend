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

/*
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navigationbar = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

/*
 * End Global Variables
*/

// build the nav

//Function to build the navigation menu.
sections.forEach(function(section)
{
    //get text from "data-nav" attribute which will be displayed on navigation menu
    let menutext = section.getAttribute('data-nav');
    //create list element in the document
    let list = document.createElement('li');
    //save the test from data-nav into textnodes
    let textnode = document.createTextNode(menutext);
    //create link elements in the document
    let link = document.createElement('a');

    //listen to "clicking on button" event and respond by scrolling to the desired section
    list.addEventListener('click', function scrolling() 
    {
        //scrolling smoothly to desired section
        section.scrollIntoView({behavior: "smooth"});
    })
    //making every variable a child of the other (textnode in link, link in list, list in fragment and fragment in navigationbar)
    link.appendChild(textnode);
    list.appendChild(link);
    fragment.appendChild(list);
    navigationbar.appendChild(fragment);
    //changing the style of the navigation menu
    list.style.cssText ='border: none; color: rgb(204, 204, 17); background-color: rgb(160 9 33); padding: 16px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; transition-duration: 0.4s; cursor: pointer; width: 1000 px;'
});


// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

//this function returns whether the current section is in ViewPort or not
function sectionPosition (currentSection){
    let isSectionInView = false;
    let position = currentSection.getBoundingClientRect();
    
    //section is in view, if the number of pixels from the top of the element to the top of view port is >= 0. Otherwise, it's out of view.
    if(position.top >= 0)
    {
        isSectionInView = true;
    }
    return(isSectionInView);
}

//this function adds the class "your-active-class" to the section in view, and removes "your-active-class" from those that left the view port.
function activeClassSwap()
{
    let activeSectionFound = false;
    //execute for every section
    for(section of sections)
    {
        //remove "your active class" from all sections
        section.classList.remove('your-active-class');

        //check if section is in view
        if (sectionPosition(section))
        {   
            //check if no other section was set as "your active class" already
            if(activeSectionFound == false)
            {
                //add "your active class" to the first section in view & change activeSectionFound to "true" so that no other sections are also set as active
                section.classList.add('your-active-class');
                activeSectionFound = true;
            }
            
            
        }
    }
}
//event listener to execute the active class swap function upon scrolling.
document.addEventListener('scroll', activeClassSwap);

