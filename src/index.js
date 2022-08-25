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

function askNumbers() {
    const getNumber = prompt("Enter a number");
    for (let iterator = 0; iterator < iterationsStorage; iterator++) {
        if (isNaN(+getNumber)) {
            alert("You entered not a number");
            continue;
        }
        if (getNumber === "break" || getNumber === false) {
            return Math.min(iterationsStorage);
        } else if (getNumber === '') {
            alert("You didn't enter a value");
            iterator--;//Повертаємось на одну ітерацію назад
        } else if (iterator[iterationsStorage] < iterator - 1[iterationsStorage]) {
            iterationsStorage += iterator - 1[iterationsStorage];//Если число, то должны сравнить с прошлым, и оставить минимальное.
        } else {
            iterationsStorage += getNumber + ',';
        }
    }
}

askNumbers();
console.log(iterationsStorage);