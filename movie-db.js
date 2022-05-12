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


var url = 'https://sedate-sharp-euphonium.glitch.me/movies'
fetch(url).then( response => {
    response.json().then( movieData => {
        // movieData.forEach( userObj  => {
        //     // do something with the username login
        //     // console.log(userObj.id[255]);
        //     if(userObj.title) {console.log(userObj.title)}
        //     if (userObj.id === 16) {console.log(userObj)}
        //     movieTitle(movieData)
        displayCard(movieData)
        });
    });
// });



// function movieTitle(data){
//     data.forEach( element  => {
//     if(element.title) {console.log(element.title)}
//     if (element.id === 16) {console.log(element)}
//     // console.log('data.title',data.title);
// })
// }


function displayCard(data) {
    data.forEach(function (cardInfo) {
    // console.log(cardInfo)
        if (cardInfo.title !== undefined) {
            $('.card').append(` <div className="col"> <!--this is the card (actual start)-->
                <div className="card">
                    <img src="${cardInfo.poster}" className="card-img-top" alt="...">
                        <div className="card-body">
                            <h5 className="card-title">${cardInfo.title}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div> <!--this is the card (actual end)-->
          <button className = "edit">Edit Movie</button>
          <button className = "delete">Delete Movie</button>
`)
        }
    })
};

// A $( document ).ready() block.
$( document ).ready(function() {


});
$('.btn').on('click', (e)=>{
    alert('submit butn clicked')
    e.preventDefault()
        alert('submit butn clicked')
    let userVal = $('#titleField').val();
        console.log(userVal);
    eForm(userVal);
    }
    // eForm($('#formGroupExampleInput').val())
    // let editTitle = $('#formGroupExampleInput').val()
)

// fetch(url).then( response => {
//     response.json().then( editmovieData => {
//       var eTitle = editmovieData.filter(function(n){
//           return n & 2 === 0;
//         })
//         console.log(eTitle)
//     });
// })
function eForm(input) {
    console.log(input)
    fetch(url).then( response => {
        response.json().then( editmovieData => {
            var eTitle = editmovieData.filter(function(n){
                return n & 2 === 0;
            })
            console.log(eTitle)
        });
    })
}





