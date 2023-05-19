const subscribeBtn = document.getElementById('subscribeBtn');
const subscriptionForm = document.getElementById('subscriptionForm');


subscribeBtn.addEventListener('click', () => {
    subscriptionForm.classList.remove('hidden');
});

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the entered email
    const emailInput = document.getElementById('email');
    const email = emailInput.value;


    // Clear the input field
    emailInput.value = '';

    // Show a success message 
    alert('Subscription successful!');

    //Remove the form and subscribe button to stop the user from continuing to subscribe
    subscribeBtn.classList.add('hidden');
    subscriptionForm.classList.add('hidden');
    
});
