function rekniAhoj() {
    console.log("Čus");

}

rekniAhoj();
rekniAhoj();

let pozdrav = "Pozdrav!";

function ukazPozdrav() {
    console.log(pozdrav)
}

function testLocal(){
   let localValue = 123;
    console.log(localValue)
}

ukazPozdrav();
testLocal();




if(true) {
    var y = "var blok nerespektuje";
}
console.log(y);

// Parametr & Argument

function test(name) { // name = parametr
    console.log("Ahoj" + name);
}

test("Alice");
test(123);

function scitani(num1, num2) {
    console.log(num1 + num2);
}

scitani(5,8);
    
function vypisCisla(zacatek, konec) {
    for (let i = zacatek; i <= konec; i++){
        console.log(i);
    }
}
vypisCisla(3,7);