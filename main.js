// let str = "How can mirrors be real if our eyes aren't real"

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
function digPow(n, p) {// kata mame : "Playing with digits" 6 kyu 
    let nums = [...n.toString()].map((el) => +el);
    let degre = 0;
    for (let i = 0; i < nums.length; i++) {
        degre += nums[i] ** (p + i);
    }
    console.log(degre)
    if (degre === n) {
        return 1;
    } else if (degre % n !== 0) {
        return -1;
    }
    return degre / n;
}
console.log(digPow(46288, 3));
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)// most interesting solution of this task
    return x % n ? -1 : x / n
}
//________________________________________________________________________________________________________