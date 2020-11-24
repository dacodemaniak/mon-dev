const headers = new Headers()
headers.append('Content-Type:', 'application/json')

(() => {
    console.log(`Hi all, i'm working`)

    // Well, load the template till app load
    fetch (
        `https://localhost/api/v2/loadOfThings`,
        {
            method: 'get',
            headers: {

            }
        }
    ).then ((result) => result.json())
    .then((data) => {
        
    })

    // Contact form
    const form = document.getElementById("contact-form");
})()