var generateSign = function(){
var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//Работает.

var getRandomLetter = function () {
    return array[Math.floor(Math.random() * array.length)];//Генерирую случайную букву. Работает.
};

letter = getRandomLetter();//Присваиваю переменной функцию. Работает.
document.getElementById("word").textContent = letter;//Записываю в пустой div случайную переменную letter. Работает.

}

var compare = function(){
   var userInput = document.getElementById("inputValue").value;//Получить,введённый пользователем 
   if(userInput == letter){
     $(document).ready(function(){
	   $("span:contains('" + letter + "')").addClass("correct");
	 });
     //alert('you win!');
   }else{
     alert(userInput);
   };
}

