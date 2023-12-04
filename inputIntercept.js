document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form').addEventListener('submit', function(event) {
        var inputValue = document.querySelector('.form__input').value;
        if (inputValue === '21' || inputValue === '21호' || inputValue === '파운데이션 21호') {
            event.preventDefault();
            window.location.href = 'congrats.html';
        }
    });
});
