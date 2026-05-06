function dejMi3() {
    return 3;
}

console.log(dejMi3())

// funkce s logem
function nasobic(a,b) {
    console.log(a*b);
}

let r = nasobic(3,5)
console.log(r)

// Funkce s return

function nasobic2(a,b) {
    return a * b; 
}

let r2 = nasobic2(5,3)
console.log(r2 + 1)

// return ukončí funkci

function konec() {
    console.log("A");
    return "Hotovo";
    console.log("B"); // toto neprojde
}

let konec2 = konec();
console.log(konec())

