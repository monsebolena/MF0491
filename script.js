// Parte 2: Función para mostrar el saludo al hacer clic en el botón
function saludar() {
    alert('¡Hola! Bienvenido a mi página web.');
}

// Parte 2: Manejo del formulario para mostrar los datos
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Muestra los datos ingresados debajo del formulario
    document.getElementById('formData').innerHTML = `<p>Nombre: ${name}</p><p>Correo: ${email}</p>`;
});

// Parte 3: Función para mostrar u ocultar la lista de actores
function toggleActorList() {
    const actorList = document.getElementById('actor_list');
    
    // Verifica si el div está oculto o visible
    if (actorList.style.display === 'none' || actorList.style.display === '') {
        actorList.style.display = 'block';
    } else {
        actorList.style.display = 'none';
    }
}

// Parte 4: Función para hacer la solicitud AJAX y mostrar la lista de países
function fetchCountries() {
    const xhr = new XMLHttpRequest();
    
    // Inicializa la solicitud
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    // Cuando la solicitud se complete, se maneja la respuesta
    xhr.onload = function() {
        if (xhr.status === 200) {
            const countries = JSON.parse(xhr.responseText); // Parsear la respuesta JSON
            const countriesList = document.getElementById('countriesList');
            countriesList.innerHTML = '<h3>Lista de Países:</h3><ul>';
            
            // Itera sobre los países y los muestra en la página
            countries.forEach(country => {
                countriesList.innerHTML += `<li>${country.name.common}</li>`;
            });
            countriesList.innerHTML += '</ul>';
        } else {
            console.error('Error al cargar los países');
        }
    };

    // Enviar la solicitud
    xhr.send();
}
