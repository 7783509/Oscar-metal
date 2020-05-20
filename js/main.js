/*******************Calcuator*********************************************/
/*----01/04----*/

/*----02/04----*/

/* Значение */

const hangarHeight = document.getElementById("hangar-height"),
  hangarWidth = document.getElementById("hangar-width"),
  /*Итоговые значения*/
  hangarLength = document.getElementById("hangar-length"),
  volumeRange = document.getElementById("volumeRange"),
  area = document.getElementById("area");

/* Renge */

const areaVelue = () => {
  hangarLength.velue = volumeRange.velue;
};

areaVelue();

console.log(volumeRange.velue);
// for (let input of hangarLength) {
//   // input.addEventListener("input", () => {
//   //   areaVelue();
//   // });
// }

/*----03/04----*/

/************End Calcuator*******************************************/

$(function () {
  /*Slider*/
  if ($("#works").length) {
    var swiper = new Swiper(".swiper-container", {
      // slidesPerView: 1,
      navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        mousewheel: true,
        keyboard: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }
  if (
    $("#awning-swiper, #straight-walled, #why-warmingwarm, #how-warming").length
  ) {
    var swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
});

/* Hamburger menu*/

$(".menu-icon-wrapper").on("click", function () {
  $(".hamburger-wrapper").toggle();
});

$("#hamburger-menu-hangars").on("click", function () {
  $(".hamburger-menu__submenu-hangars-wrap").show();
});

$("#hamburger-hangars-hide").on("click", function () {
  $(".hamburger-menu__submenu-hangars-wrap").hide("fast");
});

$("#hamburger-types-hangars").on("click", function () {
  $(".hamburger-menu__submenu-types-wrap").show();
});

$("#hamburger-types-hangars-hide").on("click", function () {
  $(".hamburger-menu__submenu-types-wrap").hide("fast");
});

$("#hamburger-awnings-hangars").on("click", function () {
  $(".hamburger-menu__submenu-awnings-wrap").show();
});

$("#hamburger-awnings-hangars-hide").on("click", function () {
  $(".hamburger-menu__submenu-awnings-wrap").hide("fast");
});

$("#hamburger-agriculture-hangars").on("click", function () {
  $(".hamburger-menu__submenu-agriculture-wrap").show();
});

$("#hamburger-agriculture-hangars-hide").on("click", function () {
  $(".hamburger-menu__submenu-agriculture-wrap").hide("fast");
});

$("#hamburger-business-hangars").on("click", function () {
  $(".hamburger-menu__submenu-business-wrap").show();
});

$("#hamburger-business-hangars-hide").on("click", function () {
  $(".hamburger-menu__submenu-business-wrap").hide("fast");
});

$("#hamburger-public-hangars").on("click", function () {
  $(".hamburger-menu__submenu-public-wrap").show();
});

$("#hamburger-public-hangars-hide").on("click", function () {
  $(".hamburger-menu__submenu-public-wrap").hide("fast");
});

$("#hamburger-various-materials-hangars").on("click", function () {
  $(".hamburger-menu__submenu-materials-wrap").show();
});

$("#hamburger-various-materials-hangars-hide").on("click", function () {
  $(".hamburger-menu__submenu-materials-wrap").hide("fast");
});

/*WOW Animation*/

new WOW().init();

/*Hamburger*/

document.querySelector(".menu-icon-wrapper").onclick = function () {
  document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
};

/*RAGE*/

function range() {
  var val = $(".range-slider").val();
  $(".range-slider").css({
    background:
      "-webkit-linear-gradient(left ,#FF9110 0%,#FF9110 " +
      val +
      "%,#fff " +
      val +
      "%, #fff 100%)",
  });
}
