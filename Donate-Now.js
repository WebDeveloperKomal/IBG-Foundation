// --------------------------save the data--------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

function saveData() {
    var cause = document.getElementById('cause').value;
    var amount = document.getElementById('amount').value;
    var donarName = document.getElementById('donarName').value;
    var email = document.getElementById('email').value;
    var donarDate = document.getElementById('donarDate').value;
    var phone = document.getElementById('phone').value;
    var yourMessage = document.getElementById('yourMessage').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var panNumber = document.getElementById('panNumber').value;

    if (!cause || !amount || !donarName || !email || !donarDate || !phone || !yourMessage || !city || !state || !panNumber) {
        alert('Please fill in all required fields.');
        return;
    }

    var data = {
        cause: cause,
        amount: amount,
        donarName: donarName,
        email: email,
        donarDate: donarDate,
        phone: phone,
        yourMessage: yourMessage,
        city: city,
        state: state,
        panNumber: panNumber,
    };

    fetch('http://localhost:8080/foundation/auth/save-donatenow', {
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
                document.getElementById('cause').value = '';
                document.getElementById('amount').value = '';
                document.getElementById('donarName').value = '';
                document.getElementById('email').value = '';
                document.getElementById('donarDate').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('yourMessage').value = '';
                document.getElementById('city').value = '';
                document.getElementById('state').value = '';
                document.getElementById('panNumber').value = '';

                window.location.href = 'Donate-Now.html';
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
