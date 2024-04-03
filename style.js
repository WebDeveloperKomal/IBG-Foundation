// -----------------------------save the data-----------------------------------------


var jwtToken = localStorage.getItem('jwtToken');

function saveData() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var zipcode = document.getElementById('zipcode').value;

    if (!fullName || !email || !phone || !zipcode) {
        alert('Please fill in all required fields.');
        return;
    }

    var data = {
        fullName: fullName,
        email: email,
        phone: phone,
        zipcode: zipcode,
    };

    fetch('http://localhost:8080/foundation/auth/call-to-action', {
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
                document.getElementById('phone').value = '';
                document.getElementById('zipcode').value = '';

                window.location.href = 'index.html';
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

