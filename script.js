window.onload = function () {

var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var getRandomLetter = function () {
    return array[Math.floor(Math.random() * array.length)];//Генерирую случайную букву.
};
letter = getRandomLetter();//Присваиваю переменной функцию.
document.getElementById("word").textContent = letter;//Записываю в пустой div случайную переменную letter.
userInput = document.getElementById("inputValue");//Получить ввод пользователя.

function compareValues(){
    if(letter == userInput){alert("You win!")};//Cравнить ввод пользователя с текущим случайным символом.
}

};
