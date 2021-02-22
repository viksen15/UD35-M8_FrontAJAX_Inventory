addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    putProduct(5,"Producto 5 Actualizado", "Categoria VSV", "Azul", 12, 2200);
}

function putProduct(ID,name,category,color,price,quantity){
    $.ajax({
        url: "https://localhost:44311/api/products/5",
        method: 'PUT',
        dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIxOTEwYTMyMi02MTRhLTRjNTItOWVjMC1mMDNiMmEwNTRjYzEiLCJpYXQiOiIyMi8wMi8yMDIxIDEwOjQ1OjM3IiwiSWQiOiIxIiwiRmlyc3ROYW1lIjoiSW52ZW50b3J5IiwiTGFzdE5hbWUiOiJBZG1pbiIsIlVzZXJOYW1lIjoiSW52ZW50b3J5QWRtaW4iLCJFbWFpbCI6IkludmVudG9yeUFkbWluQGFiYy5jb20iLCJleHAiOjE2MTQwNzcxMzcsImlzcyI6IkludmVudG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZW50b3J5U2VydmljZVBvc3RtYW5DbGllbnQifQ.ZRDCaOnoByTC0kXuJtpARnPoKY2J6vteWM4K7WHtje0'
            },
            contentType: 'application/json',

            data: JSON.stringify({
                'ProductId': parseInt(ID),
                'Name': name,
                'Category': category,
                'Color': color,
                'UnitPrice': parseInt(price),
                'AvailableQuantity': parseInt(quantity)
                 }),

            success: function (data, textStatus, jqXHR){
                alert("El producto ha sido actualizado!");
            },
            error: function(error){
                console.log(error);
            }
    });
}