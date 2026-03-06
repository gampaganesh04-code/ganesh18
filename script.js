'use strict';

// Smooth scrolling for anchor links
const smoothScroll = (target) => {
    const scrollToEl = document.querySelector(target);
    scrollToEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Event listener for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});

// Animations on scroll
const animatedElements = document.querySelectorAll('.animate');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

animatedElements.forEach(element => observer.observe(element));

// Interactive elements
const toggleButtons = document.querySelectorAll('.toggle');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
