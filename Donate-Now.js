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


// ----------------------------------------------------------------------------------------------




function saveDonateNowForm() {
    // Get form values
    var cause = document.getElementById('cause').value;
    var amount = document.getElementById('amount').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var PAN = document.getElementById('PAN').value;

    // Validate cause (assuming it's a required field)
    if (cause.trim() === '') {
        alert('Please select a cause.');
        return;
    }

    // Validate amount (assuming it's a required numeric field)
    if (amount.trim() === '' || isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    // Validate name
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Add more validation for other fields as needed...

    // Create form data object
    var saveDonateNowForm = {
        cause: cause,
        amount: amount,
        name: name,
        email: email,
        date: date,
        phone: phone,
        message: message,
        city: city,
        state: state,
        PAN: PAN
    };

    console.log(JSON.stringify(saveDonateNowForm));

    // Send form data using fetch
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch('http://localhost:8080/add-donateform', {
        method: 'POST',
        body: JSON.stringify(saveDonateNowForm),
        headers: headers,
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));

    // Display success message
    alert('Message sent successfully!');
}
