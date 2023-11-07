function saveContactForm() {

    var ContactForm = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        message: document.getElementById('message').value
    }

    console.log(JSON.stringify(saveContactForm));

    let headers = new Headers({
    'Contenr-Type': 'application/json',
    'Accept': 'application/json'});


    fetch("http://localhost:8080/add-contactform", 
    {
        method: 'POST',
        body: JSON.stringify(ContactForm),
        headers:headers,
    })
        .then(response => response.status)
        .then(status => console.log('Response :',status))
        .catch(error => console.error('Error:', error));


}