function saveCareerForm() {

    var saveCareerForm = {

        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        position: document.getElementById('position').value,
        message: document.getElementById('message').value
    }

    console.log(JSON.stringify(saveCareerForm));

    if (saveCareerForm != null) {
        alert("message send successfully!")

    }


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/add-careerform", {
        method: 'POST',
        body: JSON.stringify(saveCareerForm),
        headers: headers,
    })


        .then(response => response.json())
        .then(json => console.log(json))
        .then(error => console.error('Error:', error));
}