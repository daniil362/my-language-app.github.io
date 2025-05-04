// Исходный текст
const text = `
This is a sample sentence for training.
Another example to practice your pronunciation skills.
Finally, this will help you improve speaking fluency.`;

let sentences = text.split('.').map(s => s.trim()); // массив предложений
let currentIndex = 0;

// Функция для чтения одного предложения
function readCurrentSentence() {
    const currentSentence = sentences[currentIndex]; // Текущее предложение
    const utterance = new SpeechSynthesisUtterance(currentSentence); // Объект для озвучки
    utterance.lang = 'en-US'; // Английская локализация
    window.speechSynthesis.speak(utterance); // Говорим предложение вслух
}

// Функция для перехода к следующему предложению
function nextSentence() {
    currentIndex++; // Переходим к следующему предложению
    if (currentIndex < sentences.length) {
        readCurrentSentence(); // Читаем следующее предложение
    } else {
        alert('Все предложения закончились');
    }
}

// Инициализация первой фразы
readCurrentSentence();  Пример обработки нажатия кнопки "Следующее"
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nextButton').addEventListener('click', nextSentence);
});

// Другие части интерфейса и взаимодействия остаются такими же, как ранее.