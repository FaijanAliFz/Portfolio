document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;

    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert("Thank you for reaching out! I'll get back to you soon.");
});
