function Data_Login(username, password) {
    let data = {
        amar: "1234",

    };
    return data[username] === password;
}

$('.error').hide();

function test() {

    $('.error').hide();

}

function go_to_home() {

    open('home.html');
}


function addNumberInInput(number) {
    $('#input-password').val($('#input-password').val() + number);
}

$('.b').click(event => {

    const id = event.target.id;
    const number = id.split('b')[1];
    addNumberInInput(number);
})


function onload() {

    if (localStorage.getItem('username')) {

        return true + go_to_home();
    }
}


function login() {

    const username = document.querySelector('#input-username').value;
    const password = document.querySelector('#input-password').value;

    if (!Data_Login(username, password)) {

        $('.error').show();

    } else {

        $('.error').hide();

        localStorage.setItem('username', username);

        return true + go_to_home();

    }



}
$('#login').click(login)


