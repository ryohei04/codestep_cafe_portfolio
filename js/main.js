$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/

  $('a[href^="#"]').click(function () {

    let href = $(this).attr("href");
    console.log(href);

    let target = $(href == "#" || href == "" ? 'html' : href);
    console.log(target);

    let position = target.offset().top;
    console.log(position);

    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
})