document.addEventListener('DOMContentLoaded', function() {
    let currentEntry = null;
    function loadRandomEntry(data) {
        currentEntry = data[Math.floor(Math.random() * data.length)];
        document.querySelector('.form__input').setAttribute('placeholder', currentEntry.placeholder);
    }

    fetch('prequery.json')
        .then(response => response.json())
        .then(data => loadRandomEntry(data))
        .catch(error => console.error('Error loading JSON:', error));

    document.querySelector('.form').addEventListener('submit', function(event) {
        var inputValue = document.querySelector('.form__input').value;
        if (currentEntry && currentEntry.answers.includes(inputValue)) {
            event.preventDefault();
            window.location.href = currentEntry.destination;
        }
    });
});
