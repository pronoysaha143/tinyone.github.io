/*-------Start Scroll to top----------*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.top_to_button').fadeIn().addClass('animated fadeInUp');
            } else {
                $('.top_to_button').fadeOut().removeClass('animated fadeInUp');
            }
        });
        $('.top_to_button').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
/*--------End Scroll to top-----------*/
