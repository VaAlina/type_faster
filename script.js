var generateSign = function() {
    var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //Работает.
    var getRandomLetter = function() {
        return array[Math.floor(Math.random() * array.length)]; //Генерирую случайную букву. Работает.
    };
    letter = getRandomLetter(); //Присваиваю переменной функцию. Работает.
    $(document).ready(function() {
        $("span:contains('" + letter + "')").addClass("chosen"); //Выделить букву, которую следует ввести синим.
    });
}

var compare = function() {
    $(document).ready(function() {
        var userInput = document.getElementById("inputValue").value; //Получить,введённый пользователем
        if (userInput == letter) { //Если пользователь ввёл правильный символ, выделяем его зелёным.
            $("span:contains('" + letter + "')").addClass("correct");
        } else {
            $("span:contains('" + userInput + "')").addClass("incorrect"); //Иначе, выделяем введённый символ красным.
        };
    });
    setTimeout(function() {
        clear();
    }, 500); //Позволю системе отобразить результаты ввода (окрашибание символов в красный или зелёный цвет).
}

var clear = function() {
    $(document).ready(function() {
        document.getElementById("inputValue").value = ""; //Очистить поле ввода.
        letter = ""; //Присвоить переменным пустую строку.
        userInput = "";

        $("span").removeClass("chosen, correct, incorrect");//Поудалять все, присвоенные ранее, классы.
        generateSign(); //Вызвать generateSign().
    });
}
