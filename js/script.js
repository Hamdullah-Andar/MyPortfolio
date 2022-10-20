// create variables
const mobileMenuModal = document.querySelector('.mobile-modal-menu');
const closeBtn = document.querySelector('#close-btn');
const menuBtn = document.querySelector('#humburger-btn');
const MobileLinks = document.querySelector('#mobile-links');

// Add event listener to the humburger menu
menuBtn.addEventListener('click', () => {
  mobileMenuModal.classList.toggle('close');
});

// Add event listener to the close button
closeBtn.addEventListener('click', () => {
  console.log("clicked")
  mobileMenuModal.classList.toggle('close');
});

// Add event listener to the mobile nav-links
MobileLinks.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    mobileMenuModal.classList.toggle('close');
  }
});
