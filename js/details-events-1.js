document.querySelector('.details-header-button-back').addEventListener('click', function() {
    window.location.href = '../pages/home.html';
});

document.querySelector('.Extra-Content').addEventListener('click', function() {
    // Buscar el párrafo adicional si ya existe
    let existingParagraph = document.querySelector('.additional-text');
    
    if (existingParagraph) {
        // Si el párrafo existe, eliminarlo
        existingParagraph.remove();
    } else {
        // Si no existe, crear un nuevo elemento de párrafo
        var newParagraph = document.createElement('p');
        newParagraph.classList.add('additional-text'); // Añadir una clase para identificarlo
        newParagraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque autem ipsam ex, ratione quo distinctio velit, quia sunt amet, iusto adipisci aut incidunt rem? Laborum possimus magnam quae. Dolor, magni.";
        
        // Agregar el nuevo párrafo después del span
        this.parentElement.appendChild(newParagraph);
    }
});
