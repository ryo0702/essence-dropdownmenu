/* Essence Dropdownmenu
copyright 2017, Essence Webservice Ryo Inagaki
http://essencews.com
https://ryo0702.github.io/essence-dropdownmenu/
released under the MIT license
ver 0.0.4
*/

(function($){

  function add_dropdown_arrow(elem){
    if($(elem).length){
      $(elem).parent().children("a").append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    }
  }

  function dropdown_menu(elem){
    // Offset
    var e_off = $(elem).offset();
    var e_height = $(elem).height();
    var e_all_height = e_height + e_off.top;
    $(elem).children("ul").css("top",e_all_height);
    $(document).on({
      "mouseenter":function(){
        if($(this).children("ul").length){
          $(this).children("ul").show();
        }
      },
      "mouseleave":function(){
        $(this).children("ul").hide();
      }
    },elem);
  }

  $.fn.dropdownmenu = function(){
    var window_width = $(window).width();
    if(window_width > 768){
      add_dropdown_arrow(".navbar-basic > .inner > div > ul > li > ul,.navbar-contact > .nav_menu > .inner > div > ul > li > ul");
      dropdown_menu(".navbar-basic > .inner > div > ul > li,.navbar-contact > .nav_menu > .inner > div > ul > li");
    }
    else{
      $(".modal_menu").on('click',function(){
        $(".window-overlay").fadeIn(100);
        $(".navbar-basic").find(".menu-wrap").fadeIn(350);
      });
      $(".window-overlay,.navbar-basic .menu-wrap").on('click',function(){
        $(".window-overlay").fadeOut(100);
        $(".navbar-basic").find(".menu-wrap").fadeOut(350);
      });
    }

    $(".navbar-contact .toggle_button").on('click',function(){
      $(".navbar-contact").find(".nav_menu").toggle();
    });
  };
}(jQuery));
