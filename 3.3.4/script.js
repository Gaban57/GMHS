// Vnořené podmínky
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Vítej na stránce!")
    if (isAdmin) {
        console.log("přísup do panelu Admin povolen")
    } else{
        console.log("Přístup jako uživatel povolen")
    }
}

// Operátory

let age = 20;
let hasDriverlicense = true;

if (age >= 18 && hasDriverlicense) {
    console.log("Můžeš řídit!");
} else {
    console.log("řídit nemůžeš")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("Je čas relaxovat!")
} else {
    console.log("Musíme pracovat!")
}