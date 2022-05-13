var url = 'https://sedate-sharp-euphonium.glitch.me/movies'
fetch(url).then( response => {
    response.json().then( movieData => {
        displayCards(movieData)
        editCards(movieData)
    });
});


// DELETE A MOVIE START
$('.delete').on("click",  function (e){
    e.preventDefault();
    alert('delete a movie')
    let id = document.querySelector('.delete').textContent;
    console.log('movie start id', id)
})
// DELETE A MOVIE END


// ADD A MOVIE START
$('.btn').on('click', (e)=>{
        alert('test')
        e.preventDefault()

        let userVal = $('#titleField').val();
        // console.log(userVal);
        eForm(userVal);
    }
)
function eForm(input) {
    console.log(input)

    // post template adapted from ...
    // https://java.codeup.com/javascript-ii/RESTful-api/
    const title = String(input);
    const url = 'https://sedate-sharp-euphonium.glitch.me/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(title),
    };
    fetch(url, options)
        .then(/* post was created successfully */)
        .catch(/* handle errors */);
    // fetch(url).then( response => {
    //     response.json().then( editmovieData => {
    //         var eTitle = editmovieData.filter(function(n){
    //             return n & 2 === 0;
    //         })
    //         console.log(eTitle)
    //     });
}
// ADD A MOVIE END

// ********************************************************************************************************************
// FUNCTIONS **********************************************************************************************************
// ********************************************************************************************************************
function displayCards(data) {
    data.forEach(function (cardInfo) {
        if (cardInfo.title !== undefined) {
            $('.card').append(` 
                <div id="cards">
                <div className="card">
                    <img src="${cardInfo.poster}" id="image-top" alt="...">
                        <div>
                            <h5 id="title">${cardInfo.title}</h5>
                            <p id="plot">${cardInfo.plot}</p>
                               <div ></div>
                              <button className = "edit">Edit Movie</button>
                              <button className = "delete">Delete Movie ${cardInfo.id}</button>
                        </div>
                </div>
                </div>
            </div> <!--this is the card (actual end)-->
`)
        }
        // console.log(cardInfo)

    })
};

function editCards(data) {
    data.forEach(function (cardInfo) {
        if (cardInfo.title !== undefined) {
            $('.editCard').append(` 
                <div id="cards">
                <div className="card">
                    <img src="${cardInfo.poster}" id="image-top" alt="...">
                        <div>
                            <div class="mb-3">
                                <label for="titleField" class="form-label">Title</label>
                                <input type="text" class="form-control" id="titleField" placeholder="${cardInfo.title}">
                            </div>
<!--                            <input placeholder="" id="title">${cardInfo.title}</input>-->
                            <p id="plot"><div><label for="The-plot-thickens" class="form-label">Title</label>
                                <input type="text" class="form-control" id="The-plot-thickens" placeholder="${cardInfo.plot}"></div></p>
                               
                              <button className = "edit">Edit Movie</button>
                              <button className = "delete">Delete Movie ${cardInfo.id}</button>
                        </div>
                </div>
                </div>
            </div> <!--this is the card (actual end)-->
`)
        }
        // console.log(cardInfo)

    })
<<<<<<< HEAD
};
=======
};

>>>>>>> 76a39ddf83220d4f10052aca5842fad72d186035
