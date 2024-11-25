let num1 = +prompt("San jaz")
let num2 = +prompt("San Jaz")
let tanba = prompt('Tanbalar jaz')



function korculator(a, b, tanba) {

    

    if(tanba == '+'){
        return a + b;
    } else if (tanba == '-'){
        return a - b;
    } else if (tanba == '*'){
        return a * b;
    } else if (tanba == '/'){
        return a / b;
    }
}

alert(korculator(num1, num2, tanba))