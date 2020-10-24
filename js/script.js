// $(document).ready(function(){
//     testEmail();
// });


const testEmail = () =>
{

    emailjs.init("user_GZFOFVBVqyLQn7siRZzIj");


    sendEmail();
}

const sendEmail = () =>
{
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        
        event.preventDefault();
  
        emailjs.sendForm('service_bkuthgq', 'contact_form', this).then(

            response = (response) =>
            {
                window.alert("Send email successful");
                location.reload();
            },

            error = (error) =>
            {
                window.alert("Send email unsuccessful..." + error);
            }
        );
    });
}