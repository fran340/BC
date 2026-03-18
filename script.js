// Toggle menu (mobile)
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form submission
const form = document.getElementById('bookingForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  message.textContent = "Appointment booked successfully!";
  message.style.color = "green";
  form.reset();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
