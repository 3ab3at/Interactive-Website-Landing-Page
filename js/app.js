//construct the nav menu
const target = document.getElementById("navbar__list")
const navMenuContent = document.querySelectorAll("section")
for (let i = 0; i < navMenuContent.length; i++) {
    const navMenuDiv = document.createElement('div')
    const navMenuDivText = navMenuContent[i].attributes[1].value
    navMenuDiv.innerText = navMenuDivText
    navMenuDiv.id = "navmenu__item"
    navMenuDiv.addEventListener('click', function() {
        respondToTheClick (navMenuDiv);
    }, false)
    navMenuDiv.classList.add("menu__link")
    const navMenuLi = document.createElement("li")
    navMenuLi.appendChild(navMenuDiv)
    target.appendChild(navMenuLi)
}

// Check if an element is in the current view port
function isInViewport (el) {
   let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

// add event listeneres for scrolling across the page
document.addEventListener('scroll', function () {
    navMenuContent.forEach(currentSection => {
        if(isInViewport(currentSection)) {
            currentSection.classList.add("your-active-class")
            target.childNodes.forEach(x => {
                if (x.innerText == currentSection.attributes[1].value) {
                    x.style.background = "rgb(241, 225, 0)"
                }
                else {
                    x.style.background = "#fff"
                }
            })
        }
        else {
            currentSection.classList.remove("your-active-class")       
        }
    });
})

//add event listeners for clicking the nav menu items
function respondToTheClick(element) {
    let elmt
    navMenuContent.forEach( x => {
        if (x.attributes[1].value === element.innerText)
            elmt = x
    })
    elmt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}