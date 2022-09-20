(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(document).ready(function() {
            $('select').niceSelect();
          });

          $('input[type="number"]').niceNumber({

            // auto resize the number input
            autoSize: true,
          
            // the number of extra character
            autoSizeBuffer: 1,
          
          
            // 'around', 'left', or 'right'
            buttonPosition: 'around'
            
          });
          


    });


    jQuery(window).load(function(){

       // Script for OffCanvas Menu Activation
       $(document).ready(function () {
        $('.header__bar').on('click', function () {
            $('.offcanva, .overlay').addClass('active');
        })

        $('.cross').on('click', function () {
            $('.offcanva, .overlay').removeClass('active');
        })

        $('.overlay').on('click', function () {
            $('.offcanva, .overlay').removeClass('active');
        })
    })

       // Script for OffCanvas Menu Activation
       $(document).ready(function () {
        $('.cartt').on('click', function () {
            $('.pro-img-num').addClass('active');
        })

        $('.clloss').on('click', function () {
            $('.pro-img-num').removeClass('active');
        })
    })

       // Script for OffCanvas Menu Activation
       $(document).ready(function () {
        $('.ac2').on('click', function () {
            $('.product-card-fl, .product-grid').addClass('active');
        })

        $('.ac1').on('click', function () {
            $('.product-card-fl, .product-grid').removeClass('active');
        })
    })






    $('.arro').click( function (){
                  
        $('.header-area').toggleClass('active');  
        $('.arro').toggleClass('toggle');  
          
});



    });


}(jQuery));	