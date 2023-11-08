function saveDonateNowForm() {

    var saveDonateNowForm = {

        cause: document.getElementById('cause').value,
        amount: document.getElementById('amount').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        PAN: document.getElementById('PAN').value

    }

    console.log(JSON.stringify(saveDonateNowForm));

    if (saveDonateNowForm != null) {
        alert("message send successfully!")
    }


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8080/add-donateform", {
        method: 'POST',
        body: JSON.stringify(saveDonateNowForm),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}