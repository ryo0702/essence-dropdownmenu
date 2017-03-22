/* Essence Dropdownmenu
copyright 2017, Essence Webservice Ryo Inagaki
http://essencews.com
https://ryo0702.github.io/essence-dropdownmenu/
released under the MIT license
*/

(function($){

  function elem_height_minus(base_elem = '',minus1_elem = '',minus2_elem = ''){
    var window_width = $(window).width();
    var base_elem_height = 0;
    var minus1_elem_height = 0;
    var minus2_elem_height = 0;
    base_elem_height = $(base_elem).height();
    if(minus1_elem != ""){
      minus1_elem_height = $(minus1_elem).height();
    }
    if(minus2_elem != ""){
      minus2_elem_height = $(minus2_elem).height();
    }

    var new_height = base_elem_height - minus1_elem_height - minus2_elem_height;
    $(base_elem).css("min-height",new_height);
  }

  function add_dropdown_arrow(elem){
    if($(elem).length){
      $(elem).parent().children("a").append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    }
  }

  function dropdown_menu(elem){
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
    $(".modal_menu").on('click',function(){
      $(".window-overlay").show();
      $(".navbar-basic").find(".menu-wrap").show();
    });
    $(".window-overlay,.navbar-basic .menu-wrap").on('click',function(){
      $(".window-overlay").hide();
      $(".navbar-basic").find(".menu-wrap").hide();
    });
    $(".navbar-contact .toggle_button").on('click',function(){
      $(".navbar-contact").find(".nav_menu").toggle();
    });
    elem_height_minus(".height-full-minus-navbar",".navbar");
  };
}(jQuery));
