async function checkIfSeen(event) {
    event.preventDefault();
    
        /*
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/users/have-seen`, {
        method: 'GET',
    });

    console.log(response.status);
    console.log(response);

    if (response.status === 404) {
        if(confirm('Have you seen this movie')) {
            console.log('yes was clicked');
            
            const newResponse = fetch(`/api/users/have-seen`, {
                method: 'POST',
                body: JSON.stringify({
                    post_id,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(newResponse.ok) {
                console.log('Im crying');
            } else {
                alert(newResponse.statusText);
            }

        } else {
            document.location.replace('/');
        }
    } else if (response.ok) {

    } else {
        alert(response.statusText);
    }
   */

    if(confirm('Have you seen this movie?')) {
        
    } else {
        document.location.replace('/');
    }
 
};

document.addEventListener("DOMContentLoaded", checkIfSeen);
