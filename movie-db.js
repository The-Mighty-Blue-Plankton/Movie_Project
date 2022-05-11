var url = 'https://codeup-json-server.glitch.me/movies'
fetch(url).then( response => {
    response.json().then( users => {
        users.forEach( userObj  => {
            // do something with the username login
            // console.log(userObj.id[255]);
            if (userObj.id === 16) {console.log(userObj)}
        });
    });
});



