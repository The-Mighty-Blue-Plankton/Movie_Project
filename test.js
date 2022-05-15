$(document).ready(function (){


// ************************************************************************************
// DISPLAY MOVIES *********************************************************************
// ************************************************************************************
    fetch('https://sedate-sharp-euphonium.glitch.me/movies').then( response => response.json())
        .then(displayMovies);

// ************************************************************************************
// ADD A MOVIE ************************************************************************
// ************************************************************************************

//EVENT LISTENER TO CALL ADDMOVIE FUNCTION
    document.getElementById("add-movie").addEventListener("click", function (event) {
        addMovie(event)
    })

    function addMovie(e){
        e.preventDefault();
        var data = {title: document.getElementById('txtTitle').value}
        fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)})
            .then(response=>response.json())
            .then(function(){
                alert('Your movie is now part of our movie list');
                displayMovies(e);
            })
    }

// ************************************************************************************
// DELETE A MOVIE *********************************************************************
// ************************************************************************************
    function deleteToDo(e, id){
        fetch('https://sedate-sharp-euphonium.glitch.me/movies/'+id, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}})
            .then(response=>response.json())
            .then(function(){
                alert(`Your has been deleted successfully`);
                displayMovies(e);
            })
    }

// ************************************************************************************
// DISPLAY MOVIES *********************************************************************
// ************************************************************************************
    function displayMovies(){
        fetch('https://sedate-sharp-euphonium.glitch.me/movies', {
            method: 'GET',
            headers: {'Content-Type':'application/json'}})
            .then(response=>response.json())
            .then(function(response){
                let data = response;
                let card = document.getElementById('card');
                card.innerHTML = '';
                console.log(data)
                for(var i=0; i<data.length; i++){
                    var createCard = document.createElement('tr');
                    var addTitle = document.createElement('td');
                    addTitle.innerText = data[i].title;
                    // ADD PLOT START
                    var addPlot = document.createElement('td');
                    addPlot.innerText = data[i].plot;
                    // ADD PLOT END
                    // ADD IMAGE

                    // ADD IMAGE

                    var createDeleteButton = document.createElement('td');
                    var useDeleteButton = document.createElement('a');
                    useDeleteButton.href = "#"
                    useDeleteButton.innerText = "delete movie";
                    var id = data[i].id;
                    useDeleteButton.onclick = (function(id){return function(){return deleteToDo(Event,id);}}(id))
                    card.appendChild(createCard);
                    createCard.appendChild(addTitle);
                    createCard.appendChild(addPlot);
                    createCard.appendChild(createDeleteButton);
                    createDeleteButton.appendChild(useDeleteButton);

                }
            })
    }



})