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