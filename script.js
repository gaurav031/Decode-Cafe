document.getElementById('modeSwitchBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Switch to Light Mode';
    } else {
        this.textContent = 'Switch to Dark Mode';
    }
});



document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('Thank you for your interest! More details coming soon.');
});


//for Contact us Section


    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // You can add code here to handle form submission, such as sending an AJAX request to your server
        
        // For demonstration purposes, let's just log the form data to the console
        const formData = new FormData(this);
        for (const [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);
        }

        // Clear the form fields after submission
        this.reset();
    });

