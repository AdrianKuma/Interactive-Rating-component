const ratingButtons = document.querySelectorAll('.card__selection button');
const ratingText = document.getElementById('rating')
const cardContainer = document.querySelector('.card__container')
const cardThank = document.querySelector('.card__container-thank')
const submit = document.getElementById('submit')







ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('card__selection-button-toggle'));
        button.classList.add('card__selection-button-toggle');
        const rating = button.innerText;
        ratingText.innerText = rating;
    });
});

submit.addEventListener('click',()=>{
    cardContainer.style.display = 'none';
    cardThank.style.display = 'flex';

})