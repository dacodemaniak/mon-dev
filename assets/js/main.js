const headers = new Headers()
headers.append('Content-Type', 'application/json');

(() => {
    console.log(`Hi all, i'm working`)

    // Well, load the template till app load
    /*
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
    */

    // Contact form management
    const form = document.getElementById("contact-form");
    form.addEventListener('submit', (e) => {
        let name = document.getElementsByName("user_name");
        alert(`Merci ${name[0].value} d'avoir contribué à notre formation GIT.`);
        e.preventDefault();
        console.log(e);
    });
})()