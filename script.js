// Javascript file for interactive features if needed

// script.js

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents the page from refreshing on form submit
      const emailInput = document.querySelector('#email');
      alert(`Thank you for subscribing, ${emailInput.value}!`);
      emailInput.value = ''; // Clear the input field
    });
  });
  