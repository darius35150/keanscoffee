// $(document).ready(function(){
//     testEmail();
// });


function testEmail(){
    emailjs.init("user_GZFOFVBVqyLQn7siRZzIj");


    sendEmail();
}

function sendEmail() {
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.user_phone.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_bkuthgq', 'contact_form', this);
    });
}