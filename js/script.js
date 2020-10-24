const testEmail = () =>
{

    emailjs.init("user_WcVXHM5ecQZEgZCZLz4N1");


    sendEmail();
}

const sendEmail = () =>
{
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        
        event.preventDefault();
  
        emailjs.sendForm('service_manmuq6', 'contact_form', this).then(

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