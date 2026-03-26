$(document).ready(function() {

  // Broken skill icon fallback — replace with generic placeholder icon
  document.querySelectorAll('#skills .skill-item img').forEach(function(img) {
    img.addEventListener('error', function() {
      img.src = 'assets/img/icon-generic.svg';
      img.style.opacity = '0.4';
      img.removeEventListener('error', arguments.callee);
    });
  });

  // Scroll spy — highlight nav link for current section
  const sections = document.querySelectorAll('#home, #aboutme, #skills, #myprojects, #contact');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function(link) { link.classList.remove('active'); });
        const active = document.querySelector('.navbar-nav .nav-link[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function(section) { observer.observe(section); });


 
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600) {
      $('.navbar').slideDown();
      $('#backtotop i').slideDown();
    }
    else {
      $('#backtotop i').fadeOut();
      $('.navbar').slideUp();
    }
  });

  $("#backtotop").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, "slow");
      return false;
  });

  $("#button").click(function() {
      $($("svg").get()).each(function(i) {
          $(this).css('opacity', '1').hide().delay(i * 100).fadeIn();
      });
      $($(".lang").get()).each(function(i) {
        $(this).css('opacity', '1').hide().delay(i * 100).fadeIn();
    });
      $(".my-projects-link").delay(3300).fadeIn("slow");
      $('#button').delay(500).animate({ opacity: 0 }, 400, function() { $(this).css('visibility', 'hidden'); });
  });

});