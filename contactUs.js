function saveContactForm() {

    var saveContactForm = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        message: document.getElementById('message').value
    }

    console.log(JSON.stringify(saveContactForm));

    if (saveContactForm != null) {
        alert("message send successfully!")

    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/add-contactform", {
        method: 'POST',
        body: JSON.stringify(saveContactForm),
        headers: headers,
    })


        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));


}