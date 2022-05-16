$(document).ready(function () {
    displayMovies();

// ************************************************************************************
// DISPLAY MOVIES *********************************************************************
// ************************************************************************************
//     fetch('https://sedate-sharp-euphonium.glitch.me/movies').then(response => response.json())
//
//         .then(displayMovies(data));

// ************************************************************************************
// ADD A MOVIE ************************************************************************
// ************************************************************************************

//EVENT LISTENER TO CALL ADDMOVIE FUNCTION
    document.getElementById("add-movie").addEventListener("click", function (event) {
        addMovie(event)
    })

    function addMovie(e) {
        e.preventDefault();
        var data = {
            title: document.getElementById('txtTitle').value,
            plot: document.getElementById('movie-plot').value
        }


        fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(function () {
                alert('Your movie is now part of our movie list');
                displayMovies();
            })

    }

// ************************************************************************************
// EDIT A MOVIE ************************************************************************
// ************************************************************************************
//     EVENT LISTENER TO CALL EDIT A MOVIE FUNCTION


//
//     function editMovie(movieId) {
//         // e.preventDefault();
//
//         var data = {
//             title: document.getElementById('add-movie').value,
//             plot: document.getElementById('edit-movie-plot').value
//         }
// //
//         fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(data)
//         })
//             .then(response => response.json())
//             .then(function () {
//                 alert('Your movie is now updated');
//                 displayMovies();
//             })
//     }

// ************************************************************************************
// DELETE A MOVIE *********************************************************************
// ************************************************************************************
    function deleteToDo(e, id) {
        fetch('https://sedate-sharp-euphonium.glitch.me/movies/' + id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(function () {
                alert(`Your has been deleted successfully`);
                displayMovies();
            })
    }

// ************************************************************************************
// DISPLAY MOVIES *********************************************************************
// ************************************************************************************
    function displayMovies() {
        fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(function (response) {
                let data = response;
                let card = document.getElementById('card');
                card.innerHTML = '';
                console.log(data)
                for (var i = 0; i < data.length; i++) {
                    var createCard = document.createElement('tr');
                    var addTitle = document.createElement('td');
                    addTitle.innerText = data[i].title;
                    // ADD PLOT START
                    var addPlot = document.createElement('td');
                    addPlot.innerText = data[i].plot;
                    // ADD PLOT END
                    var createDeleteButton = document.createElement('td');
                    var useDeleteButton = document.createElement('a');
                    useDeleteButton.href = "#"
                    useDeleteButton.innerText = "delete movie";
                    var dataId = data[i].id;
                    useDeleteButton.onclick = (function (dataId) {
                        return function () {
                            return deleteToDo(Event, dataId);
                        }
                    }(dataId))
                    // ADD EDIT A TAG
                    var createEditButton = document.createElement('td');
                    var useEditIcon = document.createElement('a');
                    useEditIcon.href = "#"
                    useEditIcon.id = dataId;
                    useEditIcon.innerText = "edit movie";
                    useEditIcon.style.color = 'red'

                    // var editTitle = data[i].title;
                    // var editPlot = data[i].plot;
                    // console.log('edit title', editTitle, editPlot)
                    useEditIcon.onclick = (function (dataId) {
                        return function () {
                            return displayEditMovie(Event, dataId);
                        }
                    }(dataId))


                    // ADD EDIT A TAG
                    card.appendChild(createCard);
                    createCard.appendChild(addTitle);
                    createCard.appendChild(addPlot);
                    createCard.appendChild(createDeleteButton);
                    createDeleteButton.appendChild(useDeleteButton);
                    createEditButton.appendChild(useEditIcon);
                    createCard.appendChild(createEditButton)

                }

            })

    }

// =========================================

    function displayEditMovie(e, movieId) {
        // e.preventDefault()
        // STEP 1: PUT ID INTO A VAR
        // var editMovieId = document.getElementById('id').value

        // console.log('editMovie id',  editMovieId)

// STEP 2: FETCH BASED ON THE ID
        fetch('https://sedate-sharp-euphonium.glitch.me/movies/' + movieId, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(function (response) {
                let data = response
                if (data.id == movieId) {
                    var title = data.title;
                    var plot = data.plot;

                    $('#editTitle').attr('placeholder', title);
                    $('#edit-movie-plot').attr('placeholder', plot);
                    // $('#insertButtonId').attr('id', movieId);
                }
            })
    }

    // console.log($('#insertButtonId').attr('id'));

    // STEP 3: SELECT BUTTON BY ID AND DO AN ONCLICK


    $(document).on('click', '.editButton', function (e) {
        e.preventDefault();
        editMovieUpdate();

    });

    // var submitMovie = document.getElementsByClassName('editButton')
    // submitMovie.onclick = ((e) =>

    function editMovieUpdate() {
        var editMovieVals =
            {
                title: document.getElementById('add-movie').value,
                plot: document.getElementById('edit-movie-plot').value
            }
        var uri = $('.editButton').attr('id')
        // STEP 5: DO A PUT WITH USERS UPDATED VALUES
        fetch('https://sedate-sharp-euphonium.glitch.me/movies/' + uri, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editMovieVals)
        })
            .then(response => response.json())
            .then(function () {
                alert('Your movie is updated');
            })
    }
})






// // STEP 4: GRAB THE VALUES FROM THE INPUT FIELDS (USER UPDATES VALUES)
//
//     var newMovieVals =
//         {
//             title: document.getElementById('add-movie').value,
//             plot: document.getElementById('edit-movie-plot').value
//         }
//
// // STEP 5: DO A PUT WITH USERS UPDATED VALUES
//     fetch('https://sedate-sharp-euphonium.glitch.me/movies/' + editMovieId, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(newMovieVals)
//     })
//         .then(response => response.json())
//         .then(function () {
//             alert('Your movie is updated');
//             displayMovies();
//         })

// =========================================






        // var dataOG = fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
        //     // method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(movieId)
        // })

        // var dataOG = fetch('https://sedate-sharp-euphonium.glitch.me/movies').then(response => response.json()).then(response => response.forEach().filter(n => n.id === movieId));
        // console.log(dataOG)





        // var title = dataOG.title;
        // var plot = dataOG.plot;



    // document.getElementById("edit-movie-plot").addEventListener("click", function (event) {
    //     editMovie(event)
    // })

