$(document).ready(function() {
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    alert('Thank you, ' + $('#name').val() + '! Your message has been sent.');
    this.reset();
  });
});
