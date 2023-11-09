document.querySelector('#boton_alqui').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

xhttp.open('GET', '..js/alquileres.json', true);


xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        
        let res = document.querySelector(".datos");
        let res2 = document.querySelector(".items");
        
        for(clave in datos){
            var arreglo = [];
        for(item in datos[clave]){
            arreglo.push(item);
            res2.innerHTML += `
            <th>${item.imagen}<th>
            <th>${item.imagen}<th>
            <th>${item.imagen}<th>
            `;
        }
    }
    res.innerHTML = '';
    for(let item of datos){
        res2.innerHTML += `
        <td>${item.imagen}<td>
        <td>${item.direccion}<td>
        <td>${item.detalles}<td>

        `;
    }
}
}
}

function search_alquileres() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('items');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
