function handleRedirect(event) {

    event.preventDefault();

    const rollNumber = document.getElementById('rollNumberInput').value.trim();
    const errorMessage = document.getElementById('error-message');

    errorMessage.style.display = 'none';

    switch (rollNumber) {
        case '3905':
            window.location.href = '3905.html';
            break;
        case '3950':
            window.location.href = '3950.html';
            break;

        case '3924':
            window.location.href = '3921.html';
            break;
        case '3700':
            window.location.href = '3700.html';
            break;
            default:
            errorMessage.style.display = 'block';
            break;
    }
}