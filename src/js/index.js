alert("HOME WORK");
console.log("Простое дз");
var yourBrowser = "Chrome";
var ielog = "We don't support IE browser!";
var webKitlog = "We support your browser = ";
var otherlog = "We hope your specific browser works fine";


console.log("If result of home work");
var ifElseResult;
if (yourBrowser === "IE") {
    ifElseResult = ielog;
} else if (yourBrowser === "Chrome" || yourBrowser === "Firefox" || yourBrowser === "Opera" || yourBrowser === "Safari") {
    ifElseResult = webKitlog + yourBrowser;
} else {
    ifElseResult = otherlog;
}
console.log('IF - ElSE SOlUTIOn: ', ifElseResult);


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
console.log('SWITCH SOlUTIOn: ', switchResult);


console.log("сложное дз");


var array = ["HTMl", 11, "JavaScript", 2, "CSS", 23, 12];
console.log("array = ", array);

array.push(-5);
console.log("array = ", array);

array.unshift(1000);
console.log("array = ", array);

array.push("last array element");
console.log("array = ", array);

array.splice(0, 4, 1000, "HTMl", 11);
console.log("array = ", array);

var result = array.filter(function (item) {
    return typeof item === "number";
});
console.log("array = ", result);

var newarray = result.map(function (item) {
    return item * item
});
console.log("array = ", newarray);

var lastarray = Math.max.apply(null, newarray);
console.log("Максимальное значение  = ", lastarray);


console.log("Дополнительно ");

var lastarray = Math.min.apply(null, newarray);
console.log("Минимальное значение  = ", lastarray);


var sum = 0;

for (var  i = 0; i <= newarray.lenght; i++) {
    sum = sum + newarray[i];
}
console.log("Сумма элементов массива = ", sum);
