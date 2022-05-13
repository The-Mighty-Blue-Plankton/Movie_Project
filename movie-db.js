var url = 'https://sedate-sharp-euphonium.glitch.me/movies'
fetch(url).then( response => {
    response.json().then( movieData => {
        displayCards(movieData)
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

    fetch(url).then( response => {
        response.json().then( editmovieData => {
            var eTitle = editmovieData.filter(function(n){
                return n & 2 === 0;
            })
            console.log(eTitle)
        });
    })
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

