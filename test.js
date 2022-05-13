var url = 'https://sedate-sharp-euphonium.glitch.me/movies'
fetch(url).then( response => {
    response.json().then( movieData => {
        displayCards(movieData)
    });
});










// ********************************************************************************************************************
// FUNCTIONS **********************************************************************************************************
// ********************************************************************************************************************
function displayCards(data) {
    data.forEach(function (cardInfo) {
        if (cardInfo.title !== undefined) {
            $('.card').append(` 
                <div id="cards">
                <div class="card">
                    <img src="${cardInfo.poster}" id="image-top" alt="...">
                        <div>
                            <h5 id="title">${cardInfo.title}</h5>
                            <p id="plot"></p>
                               <div></div>
                              <button id="edit" data-id='${cardInfo.id}'>Edit Movie</button>
<!--                              <button class = "delete">Delete Movie </button>-->
                        </div>
                </div>
                </div>
            </div> <!--this is the card (actual end)-->
`)
        }
        document.querySelector('#edit').addEventListener('click', function (){
            const docId = document.querySelector('[id="edit"]').valueOf();
            console.log(docId)
        })

    })
};