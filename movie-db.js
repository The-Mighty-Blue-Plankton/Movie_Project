var url = 'https://sedate-sharp-euphonium.glitch.me/movies'

// GET ALL MOVIES
fetch(url)
    .then( response => response.json())
    .then( movieData => displayCards(movieData))
    .then(() => {
        $('.delete-button').click(() => {
            handleDelete();
        })
    });



//HANDLE DELETE BUTTON
function handleDelete() {

        alert("delete btn clicked");
    console.log(this);
    console.log($(this))

}
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

$('myAnchor')
function eForm(input) {
    input.preventDefault();
    // let fieldValue =



    alert('worked')
    // $(inputfield).val()
    // input.preventDefault();
    console.log(input);

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
    console.log(data);
    data.forEach(function (cardInfo) {
    // && cardInfo.plot && cardInfo.poster && cardInfo.id
        if (cardInfo.title !== undefined ) {
            $('.card').append(` 
<!--            <div id="cards">-->
                <div class="card">
                    <img src="${cardInfo.poster}"  alt="...">
                        <div>
                            <h5 id="${cardInfo.title}">${cardInfo.title}</h5>
                            <p id="${cardInfo.plot}">${cardInfo.plot}</p>
                              <button id="${cardInfo.id}" data-id='${cardInfo.id}'>Edit Movie</button>
                              <button class="delete-button">Delete Movie</button>
                        </div>
                </div>
<!--            </div> &lt;!&ndash;this is the card (actual end)&ndash;&gt;-->
`)
        }
        // console.log(cardInfo)

    })
};

function editCards(data) {
    var titleStorage = []
    data.forEach(function (cardInfo) {
        if (cardInfo.title !== undefined) {
            $('.editCard').append(`
                <div id="cards">
                <div className="card">
                    <img src="${cardInfo.poster}" id="image-top" alt="...">
                        <div>
                            <form>
                                <div class="form-group">
                                    <div class="mb-3">
                                        <label for="titleField" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="titleField" data-id="edit" placeholder="${cardInfo.title}">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <p id="plot"><div><label for="The-plot-thickens" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="The-plot-thickens" placeholder="${cardInfo.plot}"></div></p>
<!--                                      <button onclick="return eForm('yep').observe('click', function(event) {Event.stop(event);})" -->
                                      <button
                                      type="submit"
                                      class="btn btn-primary edit">Edit Movie</button>
                                      
                 
<!--     
                                </div>
                                =============================================                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                $(“$titleField).val(dataId)
                                let dataId = $(this).data(“id”)
                                ==============================================
                                
                            </form>
                        </div>
                </div>
                </div>
            </div> this is the card (actual end)-->
`)
        }
        // console.log(cardInfo)
        //                     titleStorage += document .querySelector('#titleField')
    })
}
// document.querySelector('#edit').addEventListener('click', function (){
//     const docId = document.querySelector('[id="edit"]').textContent;
//     console.log(docId)
// })