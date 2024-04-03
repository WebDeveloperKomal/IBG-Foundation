// -----------------------------save the data-----------------------------------------


var jwtToken = localStorage.getItem('jwtToken');

function saveData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !subject || !number || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    var data = {
        name: name,
        email: email,
        subject: subject,
        number: number,
        message: message,
    };

    fetch('http://localhost:8080/foundation/auth/save-contactus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Server responded with error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Server response:', data);
            Swal.fire({
                icon: 'success',
                title: 'Saved!',
                text: 'Data has been saved successfully.',
            }).then((result) => {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('number').value = '';
                document.getElementById('message').value = '';

                window.location.href = 'Contact Us.html';
            });
        })

        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to save data. Please try again.',
            });
        });
}

