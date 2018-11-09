alert("HOME WORK");
console.log("Простое дз");
var yourBrowser = "Chrome";
var ieLog = "We don't support IE browser!";
var webKitLog = "We support your browser = ";
var otherLog = "We hope your specific browser works fine";


console.log("If result of home work");
var ifElseResult;
if (yourBrowser === "IE") {
    ifElseResult = ieLog;
} else if (yourBrowser === "Chrome" || yourBrowser === "Firefox" || yourBrowser === "Opera" || yourBrowser === "Safari") {
    ifElseResult = webKitLog + yourBrowser;
} else {
    ifElseResult = otherLog;
}
console.log('IF - ELSE SOLUTION: ', ifElseResult);


console.log("Swith result of home work");
var switchResult = "Chrome";
switch (switchResult) {
    case "IE":
        console.log("We don't support IE browser!");
        break;
    case "Chrome":
    case "Firefox":
    case "Opera":
        console.log("We support your browser = " + switchResult);
        break;
    default:
        console.log("We hope your specific browser works fine");
}
console.log('SWITCH SOLUTION: ', switchResult);


console.log("сложное дз");


var Array = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
console.log("Array = ", Array);

Array.push(-5);
console.log("Array = ", Array);

Array.unshift(1000);
console.log("Array = ", Array);

Array.push("Last array element");
console.log("Array = ", Array);

Array.splice(0, 4, 1000, "HTML", 11);
console.log("Array = ", Array);

var result = Array.filter(function (item) {
    return typeof item === "number";
});
console.log("Array = ", result);

var NewArray = result.map(function (item) {
    return item * item
});
console.log("Array = ", NewArray);

var LastArray = Math.max.apply(null, NewArray);
console.log("Максимальное значение  = ", LastArray);


console.log("Дополнительно ");

var LastArray = Math.min.apply(null, NewArray);
console.log("Минимальное значение  = ", LastArray);


var sum = 0;

for (var  i = 0; i < LastArray.lenght; i++) {
    sum = sum + LastArray[i];
}
console.log("Сумма элементов массива = неполучилось", sum);
