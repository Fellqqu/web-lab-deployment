const osPlatform = navigator.platform;
const browserInfo = navigator.userAgent;

localStorage.setItem('osInfo', osPlatform);
localStorage.setItem('browserInfo', browserInfo);

const savedOS = localStorage.getItem('osInfo');
const savedBrowser = localStorage.getItem('browserInfo');

const footer = document.querySelector('footer');
const systemInfoText = document.createElement('p');

systemInfoText.style.marginTop = '15px';
systemInfoText.style.fontSize = '0.85rem';
systemInfoText.style.color = '#6b7280';

systemInfoText.innerHTML = `<strong>Система:</strong> ${savedOS} <br> <strong>Браузер:</strong> ${savedBrowser}`;

footer.appendChild(systemInfoText);
const reviewsContainer = document.getElementById('reviews-container');
const variantNumber = 11;

fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
    .then(response => response.json())
    .then(comments => {
        reviewsContainer.innerHTML = '';
        
        comments.forEach(comment => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            
            reviewCard.innerHTML = `
                <h4>${comment.name}</h4>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>
            `;
            
            reviewsContainer.appendChild(reviewCard);
        });
    })
    .catch(error => {
        reviewsContainer.innerHTML = '<p style="color: red;">Помилка завантаження відгуків.</p>';
    });
const modal = document.getElementById('feedback-modal');
const closeModalBtn = document.getElementById('close-modal');
const contactFormDelayMs = 60_000;

setTimeout(() => {
    modal.style.display = 'flex';
}, contactFormDelayMs);

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setDayMode() {
    body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙';
}

function setNightMode() {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
}

function autoSetTheme() {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
        setDayMode();
    } else {
        setNightMode();
    }
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setDayMode();
    } else {
        setNightMode();
    }
});

autoSetTheme();
