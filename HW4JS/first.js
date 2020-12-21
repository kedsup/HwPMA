'use strict';

console.log(2 + "2" == "2" + 2); //true в обоих случаях произойдет конкатнеция и будет "22" == "22" -> true
console.log(2 + "3" == "3" + 2); //false в обоих случаях произойдет конкатнеция и будет "23" == "32" -> false
console.log("3" + "2" == 3 + 2); //false в первом случае конкатенация во втором случае просто сложение двух чисел "32" == 5 -> false
console.log("3" + "2" == "3" + 2); //true в первом случае конкатенация во втором случае тоже так как "+" и один из операндов строка 2 преобразовывается в строку "32" == "32" -> true
console.log("3" + "2" == 2 + "3"); //false в первом случае конкатенация во втором случае тоже так как "+" и один из операндов строка "32" == "23" -> false
console.log(2 + Number("3") == Number("3") + 2); //true Number("3") превратит строку в число 3 и просто произойдет математическое сложение как слева так и справа 5 == 5 -> true

console.log(12 / "6"); //2 произойдет преобразование типа из строки в число из за оператора "/"
console.log("number" + 15 + 3); // number153 происходит конкатенация так как у нас оператор "+" и строка первый операнд выйдет "number15" + 3 -> "number153"
console.log(15 + 3 + "number"); // 18number сначала 15 + 3 = 18 так как оба number после 18 + "number" строка -> конкатенация
console.log([1] > null); // true из обьекта массива "[1]" "достанется" числовое значение 1, и null преобразуется в 0 из за оператора ">" и 1 > 0 -> true
console.log("foo" + + "bar"); /*fooNaN второй плюс выступает как оператор преобразования в число
Так как "bar" в число преобразовать нельзя, возвращается NaN, 
дальше операция конкатенации строки “foo” и NaN. NaN приводится к строке как "NaN"*/
console.log('true' == true); //false не строгое сравнение приведет значения к числу “true” приводиться к NaN, а true приводиться к 1. NaN != 1 -> false
console.log(false == 'false'); //false “false ” становится NaN, а false становится 0. NaN !=0 -> false
console.log(null == ''); //true null приведеться к 0, и '' к 0 -> 0 == 0 -> true
console.log(!!"false" == !!"true"); /*true строки не пустые, так что при преобразовнии типов станут true оператор "!" преобразует их в булевое значение false 
после еще один "!" в true и true == true -> true*/
console.log([`x`] == `x`); //true из обьекта массива "[`x`]" "достанется" строка `x` так что `x` == `x` -> true
