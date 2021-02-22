addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById("boton1");
    ob.addEventListener('click',presionBoton,false);
}
function presionBoton(){
    postProduct("Producto 6", "Categoria VSV", "Oro", 12, 300);
}

function postProduct(name,category,color,price,quantity){
    $.ajax({
        url: "https://localhost:44311/api/products",
        method: 'POST',
        dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIxOTEwYTMyMi02MTRhLTRjNTItOWVjMC1mMDNiMmEwNTRjYzEiLCJpYXQiOiIyMi8wMi8yMDIxIDEwOjQ1OjM3IiwiSWQiOiIxIiwiRmlyc3ROYW1lIjoiSW52ZW50b3J5IiwiTGFzdE5hbWUiOiJBZG1pbiIsIlVzZXJOYW1lIjoiSW52ZW50b3J5QWRtaW4iLCJFbWFpbCI6IkludmVudG9yeUFkbWluQGFiYy5jb20iLCJleHAiOjE2MTQwNzcxMzcsImlzcyI6IkludmVudG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZW50b3J5U2VydmljZVBvc3RtYW5DbGllbnQifQ.ZRDCaOnoByTC0kXuJtpARnPoKY2J6vteWM4K7WHtje0'
            },
            contentType: 'application/json',

            data: JSON.stringify({
                'Name': name,
                'Category': category,
                'Color': color,
                'UnitPrice': price,
                'AvailableQuantity': quantity
                 }),

            success: function (data, textStatus, jqXHR){
                alert("El producto ha sido añadido a Inventory!");
            },
            error: function(error){
                console.log(error);
            }
    });
}