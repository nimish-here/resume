var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);











/*var navmenu= document.querySelectorAll('.nav-menu a');
for(var i=0; i<navmenu.length; i++){
    navmenu[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID= this.textContent.trim().toLowerCase();
        var tarsec= document.getElementById(targetSectionID);
        var interval= setInterval(function(){
             var tarcor= tarsec.getBoundingClientRect();
            if(tarcor.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 50);
       
    });
}
var progressbars=document.querySelectorAll('.skill-progress >div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationdone=false;

function initialisebars(){
    for(let bar of progressbars)
        {
            bar.style.width=0+'%';
        }
    
}
initialisebars();
function fillBars(){
    for(let bar of progressbars)
        {
           let targetwidth= bar.getAttribute('data-bar-width');
            let currentwidth=0;
            let interval=setInterval(function(){
                if(currentwidth>targetwidth){
                    clearInterval(interval);
                    return;
                }
                currentwidth++;
                bar.style.width=currentwidth+'%';
            },3);
            
        }
    
}
function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationdone && coordinates.top <= window.innerHeight){
        animationdone=true;
        console.log('skill section visible');
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
         animationdone=false;
        initialisebars();
    }
    
}
*/