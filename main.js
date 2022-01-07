
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

//считает площадь 2 ух пересекающихся окружностей одного диаметра

function areaOfIntersection(a, b, r) {
    let rr1 = r * r;
    let rr0 = r * r;
    let r0 = r;
    let r1 = r  //  если переопределить r1 r0 через параметры то мржно и для разных диаметров :)
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

function annulusArea(a) { //расчитает s кольца по хорде 
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



//_______________________________________________________________________________
function remainder(a, b) { // выберет большее и посчитает остаток от днлнения 
    return a >= b ? a % b : b % a
}
//Beginner Series #3 Sum of Numbers 1111111111
//_____________________________________________________________________________
function grid(N) { //    реализует алфовитную матрицу 
    let str = "";
    let linerIterator = 0;
    let linecount = 1
    let iterator = N * N;
    let aTuZ = 97
    while (iterator != 0) {
        if (aTuZ > 122) {
            aTuZ = 97;
        }
        if (linerIterator === N) {
            str += "\n"
            linerIterator = 0;
            aTuZ = 97 + linecount
            linecount++
        } else {
            str += `${String.fromCodePoint(aTuZ++)} `;
            iterator--;
            linerIterator++
        }
    }
    return N === 1 ? "a" : str
}
console.log(grid(30))

// ______________________________________________________________________
// реализует Хофштадтерские женские и мужские последовательности. 
function F(n) {
    if (n === 0) {
        return 1
    }
    return n - M(F(n - 1));
}

function M(n) {
    if (n === 0) {
        return 0
    }
    return n - F(M(n - 1))
}
console.log(F(6))
console.log(M(6))
//____________________________________________________________________________

const binaryArrayToNumber = arr => { // с бинарного масива определяет десятичное значение 
    const summArr = []
    const arrLengh = arr.length;
    let iterator = 0;
    let flag = true;
    arr.forEach((item, i) => {
        if (item === 0) {
            flag = false;
        }
        if (flag) {
            summArr[iterator] = 2 ** (arrLengh - i);
            iterator += 1;
        } else { flag = true }
    })
    return (summArr.reduce((sum, current) => sum + current, 0) / 2);

};
console.log(binaryArrayToNumber([0, 1, 1, 1]));//-->7 :)
//_______________________________________________________________________________________

function findOdd2(A) {//ишет  не четное колво повторов в масиве
    let a = [...A].sort((a, b) => a - b);
    let compareValue = a[0];
    let appears = 0
    for (let i = 0; i < a.length; i++) {
        if (compareValue === a[i]) {
            appears += 1;
            compareValue = a[i]
        } else {
            if (appears % 2) {
                return a[i - 1];
            }
            appears += 1;
            compareValue = a[i]
        }
    }
    return (a[a.length - 1] !== a[a.length - 2]) ? a[a.length - 1] : a[0];
}
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);// interesting desigen основаное на применении исключаещего или 
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
//_______________________________________________________________________________________
function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(even_or_odd(4))
//__________________________________________________________________________
function adjacentElementsProduct(array) {
    let curMul = -Infinity;
    for (let i = 1; i < array.length; i++) {
        curMul = array[i - 1] * array[i] > curMul ? array[i - 1] * array[i] : curMul;
    }
    return curMul;
}

console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]))

//__________________________________________________________________________________________________
function iceBrickVolume(radius, bottleLength, rimLength) {  //кубик в бутылке :)
    return Math.round((bottleLength - rimLength) * ((2 * radius) * (2 * radius) / 2))
}
console.log(iceBrickVolume(5, 30, 7));

//____________________________________________________________________________________
function houseOfCards(floors) {// находит колво карт в карточном домике в зависимости от кол - ва етожей 1 етаж 7карт 2 етажа 15 итд ...
    if (isAN(floors) && floors > 0 && floors % floors === 0) {
        floors = floors;
    } else { return new Error('Whoops! is a not a namber') }// Валидируем на целое и то что это число если что то поднимаем ошибку
    function NumOfBasisWall(w) {
        if (w === 1) {
            return 4
        }
        return ((NumOfBasisWall(w - 1) + 2))
    }
    let sumWal = 2
    for (let i = 1; i <= floors; i++) {
        sumWal += NumOfBasisWall(i);
    }
    function NumOfBasisFlor(f) {
        if (f === 1) {
            return 1
        }
        return NumOfBasisFlor(f - 1) + 1
    }
    let sumFlor = 0
    for (let i = 1; i <= floors; i++) {
        sumFlor += NumOfBasisFlor(i);
    }
    return sumFlor + sumWal

    function isAN(value) {
        return isFinite(value) && value === parseInt(value, 10);
    }
}
console.log(houseOfCards(100));
console.log(houseOfCards("5"));

//__________________________________________________________________________________________
function pickPeaks(arr) {// поиск пиков в масиве с учетом плато (немного недоделаная :(  )
    var peak;
    let ind = [];
    let pik = arr.reduce(function (peaks, val, i) {
        if (arr[i + 1] > arr[i]) {
            peak = arr[i + 1];
        } else if ((arr[i + 1] < arr[i]) && (typeof peak === 'number')) {
            peaks.push(peak);
            if (arr[i] !== arr[i + 1] && true) {
                ind.push(i);
            }
            peak = undefined;
        }
        return peaks;
    }, []);

    return { pos: ind, peaks: pik };
}
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]))
//________________________________________________________________________________________
function areaLargestSquare(r) {
    return 2 * (r ** 2);  // площадь квадрата впвписанного в окружность;
}
//_________________________________________________________________________________________

function fibonacci(max) {// cумма всех четных в последовательности фибоначи 
    let basis = [0, 1];
    let evenSumm = 0;
    while (basis[1] < max) {
        let timaBasis = [basis[1], (basis[0] + basis[1])];
        basis[0] = timaBasis[0]
        basis[1] = timaBasis[1]

        if (timaBasis[1] % 2 === 0 && timaBasis[1] < max) {
            evenSumm += timaBasis[1];
        }
    }
    return evenSumm;
}
console.log(fibonacci(25997544));
//__________________________________________________________________________________________

function tribonacci(signature, n) {// как фибоначи тока для 3 предидущих значений 
    if (n === 0) {
        return [];
    }
    if (n > 0 && n < 3) {
        return [1];
    }
    let sisLenght = n - signature.length;
    for (let i = 0; sisLenght > i; i++) {
        signature.push((signature[i] + signature[i + 1] + signature[i + 2]))
    }
    return signature;
}

console.log(tribonacci([2, 5, 6], 5));
//_______________________________________________________________________________
function duplicateEncode(word) {//заменяет на ) если есть повтор и на ( если его нет 
    const wordArr = [];
    const ignorCase = word.toUpperCase();
    const are = [...ignorCase];
    are.forEach((item, i) => {
        let arr = [...are];
        arr.splice(i, 1);
        if (arr.join("").includes(item)) {
            wordArr[i] = ")"
        } else {
            wordArr[i] = "("
        }
    })
    return wordArr.join("");
}

// вход "hgvjvjh"-->["hg","vj","vj","h_"]
function yo(str) {
    const arrTwise = [];
    const arey = str.split("")
    arey.forEach((it, i) => {
        if (!(i % 2 == 0)) {
            arrTwise.push(`${arey[i - 1]}${it}`);
        }
    })
    if (!(arey.length % 2 === 0)) {

        arrTwise.push(arey[arey.length - 1] + "_")
    }


    return arey.length === 0 ? [] : arrTwise
}
//_________________________________________________________________________________________
console.log(yo("oooo"));

function curry(f) { // curry(f) выполняет каррирование
    debugger
    return function(a) {

        return function(b) {

            return f(a, b);
        };
    };
}
function sum(a, b) {

    return a + b;
}
let curriedSum = curry(sum);
curriedSum(5)
console.log( curriedSum(1)(2) ); // 3

// test areys m - n to unic value
//_____________________________________________________________________________________________________________________
function duplicateElements(m, n) {
    let bool = false;
    if (m.length===0||n.length===0){
        return false
    }
    m.forEach((item)=>{
        if(n.includes(item, 0)){
           bool = true
        }
    })
    return bool;
}
//__________________________________________________________________________________________________________________
// constract arey (syze x syze) with shifted value based on basis ;)  ;
multiplicationTable = function(size) {
  let arr = [];
  let basis  = [];
    for(let i = 0;i<size;i++){
        basis.push(i+1);
        arr.push(0)
    }
    let basisClon = [...basis];
    arr.forEach((item,i)=>{
        arr[i] = basis.map((it,i)=> it+basisClon[i])
        basis = arr[i];
    })
     arr.unshift(basisClon)
     arr.pop();
 return arr
}
console.log(multiplicationTable(10))
//____________________________________________________________________________________________________________________
let a =  [1,2,3,4];
a.forEach((item,i)=>{a[i]+=1})// прикол с форичём :)) а через итем не мутирует
console.log(a)



