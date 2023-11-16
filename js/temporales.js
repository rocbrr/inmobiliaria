document.addEventListener('DOMContentLoaded', function () {
    cargarYMostrarDatos();
});

function cargarYMostrarDatos() {
   
    const xtp = new XMLHttpRequest();

   
    xtp.open('GET', '../js/temporales.json', true);

    xtp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            const datos = JSON.parse(this.responseText);

            
            mostrarDatos(datos);
        }
    };
    xtp.send();
}

function mostrarDatos(datos) {
    
    const resultadosDiv = document.getElementById('resultados');

    resultadosDiv.innerHTML = '';

    for (const item of datos) {
        resultadosDiv.innerHTML += `
            <div>
                <img src="${item.imagen}" alt="Imagen">
                <p>Dirección: ${item.direccion}</p>
                <p>Precio: $${item.precio.toFixed(2)}</p>
                <p>Detalles: ${item.detalles}</p>
            </div>
            <hr>
        `;
    }
}