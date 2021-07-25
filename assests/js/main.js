// open-close subnav

(()=>{
    const navBar= document.querySelector(".header-navbar");

    navBar.addEventListener("click",(event)=>{
        if(event.target.hasAttribute("data-toggle")){
            const NavBarItemHasChildren = event.target.parentElement;
            const subNav = NavBarItemHasChildren.querySelector(".sub-nav");
            if(NavBarItemHasChildren.classList.contains("active")){
                subNav.removeAttribute("style");
                NavBarItemHasChildren.classList.remove("active");
            }else{

                if(navBar.querySelector(".js-navbar.active")){
                    navBar.querySelector(".js-navbar.active .sub-nav").removeAttribute("style");
                    navBar.querySelector(".js-navbar.active").classList.remove("active");
                }
                NavBarItemHasChildren.classList.add("active");
                subNav.style.maxHeight = subNav.scrollHeight + "px";
            }
        }
    });
})();


// open register and change overlay's color



// IPAD PHONE menu

(()=>{
    const toggleSmallNav = document.querySelector(".js-small-header-menu"),
    smallNav = document.querySelector(".js-small-navbar"),
    smallOverlay = document.querySelector(".js-small-overlay"),

    toggleUser = document.querySelector(".js-small-header-user"),
    smallOverlayColor = document.querySelector(".js-small-overlay-color"),
    formUser = document.querySelector(".js-user"),
    formUserWrapper = document.querySelector(".js-user-wrapper"),

    mediaSize = 1024,
    mediaHeight = 768;

    // CONTROL Navbar
    toggleSmallNav.addEventListener("click",toggleNav);
    smallOverlay.addEventListener("click",toggleNav);
    
    
    // CONTROL REGISTER
    toggleUser.addEventListener("click",openUserRegister);
    formUser.addEventListener("click",closeUserRegister);
    formUserWrapper.addEventListener("click",function(event){
        event.stopPropagation();
    })

    function toggleNav(){
        if( smallOverlay.classList.contains("active")){
                smallNav.removeAttribute("style");
                smallNav.classList.remove("small-navbar-open");
                smallOverlay.classList.remove("active");

                resizeSmall();
        }else{
            smallNav.style.maxHeight = smallNav.scrollHeight +"px";
            // smallNav.style.box-shadow = "1px 1px 2px 2px rgba(0,0,0,0.07);";
            smallNav.classList.add("small-navbar-open");
            smallOverlay.classList.add("active");
        }
    }
    function openUserRegister(){
        smallOverlayColor.classList.add("active-1");
        formUser.classList.add("active-1");
        if( smallOverlay.classList.contains("active")){
            smallNav.removeAttribute("style");
            smallNav.classList.remove("small-navbar-open");
            smallOverlay.classList.remove("active");

            resizeSmall();
    }
    }
    function closeUserRegister(){
        smallOverlayColor.classList.remove("active-1");
        formUser.classList.remove("active-1");

    }

    function resizeSmall(){
        if(smallNav.querySelector(".js-small-navbar-item.active")){
            collapseSubNavbar();
        }
    }

    smallNav.addEventListener("click",(event)=>{
        if(event.target.hasAttribute("data-toggle")){

            const subMenuItemHasChildren = event.target.parentElement;
            //if subMenuItemHasChildren is already expanded, collapse it
            if(subMenuItemHasChildren.classList.contains("active")){
                collapseSubNavbar();
            }else{
                if(smallNav.querySelector(".js-small-navbar-item.active")){
                    // console.log("true");
                    collapseSubNavbar();
                }
                // expand new menuItemhaschildren
                subMenuItemHasChildren.classList.add("active");
                const subNavbar = subMenuItemHasChildren.querySelector(".js-small-sub-navbar");
                subNavbar.style.maxHeight = subNavbar.scrollHeight +"px";
            } 
        }
    });

    

    function collapseSubNavbar(){
        smallNav.querySelector(".js-small-navbar-item.active .js-small-sub-navbar").removeAttribute("style");
        smallNav.querySelector(".js-small-navbar-item.active").classList.remove("active");
    }
    function resizeFix(){
        // if smallNav is opened, close it 
        if(smallNav.classList.contains("small-navbar-open")){
            toggleNav();
        }

        // if subMenuItemHasChildren is expanded , collapse it 
        if(smallNav.querySelector(".js-small-navbar-item.active")){
            collapseSubNavbar();
        }
    }
    window.addEventListener("resize",function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }
    });

    // change go-Up destination
    // var value = document.querySelector(".go-Up-link").href;
    // window.addEventListener("resize",function(){
    //     if(this.innerWidth < mediaSize){
    //         document.querySelector(".go-Up-link").setAttribute = ("href","#header-small");
    //     }else{
    //         document.querySelector(".go-Up-link").setAttribute = ("href","#cusSlider");
    //     }
    // });
    // console.log(value);
})();

(()=>{
    var
    mediaSize = 768;
    

    window.addEventListener("resize",function(){
        var link = document.querySelector(".go-Up-link"),
        winWidth = window.innerWidth;
        
        if(winWidth <= mediaSize){
            // console.log(winWidth <= mediaSize);
        //    link = "#header-small";
           link.setAttribute("href","#header-small");
        }else{
            
            // link = "#cusSlider";
            link.setAttribute("href","#cusSlider");
        }
    });
    
    // console.log(link);
})();


// (()=>{
//     const 
// })();

// Slider
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
            items:2.4
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


