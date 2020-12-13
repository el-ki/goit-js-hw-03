// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.Каждое поле объекта,
//     передаваемого в функцию, имеет вид "имя": "зарплата".

const countTotalSalary = function(employees) {
    let total = 0
    const values = Object.values(employees);
    for (let i = 0; i < values.length; i += 1) {
        total += values[i]; 
    }
    return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400