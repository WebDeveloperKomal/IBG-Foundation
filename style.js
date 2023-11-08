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