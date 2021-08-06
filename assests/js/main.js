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
    smallNavWrapper = document.querySelector(".small-navbar-wrapper"),
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
    window.addEventListener("resize",closeUserRegister);
    formUserWrapper.addEventListener("click",function(event){
        event.stopPropagation();
    })

    function toggleNav(){
        if( smallOverlay.classList.contains("active")){
                smallNav.removeAttribute("style");
                smallNav.classList.remove("small-navbar-open");
                smallOverlay.classList.remove("active");
                smallNavWrapper.classList.remove("visible");
                resizeSmall();
        }else{
            smallNav.style.maxHeight = smallNav.scrollHeight +"px";
            // smallNav.style.box-shadow = "1px 1px 2px 2px rgba(0,0,0,0.07);";
            smallNav.classList.add("small-navbar-open");
            smallOverlay.classList.add("active");
            smallNavWrapper.classList.add("visible");
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
                smallNav.style.maxHeight = smallNav.scrollHeight + subNavbar.scrollHeight + "px";
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

window.addEventListener('scroll',()=>{
    if(themeBar.classList.contains('js-themes-trasition-right')){
        themeIcon.classList.remove('dissapear');
        themeArrowIcon.classList.add('dissapear');
        themeBar.classList.remove('js-themes-trasition-right');
        themeBar.classList.add('js-themes-trasition-left');
        themeNav[0].classList.remove('js-icon-move-right');
        themeNav[0].classList.add('js-icon-move-left');
        themeNav[1].classList.remove('js-icon-move-right');
        themeNav[1].classList.add('js-icon-move-left');
    }
})


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


// control USER
(()=>{
    const userRegister = document.querySelector(".user-register"),
    userLogin = document.querySelector(".user-login"),
    loginForm = document.querySelector(".login"),
    registerForm = document.querySelector(".register-now"),
    userFooter = document.querySelector(".user-footer");


    function openRegister(){
        if(loginForm.classList.contains("active")){
            registerForm.classList.add("active");
            userRegister.classList.add("used");
            userLogin.classList.remove("used");
            loginForm.classList.remove("active");
            userFooter.classList.remove("active");
        }
    }   

    function openLoginForm(){
        if(registerForm.classList.contains("active")){
            registerForm.classList.remove("active");
            loginForm.classList.add("active");
            userFooter.classList.add("active");
            userLogin.classList.add("used");
            userRegister.classList.remove("used");
        }
    }

    userRegister.addEventListener("click",openRegister);
    userLogin.addEventListener("click",openLoginForm);

    

})();


// PRELOADING

window.addEventListener("load",()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".preloader").style.display = "none";

    },1000)
})

// ---------SCROLL REVEAL ANIMATION-----------
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true,
})
const srBanner = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true,
    mobile: false,
})


srBanner.reveal(`.form-banner`,{
    origin:'top',
})
sr.reveal(` .custom-image,
            .expert-item-1,.expert-item-3`,{
    origin:'top',
})

sr.reveal(`.tour-item,
            .subcribe,
            .owl-carousel,
            .expert-item-2,.expert-item-4,
            .review-wrap,
            .subcribe-end-btn,
            .postmark-list-container`,{
    origin:'bottom',
})

sr.reveal(`.tour-item`,{
    origin:'bottom',
    interval:50,
})



// sr2.reveal(`.left`,{
//     origin:'left';
// });

const sr2 = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: true,
})

sr2.reveal(`.control-slider-left,
            .main-sub-heading,
            .postmark-desc,
            .postmark-list-icon-left,
            .review-control-left,
            .main-heading,
            .subcribe-end-logo`,{
    origin:'left',
})

sr2.reveal(`.control-slider-right,
            .postmark-heading,
            .postmark-list-icon-right,
            .review-control-right,
            .expert-description,
            .subcribe-end-desc,
            .form-desc`,{
    origin:'right',
})

const sr3 = ScrollReveal({
    distance: '20px',
    duration: 2500,
    reset: true,
})

sr3.reveal(`.custom-image`,{
    origin:'top',
})

sr3.reveal(`.custom-heading,
            .custom-description`,{
    origin:'bottom',
})




// SWIPER JS

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".postmark-list-icon-right",
      prevEl: ".postmark-list-icon-left"
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   },
    // freeMode: true,
  });

var swiperReview = new Swiper(".review-container", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".review-control-right",
      prevEl: ".review-control-left "
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    //   },
    // freeMode: true,
  });



