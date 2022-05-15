var $ = document.createElement('$');
$.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
$.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild($);

$(document).ready(function () {

// ************************************************************************************
// DISPLAY MOVIES *********************************************************************
// ************************************************************************************
    fetch('https://sedate-sharp-euphonium.glitch.me/movies').then(response => response.json())

        .then(displayMovies);

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
                // displayMovies(e);
            })

    }

// ************************************************************************************
// EDIT A MOVIE ************************************************************************
// ************************************************************************************
//     EVENT LISTENER TO CALL EDIT A MOVIE FUNCTION
    document.getElementById("edit-movie-plot").addEventListener("click", function (event) {
        editMovie(event)
    })


//
    function editMovie(e, movieId) {
        e.preventDefault();

        var data = {
            title: document.getElementById('add-movie').value,
            plot: document.getElementById('edit-movie-plot').value
        }
//
        fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(function () {
                alert('Your movie is now updated');
                displayMovies(data);
            })
    }

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

    function displayEditMovie(e, movieId) {
        e.preventDefault()

        var data = fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())


        var editMovieForm = ``
        editMovieForm += `<div className="modal">`;
        editMovieForm += '<h3>EDIT A MOVIE</h3>';
        editMovieForm += <input className="form-control" id="editTitle" name="title" type="text" placeholder= "$(data.title)"/>;
        editMovieForm += '<input id="edit-movie-plot" type="text" className="form-plot" placeholder="Type the plot here"/>';
        editMovieForm += '<button id="submit-edit-movie" className="btn btn-primary">submit movie</button>';
        editMovieForm += '</div>';


    }
})
