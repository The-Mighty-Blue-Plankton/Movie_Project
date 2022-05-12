// On page load:
//
//     Display a "loading..." message
// Make an AJAX request to get a listing of all the movies
    // Todo: Write a function to get all movies and display all movies
            // function to display movies {
                // fetch(url).then(response.json()).then(movies => { write a function to display movies and put here};

            // }
// When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives
// Allow users to add new movies
//
// Create a form for adding a new movie that has fields for the movie's title and rating
// When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

// Allow users to edit existing movies (part of CRUD)
// Give users the option to edit an existing movie
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

// Delete movies (part of CRUD)
// Each movie should have a "delete" button
// When this button is clicked, your javascript should send a DELETE request


var url = 'https://codeup-json-server.glitch.me/movies'
fetch(url).then( response => {response.json().then(  => {users.forEach( userObj  => {// do something with the username login
            // console.log(userObj.id[255]);
            if (userObj.id === 16) {console.log(userObj)}
        });
    });
});



