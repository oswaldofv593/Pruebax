document.getElementById('chat-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('user-input').value;
    const responseContainer = document.getElementById('response-container');
    
    responseContainer.innerHTML = 'Cargando...';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '21416cd17cmsh599e0ebb940af63p105cafjsncb88cafeedb0',
            'x-rapidapi-host': 'open-ai21.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://open-ai21.p.rapidapi.com/?query=${encodeURIComponent(userInput)}`, options);
        const data = await response.json();
        
        responseContainer.innerHTML = data.response || 'No se pudo obtener respuesta...';
    } catch (error) {
        responseContainer.innerHTML = 'Error al comunicarse con la API.';
        console.error(error);
    }
});
