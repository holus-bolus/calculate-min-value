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

let iterationsStorage = '';

function askMinNumber() {
    let numberStorage = Infinity;
    while (true) {
        const answerANumber = prompt("Enter a number");
        if (answerANumber === "break" || answerANumber === null) {
            break;
        }
        if (isNaN(+answerANumber)) {
            continue;
        }
        numberStorage = Math.min(numberStorage, +answerANumber);
    }
    return numberStorage;
}

askMinNumber();
console.log(iterationsStorage);