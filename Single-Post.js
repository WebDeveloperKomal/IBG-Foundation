function saveSinglePostForm() {

    var saveSinglePostForm = {

        comment: document.getElementById('comment').value,
        author: document.getElementById('author').value,
        email: document.getElementById('email').value,
        url: document.getElementById('url').value
    }

    console.log(JSON.stringify(saveSinglePostForm));

    if (saveSinglePostForm != null) {
        alert("message send successfully");
    }


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/add-singleform", {
        method: 'POST',
        body: JSON.stringify(saveSinglePostForm),
        headers: headers,
    })


        .then(response => response.json())
        .then(json => console.log(json))
        .then(error => console.error('Error:', error));
}
