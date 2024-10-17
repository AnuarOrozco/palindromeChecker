// Función para verificar si una palabra es un palíndromo
async function checkPalindrome() {
    // Obtener la palabra del input
    const wordInput = document.getElementById('word-input');
    const word = wordInput.value.trim();

    // Comprobar que el input no esté vacío
    if (!word) {
        alert('Please enter a word!');
        return;
    }

    // Realizar la solicitud POST al backend
    try {
        const response = await fetch('http://localhost:8080/api/palindrome', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word: word }), // Enviar la palabra en el cuerpo de la solicitud
        });

        // Manejar la respuesta del backend
        if (response.ok) {
            const result = await response.json();
            const resultDisplay = document.getElementById('result');

            // Mostrar el resultado
            if (result.isPalindrome) {
                resultDisplay.textContent = `Is Palindrome!`;
                resultDisplay.style.color = 'green'; // Cambiar color a verde
            } else {
                resultDisplay.textContent = `Is NOT Palindrome!`;
                resultDisplay.style.color = 'red'; // Cambiar color a rojo
            }

            // Mostrar la palabra ingresada
            const wordDisplay = document.getElementById('word-display');
            wordDisplay.textContent = `The word: ${word}`;
        } else {
            alert('Error: Unable to check palindrome.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error: Unable to check palindrome.');
    }
}

// Asignar la función al botón de verificación
document.getElementById('check-button').addEventListener('click', checkPalindrome);


