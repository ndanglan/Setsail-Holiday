// open-close subnav

const btnPage = document.querySelector('.navbar-item-page');
const btnTour = document.querySelector('.navbar-item-tour');
const btnDestination = document.querySelector('.navbar-item-destination');

const subNavPage =document.querySelector('.sub-nav-page');
const subNavTour =document.querySelector('.sub-nav-tour');
const subNavDestination =document.querySelector('.sub-nav-destination');
// open

var i=0;
var j=0;
var k=0;
function openSubNavPage(){
    
    if(i % 2 == 0){
        subNavPage.classList.add('sub-nav-open');
        i++;
    }else{
        subNavPage.classList.remove('sub-nav-open');
        i++;
    }
    
}

function openSubNavTour(){
    
    if(j % 2 == 0){
        subNavTour.classList.add('sub-nav-open');
        subNavTour.classList.remove('sub-nav-closed');
        j++;
    }else{
        subNavTour.classList.remove('sub-nav-open');
        subNavTour.classList.add('sub-nav-closed');
        j++;
    }
}

function openSubNavDestination(){
    
    if(k % 2 == 0){
        subNavDestination.classList.add('sub-nav-open');
        k++;
    }else{
        subNavDestination.classList.remove('sub-nav-open');
        k++;
    }
}

// close
function closeSubNavPage(){
    subNavPage.classList.remove('sub-nav-open');
}

function closeSubNavTour(){
    subNavTour.classList.remove('sub-nav-open');
}

function closeSubNavDestination(){
    subNavDestination.classList.remove('sub-nav-open');
}

btnPage.addEventListener('click',openSubNavPage);
btnTour.addEventListener('click',openSubNavTour);
btnDestination.addEventListener('click',openSubNavDestination);







$('#cusSlider').carousel();

// OWL carousel


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dotsEach:true,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1024:{
            items:2.3
        },
        1300:{
            items:4.5
        }
    },
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.postmark-list-icon-right').click(function() {
    owl.trigger('prev.owl.carousel');
})
// Go to the previous item
$('.postmark-list-icon-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('next.owl.carousel', [300]);
})

//  themes appearance

const themeControl = document.querySelector(".js-themes-control");
var themeIcon = document.querySelector(".themes-small-icon");
var themeArrowIcon = document.querySelector(".theme-arrow");
var themeBar = document.querySelector(".themes-bar");
var slider = document.querySelector(".slider");
var header = document.querySelector(".header");
var themeNav = document.querySelectorAll(".themes-nav");
var i=0;

function appearTheme(){
    // alert("show");
    if(i % 2 == 0){
        themeIcon.classList.add('dissapear');
        themeArrowIcon.classList.remove('dissapear');
        // themeIcon.classList.
        themeBar.classList.add('js-themes-trasition-right');
        themeBar.classList.remove('js-themes-trasition-left');
        themeNav[0].classList.add('js-icon-move-right');
        themeNav[0].classList.remove('js-icon-move-left');
        themeNav[1].classList.add('js-icon-move-right');
        themeNav[1].classList.remove('js-icon-move-left');
        i++;
    }else{
        themeIcon.classList.remove('dissapear');
        themeArrowIcon.classList.add('dissapear');
        themeBar.classList.remove('js-themes-trasition-right');
        themeBar.classList.add('js-themes-trasition-left');
        themeNav[0].classList.remove('js-icon-move-right');
        themeNav[0].classList.add('js-icon-move-left');
        themeNav[1].classList.remove('js-icon-move-right');
        themeNav[1].classList.add('js-icon-move-left');
        // themeNav.style.cssText="transform: scaleX(1.5); transform-origin: right center;"
        i++;
    }
}

// function appear

themeControl.addEventListener('click' , appearTheme);


// go-Up control

function addEvent( obj, type, fn ) {

    if ( obj.attachEvent ) {

        obj['e'+type+fn] = fn;
        obj[type+fn] = function(){obj['e'+type+fn]( window.event );};
        obj.attachEvent( 'on'+type, obj[type+fn] );
    } else {
        obj.addEventListener( type, fn, false );
    }
}
function getScrollY() {
    var  scrOfY = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
        //Netscape compliant
        scrOfY = window.pageYOffset;

    } else if( document.body && document.body.scrollTop )  {
        //DOM compliant
        scrOfY = document.body.scrollTop;
    } 
    return scrOfY;
}

addEvent(window, 'scroll', function(event) {

    var btnGoUp = document.querySelector(".go-Up");

    var y = getScrollY();      
      if (y >= 768) {
        btnGoUp.style.position = "fixed"; 
        // btnGoUp.style.top= "0";
     } else if(y< 100){
        btnGoUp.style.position = "unset";
     }
    // console.log(y);
    // console.log(y);
}); 