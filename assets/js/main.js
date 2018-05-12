var s = skrollr.init();
window.sr = ScrollReveal();

var distance = $('#first-page').offset().top;

$(window).scroll(function (event) {
    var scroll = $('#first-page').scrollTop();

    var navWidth = $('#navfixed').height();
    //console.log(navWidth);

    if ( $(window).scrollTop() >= distance + navWidth ) {
        $('#navfixed').addClass('afterScroll');
        // $('#navfixed').addClass('afterScroll').animate({
        //     opacity: 0.5
        // });
    } else {
        // $('#navfixed').removeClass('afterScroll').animate({
        //     opacity: 0
        // });
        $('#navfixed').removeClass('afterScroll', 1000, "easeInBack");
    }
});

sr.reveal('#navfixed', {
    origin : 'top',
    duration : 2000
});
sr.reveal('.header h1', {
    origin: 'left',
    duration: 2000,
    distance: '300px'
});
sr.reveal('.header p', {
    origin: 'right',
    duration: 2000,
    distance: '300px'
});
sr.reveal('.down-button', {
    origin: 'top',
    duration: 2000,
    distance: '200px'
});
sr.reveal('#second-page .left-text', {
  origin: 'top',
  duration: 2000,
  distance: '50px'
});
sr.reveal('#second-page .image', {
  origin: 'bottom',
  duration: 2000,
  distance: '100px'
});
sr.reveal('#second-page .col-md-8 p', {
  origin: 'right',
  duration: 2000,
  distance: '200px'
})

// Smooth Scrolling of the page
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });