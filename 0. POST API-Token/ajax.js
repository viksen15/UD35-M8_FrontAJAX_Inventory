addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById("boton1");
    ob.addEventListener('click',presionBoton,false);
}
function presionBoton(){
    postToken("InventoryAdmin@abc.com","$admin@2017");
}

function postToken(email,pass){
    $.ajax({
        url: "https://localhost:44311/api/token",
        method: 'POST',
        dataType: 'json',
            headers: {
                'Accept': 'application/json',
            },
            contentType: 'application/json',
            data: JSON.stringify({
                'Email': email,
                'Password': pass
                 }),

            success: function (data, textStatus, jqXHR){
                alert("El resultado se muestra por consola!");
                console.log(data);
            },
            error: function(error){
                console.log(error);
            }
    });
}