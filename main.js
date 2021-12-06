// let str = "How can mirrors be real if our eyes aren't real"
//kata name "toJadenCase" --> 6kyu
String.prototype.toJadenCase = function () {//adet to class String metod toJadenCase --> [How Can Mirrors...]
    let flag = false;
    let arr = [...this];
    arr.forEach((item, i) => {
        if (flag) {
            arr[i] = item.toUpperCase();
            flag = false
        }
        if (item === " ") {
            flag = true;
        }

    })
    return arr.join("")
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase())  // выыодит полученную строку в стиле артиста Джейдона ... непомню как его по батюшке (каждое слово с загл)

//  _____________________________________________________________________________________________________
function digPow(n, p) {  // kata mame : "Playing with digits" 6 kyu 
    let nums = [...n.toString()].map((el) => +el);
    let degre = 0;
    for (let i = 0; i < nums.length; i++) {
        degre += nums[i] ** (p + i);
    }

    if (degre === n) {
        return 1;
    } else if (degre % n !== 0) {
        return -1;
    }
    return degre / n;
}
console.log(digPow(46288, 3));//цифра берется как символы [4,6,2,8,8] потом каждый симол возводится в степень равную значению 2^ого аргумента который дикрементится с каждым символом. 

function digPow1(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)// most interesting solution of this task, you can use them ;)
    return x % n ? -1 : x / n
}
//________________________________________________________________________________________________________

// kata name "RGB To Hex Conversion" -> 5 kyu
function rgb(...arg) {  // на вход RGB(...,...,...) на выход HEX(FFD700) но без символа #
    arg.forEach((item, i) => {
        if (item < 0) {
            arg[i] = 0;
        }
        if (item > 255) {
            arg[i] = 255;
        }
    })
    let [r1, g1, b1] = arg;
    let a = "#" + ((1 << 24) + (r1 << 16) + (g1 << 8) + b1).toString(16).slice(1);
    let s = a.split("")//если надо с символом # то просто--> return a;
    s.shift();
    return s.join("").toUpperCase();
}
console.log(rgb(266, 215, 0));
//__________________________________________________________________________________________________________
