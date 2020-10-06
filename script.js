// NavBar
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.hamburger-bar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('change');
});

// SLIDER
var button = document.getElementById('next');
button.onclick = function () {
    var container = document.getElementById('home');
    sideScroll(container,'right', 20,300, 10);
};

var back = document.getElementById('prev')
back.onclick = function () {
    var container = document.getElementById('home');
    sideScroll(container,'left', 20,300, 10);
};
function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
