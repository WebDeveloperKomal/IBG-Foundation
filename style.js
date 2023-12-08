function saveForm() {

    var saveForm = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneno: document.getElementById("phoneno").value,
        zipcode: document.getElementById("zipcode").value
    }

    console.log(JSON.stringify(saveForm));

    if (saveForm != mull) {
        alert("message send successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/add-ctaform", {
        method: 'POST',
        body: JSON.stringify(saveForm),
        headers: headers,
    })


        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}



// -----------------------------------------------------------------------------------------



// function saveForm() {
//     // Get form values
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phoneno = document.getElementById("phoneno").value;
//     var zipcode = document.getElementById("zipcode").value;

//     // Validate name
//     if (name.trim() === "") {
//         alert("Please enter your name.");
//         return;
//     }

//     // Validate email
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     // Validate phone number
//     var phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
//     if (!phoneRegex.test(phoneno)) {
//         alert("Please enter a valid 10-digit phone number.");
//         return;
//     }

//     // Validate zipcode
//     var zipcodeRegex = /^\d{5}$/; // Assumes a 5-digit zipcode
//     if (!zipcodeRegex.test(zipcode)) {
//         alert("Please enter a valid 5-digit zipcode.");
//         return;
//     }

//     // Create form data object
//     var saveForm = {
//         name: name,
//         email: email,
//         phoneno: phoneno,
//         zipcode: zipcode
//     };

//     console.log(JSON.stringify(saveForm));

//     // Send form data using fetch
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     headers.append("Accept", "application/json");

//     fetch("http://localhost:8080/add-ctaform", {
//         method: "POST",
//         body: JSON.stringify(saveForm),
//         headers: headers
//     })
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(error => console.error("Error:", error));

//     // Display success message
//     alert("Message sent successfully!");
// }
