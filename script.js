$(".burger_menu").click(function () {
  $(".dropdown_menu").slideToggle(700);
  $('.burger').toggleClass('active');
  $("body").toggleClass("non-scroll");
  $("html").toggleClass("non-scroll");
});
$("header").click(function (e) {
  console.log(e.target);
  if (
    $(".dropdown_menu")[0].style.display == "block" &&
    e.target != $(".burger_menu .burger")[0] &&
    e.target != $(".burger_menu span")[0]
  ) {
    $(".dropdown_menu").slideUp(700);
    $('.burger').toggleClass('active');
  }
});

$(function () {
  // при нажатии на кнопку scrollup
  $(".up_arrow").click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
});

// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $(".up_arrow").fadeIn(300);
  }
  // иначе скрыть кнопку scrollup
  else {
    $(".up_arrow").fadeOut(300);
  }
});
