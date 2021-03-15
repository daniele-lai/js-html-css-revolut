$(function() {

  //Evento click
  $(".menu").click(function () {
    $(this).children(".dropdown_menu").toggle();
  });

  //Eventi hover
  $(".menu").mouseenter(function () {
    $(this).children(".dropdown_menu").addClass("active");
  });

  $(".menu").mouseleave(function () {
    $(this).children(".dropdown_menu").removeClass("active");
  });










});
