function showBookingForm(formType) {
    document.getElementById('flight-form').style.display = 'none';
    document.getElementById('hotel-form').style.display = 'none';
    document.getElementById('car-form').style.display = 'none';
    document.getElementById(formType + '-form').style.display = 'block';
}

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

// Form submission handlers (you can add your own logic here)
document.getElementById('flight-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Flight search submitted!');
}

document.getElementById('hotel-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Hotel search submitted!');
}

document.getElementById('car-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Car rental search submitted!');
}

document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Message sent!');
}

document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Login submitted!');
    closeModal('loginModal');
}

document.getElementById('signup-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Sign up submitted!');
    closeModal('signupModal');
}


document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('review-form');
    const reviewContainer = document.querySelector('.review-container');
  
    // Sample reviews (replace with actual data later)
    const sampleReviews = [
      { name: "John Doe", rating: 5, text: "Great service! Highly recommended." },
      { name: "Jane Smith", rating: 4, text: "Very good experience overall." }
    ];
  
    // Display sample reviews
    sampleReviews.forEach(review => addReviewToDOM(review));
  
    // Handle form submission
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = document.getElementById('review-name').value;
      const text = document.getElementById('review-text').value;
      const rating = document.querySelector('input[name="rating"]:checked').value;
  
      const newReview = { name, rating, text };
      addReviewToDOM(newReview);
  
      // Reset form
      reviewForm.reset();
    });
  
    function addReviewToDOM(review) {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.innerHTML = `
        <h4>${review.name}</h4>
        <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
        <p>${review.text}</p>
      `;
      reviewContainer.appendChild(reviewElement);
    }
  });