addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    alert("El resultado es mostrado en consola!")
    getProducts();
}

function getProducts(){
    $.ajax({
        url: "https://localhost:44311/api/Products",
        method: 'GET',
        dataType: 'json',
            headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIxYWE5YWJmNi1jMWU0LTQ2NWYtODE2YS0zMGI2ZGM3NTRhNjYiLCJpYXQiOiIyMS8wMi8yMDIxIDE2OjQ5OjM4IiwiSWQiOiIxIiwiRmlyc3ROYW1lIjoiSW52ZW50b3J5IiwiTGFzdE5hbWUiOiJBZG1pbiIsIlVzZXJOYW1lIjoiSW52ZW50b3J5QWRtaW4iLCJFbWFpbCI6IkludmVudG9yeUFkbWluQGFiYy5jb20iLCJleHAiOjE2MTQwMTI1NzksImlzcyI6IkludmVudG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZW50b3J5U2VydmljZVBvc3RtYW5DbGllbnQifQ.h8mbdcR9dFSIXqiXeFvuqpH_KwmeV5yNGcRCyE0urTQ'
        },
        contentType: 'application/x-www-form-urlencoded',
            success: function (data) {
                console.log(JSON.stringify(data));
            },
            error: function (error) {
                console.log(error);
            }
    });
}