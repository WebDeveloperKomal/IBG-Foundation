function saveFaqForm() {
    var saveFaqForm = {

        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        message: document.getElementById('message').value
    }

    console.log(JSON.stringify(saveFaqForm));

    if (saveFaqForm != null) {
        alert("message send successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/add-faqform", {
        method: 'POST',
        body: JSON.stringify(saveFaqForm),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}