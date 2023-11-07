function saveCampaignForm() {

    var saveCampaignForm = {

        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value

    }

    console.log(JSON.stringify(saveCampaignForm));

    if (saveCampaignForm != null) {
        alert("message send successfully");
    }


    let headers = new Headers();
    headers.append('Contenr-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/campaign-form", {
        method: 'POST',
        body: JSON.stringify(saveCampaignForm),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));

}