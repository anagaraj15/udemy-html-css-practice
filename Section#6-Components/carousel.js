$(document).ready(function () {
  $(".carousel-item").hide();
  $(".open").show();

  $(".LeftShift").click(function () {
    var element = document.getElementsByClassName("carousel-item");
    console.log(element.length);
    var ele = document.getElementsByClassName("dot-btn");
    console.log(ele.length);
    // element[0].classList.add("open");
    // element[1].classList.remove("open");

    var indexval = $("div").find(".open").index();
    element[indexval].classList.remove("open");
    $(".dot-btn").css("background-color", "#fff");
    var resval = indexval + 1;
    if (resval > 0 && resval < element.length) {
      element[resval].classList.add("open");
      ele[resval].style.background = "#087f5b";
    } else {
      element[0].classList.add("open");
      ele[0].style.background = "#087f5b";
    }

    $(".carousel-item").hide();
    $(".open").show();
  });

  $(".RightShift").click(function () {
    var element = document.getElementsByClassName("carousel-item");
    console.log(element.length);
    var ele = document.getElementsByClassName("dot-btn");
    console.log(ele.length);
    // element[1].classList.add("open");
    // element[0].classList.remove("open");

    var indexval = $("div").find(".open").index();
    element[indexval].classList.remove("open");
    $(".dot-btn").css("background-color", "#fff");
    var resval = indexval + 1;
    if (resval > 0 && resval < element.length) {
      element[resval].classList.add("open");
      ele[resval].style.background = "#087f5b";
    } else {
      element[0].classList.add("open");
      ele[0].style.background = "#087f5b";
    }

    $(".carousel-item").hide();
    $(".open").show();
  });
});
