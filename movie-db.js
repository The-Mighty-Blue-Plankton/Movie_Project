


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



//
    function editMovie(movieId) {
        // e.preventDefault();

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
        // var dataOG = fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
        //     // method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(movieId)
        // })

        // var dataOG = fetch('https://sedate-sharp-euphonium.glitch.me/movies').then(response => response.json()).then(response => response.forEach().filter(n => n.id === movieId));
        // console.log(dataOG)





        // var title = dataOG.title;
        // var plot = dataOG.plot;

        var editMovieForm = ``
        editMovieForm += '<div class="modal">';
        editMovieForm += '<h3>EDIT A MOVIE</h3>';
        editMovieForm += '<input class="form-control" id="editTitle" name="title" type="text" placeholder= ' + title + ' />';
        editMovieForm += '<input id="edit-movie-plot" type="text" class="form-plot" placeholder= ' + plot + ' />;'
        editMovieForm += '<button id= '+ movieId +' class="btn">submit movie</button>';
        editMovieForm += '</div>'

        $('.modal-container-edit-movie').html(editMovieForm);
    }
    // document.getElementById("edit-movie-plot").addEventListener("click", function (event) {
    //     editMovie(event)
    // })
})
