// var delayInMilliseconds = 5000; //1 second
// $(window).on('load', function () {
//     $('#loading').hide();
// })
// setTimeout(function() {
//     //your code to be executed after 1 second
// }, delayInMilliseconds);


// var endt = 3000; //20seconds 20 * 1000 milliseconds.
//
// function doProgress(){
//     clearInterval(endt);  //always clear the interval before starting.
//     $('#spinner').show();
//     $('#endDiv').hide();
// }

// function endProgress(){
//     $('#loopDiv').hide();
//     $('#endDiv').show();
//     setInterval(function(){
//         $('#endDiv').hide();
//     }, endt);  //hide the div after 20seconds
// }
var url = 'https://codeup-json-server.glitch.me/movies'
fetch(url).then( response => {
    response.json().then( users => {
        users.forEach( userObj  => {
            // do something with the username login
            // console.log(userObj.id[255]);
            if(userObj.title) {console.log(userObj.title)}
            // if (userObj.id === 16) {console.log(userObj)}
        });
    });
});



