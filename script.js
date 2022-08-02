normalSite();

function normalSite() {

     // display elements onload
     setTimeout(function() {
          $(".my-info p:nth-child(1)").css({
               "transform": "translateY(0px)",
               "opacity": "1"
          });
     }, 700);
     setTimeout(function() {
          $(".my-info p:nth-child(2)").css({
               "transform": "translateY(0px)",
               "opacity": "1"
          });
     }, 1000);
     setTimeout(function() {
          $(".my-info .fourthChild").css({
               "transform": "translateY(0px)",
               "opacity": "1"
          });
     }, 1300);
     setTimeout(function() {
          $(".scrollMouse, .fa-sort-down").css({
               "transform": "translateY(0px)",
               "opacity": "1"
          });
     }, 1600);



     // small animation on the title
     setTimeout(function() {       // remove transition (for blocky effect)
          $("#name").css({
               "transition": "none"
          });
     }, 2500);
     setTimeout(function() {
          $("#name").css({
               "font-family": "'Press Start 2P', cursive",
               "font-size": "50px"
          });
     }, 3000);
     setTimeout(function() {
          $("#name").css({
               "font-family": "Poppins",
               "font-size": "99px"
          });
     }, 3400);
     setTimeout(function() {       // add transition again
          $("#name").css({
               "transition": "all ease-in-out .4s"
          });
     }, 4500);





     // change text color
     setTimeout(function() {       // light up name
          // $("#name").css("color", "rgb(35, 143, 206)");
          $("#name").css("text-shadow", "0 0 10px rgb(15, 52, 95), 0 0 12px rgb(15, 52, 95), 0 0 14px rgb(15, 52, 95)");
     }, 2000);
     setTimeout(function() {       // add underline under name
          $(".nameUnderline").css("width", "126px");
     }, 2600);


     setTimeout(function() {       // light up 'web-dev'
          $(".webDev").css("text-shadow", "0 0 10px rgb(28, 122, 86), 0 0 12px rgb(28, 122, 86), 0 0 14px rgb(28, 122, 86)");
     }, 3200);
     setTimeout(function() {       // add underline under name
          $(".webDevUnderline").css("width", "184px");
     }, 4000);




     // start bg animation on clicking 'web-dev'
     $(".webDev").click(function() {
          $(".bg-animation div").css("animation-name", "bgCode");
     });




     // show go to top button (bottom right)
     $(window).scroll(function() {
          let distanceFromTop = window.pageYOffset;
          if (distanceFromTop > 500) {
               $(".go-to-top-btn").css("right", "5px");
          }
          else {
               $(".go-to-top-btn").css("right", "-105px");
          }
     });






     // ham-menu
     let hamClicks = 0;
     $(".nav-container span i").click(function(){
          if (hamClicks == 0) {
               $(".nav-container ul").css("margin-left", "-30px");
               $(".nav-container").css("z-index", "102");
               $(".nav-container span i").attr("class", "fas fa-times");
               hamClicks = 1;
          }
          else if (hamClicks == 1) {
               $(".nav-container ul").css({"margin-left": "-115%"});
               $(".nav-container span i").attr("class", "fas fa-bars");
               setTimeout(function() {
                    $(".nav-container").css("z-index", "99");
               }, 350);
               hamClicks = 0;
          }
     });




     // toggle social handles
     let socialArrow = true;
     $(".fa-sort-up").click(function(){
          if (socialArrow) {
               $("#social").css("top", "79%");
               $(".fa-sort-up").css("top", "76%");
               socialArrow = false;
          }
          else if (!socialArrow) {
               $("#social").css("top", "100%");
               $(".fa-sort-up").css("top", "95%");
               socialArrow = true;
          }
     });




     // 'projects' in project.
     $(".projectItem").on({
          mouseenter: function() {
               $(this).children().css({
                    "opacity": "1",
                    "transform": "translateY(0px)"
               });
          },
          mouseleave: function() {
               $(this).css({
                    "filter": "brightness(100%)"
               });
          },
     });

     

     // contact me
     function changeContactPos() {
          var contactRandomPosTop = Math.floor(Math.random() * 73);
          var contactRandomPosLeft = Math.floor(Math.random() * 73);
          $(".contactChild").css({
               "top": contactRandomPosTop + "%",
               "left": contactRandomPosLeft + "%"
          });
     }
     $(".contactChild").on({
          mouseenter: function () {
               changeContactPos();
          },
     });



     // animation besides the name ('home' icon)
     $(window).scroll(function() {
          if (window.pageYOffset > 460) {
               $("#arrow img").css({
                    "transform": "rotate(0deg)",
                    "left": "1px",
                    "top": "50px"
               });
               $("#arrow p").css({
                    "left": "45px"
               });
          }
          else {
               $("#arrow img").css({
                    "transform": "rotate(90deg)",
                    "left": "-40px",
                    "top": "30px"
               });
               $("#arrow p").css({
                    "left": "-85px"
               });
          }
     });




     // scroll down arrow (besides the mouse on the main screen)
     $(window).scroll(function() {
          if (window.pageYOffset > 200) {
               $(".scrollMouse").css("border-color", "rgb(82, 82, 82)");
               $(".scrollMouse span").css("color", "rgb(82, 82, 82)");
               $(".scrollArrow p").css("color", "rgb(82, 82, 82)");
          }
          else {
               $(".scrollMouse").css("border-color", "rgb(255, 255, 255)");
               $(".scrollMouse span").css("color", "orangered");
               $(".scrollArrow p").css("color", "rgb(255, 255, 255)");
          }
     });




     // shadow region (blur on scroll) as the page scrolls.
     const blurHome = $(".blurHome");
     const home = $("#home");

     let home_height = home.outerHeight();

     $(window).scroll(function() {
          let scroll = window.pageYOffset;
          home.css("opacity", -scroll/(home_height/3) + 1);


          // console.log(Math.floor($(window).scrollTop()) + " " + Math.floor(window.pageYOffset));

          // show content as the site scrolls
          if ($(window).scrollTop() > 518) {
               $("#about h1, #about h4").css({
                    "transform": "translateX(0px)",
                    "opacity": "1"
               });
               setTimeout(function(){
                    $("#about p").css({
                         "transform": "translateX(0px)",
                         "opacity": "1"
                    });
                    // change underlines
                    $(".aboutUnderline").css("width", "100px");
               }, 400);
          }


          if ($(window).scrollTop() > 1080) {
               $("#skills h1, #skills h4").css({
                    "transform": "translateX(0px)",
                    "opacity": "1"
               });
               setTimeout(function(){
                    $("#skills p").css({
                         "transform": "translateX(0px)",
                         "opacity": "1"
                    });
                    // change underlines
                    $("#skills .skillsUnderline").css("width", "70px");
               }, 400);
          }
          // for different skills
          if ($(window).scrollTop() > 1300) {
               $(".skillsContainer div").css({
                    "transform": "translateY(0px)",
                    "opacity": "1"
               });
          }


          if ($(window).scrollTop() > 1600) {
               $("#project h1, #project h4").css({
                    "transform": "translateX(0px)",
                    "opacity": "1"
               });
               setTimeout(function(){
                    $("#project p").css({
                         "transform": "translateX(0px)",
                         "opacity": "1"
                    });
                    // change underlines
                    $("#project .skillsUnderline").css("width", "70px");
               }, 400);
          }
          // for grid
          if ($(window).scrollTop() > 1930) {
               $(".projectItem").css({
                    "transform": "translateX(0px)",
                    "opacity": "1"
               });
          }


          if ($(window).scrollTop() > 2424) {
               $("#contact h1, #contact h4").css({
                    "transform": "translateX(0px)",
                    "opacity": "1"
               });
               setTimeout(function(){
                    $("#contact p").css({
                         "transform": "translateX(0px)",
                         "opacity": "1"
                    });
                    // change underlines
                    $(".contactUnderline").css("width", "100px");
               }, 400);
          }
          // for contact container
          if ($(window).scrollTop() > 2800) {
               $(".contactChild").css({
                    "opacity": "1"
               });
          }


          // show ending
          if ($(window).scrollTop() > 3031) {
               $("#ending").css({
                    "opacity": "1"
               });
          }

          // console.log(window.pageYOffset);      // just to check
          
     });




     // ending transition
     $(".fa-heart").on({
          mouseenter: function () {
               $("#ending p i").attr("class", "fas fa-code");
               $("#ending span").css("opacity", "1");
          },
          mouseleave: function () {
               $("#ending p i").attr("class", "fas fa-heart");
               $("#ending span").css("opacity", "0");
          }
     });





     // highlight the section of page the user is in.
     $(window).scroll(function() {
          if ($(window).scrollTop() >= 518 && $(window).scrollTop() < 1080) {
               $(".about-li").addClass("current-section");
               $(".about-li").css("color", "black");
          }
          else {
               $(".about-li").removeClass("current-section");
               $(".about-li").css("color", "white");
          }


          if ($(window).scrollTop() >= 1080 && $(window).scrollTop() < 1600) {
               $(".skills-li").addClass("current-section");
               $(".skills-li").css("color", "black");
          }
          else {
               $(".skills-li").removeClass("current-section");
               $(".skills-li").css("color", "white");
          }


          if ($(window).scrollTop() >= 1600 && $(window).scrollTop() < 2424) {
               $(".project-li").addClass("current-section");
               $(".project-li").css("color", "black");
          }
          else {
               $(".project-li").removeClass("current-section");
               $(".project-li").css("color", "white");
          }


          if ($(window).scrollTop() > 2424) {
               $(".contact-li").addClass("current-section");
               $(".contact-li").css("color", "black");
          }
          else {
               $(".contact-li").removeClass("current-section");
               $(".contact-li").css("color", "white");
          }
     });
}