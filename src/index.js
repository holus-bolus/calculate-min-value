/*Я хочу, чтобы была функция, которая будет бесконечно спрашивать пока пользователь не введет слово break или отмена в
окне prompt. Мы должны игнорировать, если пользователь ввел не число, не просчитывать, то есть после некорректного ввода
снова сразу спрашиваем. Если число, то должны сравнить с прошлым, и оставить минимальное. Когда ввод останавливается,
мы возвращаем минимальное число из всех введенных.*/


/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

const askUserANumber = () => {
    let iterationStorage = '';
    while (true) {
        const askAQuestion = prompt("Enter a number");
        if (isNaN(+askAQuestion) || iterationStorage === '') {
            continue;
        }
        //Перебираємо промпт на наявність слова break чи false
        for (let counter = 0; counter < iterationStorage.length; counter++) {
            if (askAQuestion === "break" || askAQuestion === false) {
                return iterationStorage;
            }
        }
        iterationStorage += +askAQuestion;
        for (let iteration = 0; iteration < iterationStorage; iteration++) {
            //Якщо iterationstorage дорівнює пустій строці, ми записуємо число. Якщо в iterationsStorage вже є число, ми беремо попереднє число, додаємо кому і додаємо нове число
            iterationStorage = (iterationStorage === '') ? askAQuestion : `${iterationStorage}, ${askAQuestion}`;
        }
        Math.min(+iterationStorage);
    }
}

askUserANumber();