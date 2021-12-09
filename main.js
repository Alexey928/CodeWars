// let str = "How can mirrors be real if our eyes aren't real"
//kata name "toJadenCase" --> 7kyu
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
function powMod(n, p, m) {//  функция реализует Math.pow(x,y)%n для очень больших y ->10000000 
    if (n < 1) { return 0; }
    if (m < 0) { m = 0; }
    p = Math.round(p);
    n = n % m;
    var r = 1;
    while (p >= 1) {
        if (p % 2) {
            r = (r * n) % m;
        }
        n = (n * n) % m;
        p = Math.floor(p / 2);
    }
    return r;
}
console.log(powMod(5, 1000000, 2437));
/*Если нужен только остаток, то его можно брать в ходе работы, тогда мы не упарываемся в километровые числа. Самый простой вариант - при возведении в степень n**p сделать
цикл из p умножений на n (после каждого берем остаток), но гораздо быстрее смотреть биты числа р и умножать на соответствующие им значения n**(2**i) */
//_________________________________________________________________________________________________________________



function areaOfIntersection(a, b, r) {
    let rr1 = r * r;
    let rr0 = r * r;
    let r0 = r;
    let r1 = r
    let x0 = a[0],
        x1 = b[0],
        y0 = a[1],
        y1 = b[1];
    var d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
    if (d > r1 + r0) {
        return 0;
    }
    else if (d <= Math.abs(r0 - r1) && r0 >= r1) {

        return Math.trunc(Math.PI * rr1);
    }
    else if (d <= Math.abs(r0 - r1) && r0 < r1) {

        return Math.trunc(Math.PI * rr0);
    }
    else {
        var phi = (Math.acos((rr0 + (d * d) - rr1) / (2 * r0 * d))) * 2;
        var theta = (Math.acos((rr1 + (d * d) - rr0) / (2 * r1 * d))) * 2;
        var area1 = 0.5 * theta * rr1 - 0.5 * rr1 * Math.sin(theta);
        var area2 = 0.5 * phi * rr0 - 0.5 * rr0 * Math.sin(phi);
        return Math.trunc(area1 + area2);
    }
}
console.log(areaOfIntersection([0, 0], [7, 0], 5)); // S пересечения двух окружностей 
//______________________________________________________________________________________________________________

function annulusArea(a) {
    let x = Math.pow(a / 2, 2) * Math.PI;
    let y = x.toString().split("");
    let lengh;
    y.forEach((item, i) => {
        if (item === ".") {
            lengh = i + 4;
        }
    });
    y.length = lengh;

    if (parseInt(y[y.length - 1]) >= 5) {
        y[y.length - 2] = y[y.length - 2] + 1;
        y.pop();
    } else {
        y.pop();
    }
    return parseFloat(y.join(""));
}
console.log(annulusArea(13));




function remainder(a, b) {
    return a >= b ? a % b : b % a

}
Beginner Series #3 Sum of Numbers 1111111111