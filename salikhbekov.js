function sayHello(name){
    return "привет" + name;
};
 console.log(sayHello("Мурад")); 
// Приветствует пользователя

function add(a , b){
    return a + b;
};
console.log(add(6 , 7));
// Складывает числа

function canVote(age) {
    if (age >= 18) {
        return "Можно голосовать";
    } else {
        return "Нельзя голосовать";
    }  
};
console.log(canVote(20));
console.log(canVote(16));
// Проверка возраста