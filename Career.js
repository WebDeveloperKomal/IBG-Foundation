// -----------------------------save the data-----------------------------------------


var jwtToken = localStorage.getItem('jwtToken');

function saveData() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;
    var message = document.getElementById('message').value;

    if (!fullName || !email || !position || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    var data = {
        fullName: fullName,
        email: email,
        position: position,
        message: message,
    };

    fetch('http://localhost:8080/foundation/auth/save-beavolunteer', {
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
                document.getElementById('fullName').value = '';
                document.getElementById('email').value = '';
                document.getElementById('position').value = '';
                document.getElementById('message').value = '';

                window.location.href = 'Pages-Career.html';
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