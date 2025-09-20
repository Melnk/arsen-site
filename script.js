// 1. Объявляем переменные, чтобы "поймать" наши элементы со страницы
const trunkButton = document.getElementById('trunk-button'); // Кнопка
const trunkImage = document.getElementById('trunk-image');   // Картинка

// 2. Создаем функцию, которая будет выполняться при клике
function toggleTrunk() {
    // 3. Проверяем текущее состояние багажника по src картинки
    if (trunkImage.src.includes('trunk_closed.jpg')) {
        // 4. Если багажник закрыт - меняем картинку на открытую
        trunkImage.src = 'trunk_open.jpg';
        trunkImage.alt = 'Открытый багажник';
        // 5. Меняем текст на кнопке
        trunkButton.textContent = 'Закрыть багажник!';
    } else {
        // 6. Если багажник открыт - меняем картинку на закрытую
        trunkImage.src = 'trunk_closed.jpg';
        trunkImage.alt = 'Закрытый багажник';
        // 7. Возвращаем первоначальный текст кнопке
        trunkButton.textContent = 'Открыть багажник!';
    }
}

// 8. "Вешаем" на кнопку обработчик события.
// Когда на кнопку кликнутут ('click'), выполни функцию toggleTrunk.
trunkButton.addEventListener('click', toggleTrunk);